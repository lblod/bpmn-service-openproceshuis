// Source: https://github.com/bpmn-io/bpmn-to-image/blob/main/index.js

import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function printDiagram(page, options) {
  const {
    input,
    outputs,
    minDimensions,
    footer,
    title = true,
    deviceScaleFactor,
  } = options;

  const diagramXML = fs.readFileSync(input, "utf8");
  const diagramTitle =
    title === false ? false : title.length ? title : path.basename(input);

  await page.goto(`file://${__dirname}/skeleton.html`);

  const viewerScript = path.relative(
    __dirname,
    puppeteer.resolve("bpmn-js/dist/bpmn-viewer.production.min.js")
  );

  const desiredViewport = await page.evaluate(
    async (diagramXML, options) => {
      const { viewerScript, ...openOptions } = options;
      await loadScript(viewerScript);
      return openDiagram(diagramXML, openOptions);
    },
    diagramXML,
    {
      minDimensions,
      title: diagramTitle,
      viewerScript,
      footer,
    }
  );

  await page.setViewport({
    width: Math.round(desiredViewport.width),
    height: Math.round(desiredViewport.height),
    deviceScaleFactor,
  });

  await page.evaluate(() => resize());

  for (const output of outputs) {
    console.log(`writing ${output}`);

    if (output.endsWith(".pdf")) {
      await page.pdf({
        path: output,
        width: desiredViewport.width,
        height: desiredViewport.diagramHeight,
      });
    } else if (output.endsWith(".png")) {
      await page.screenshot({
        path: output,
        clip: {
          x: 0,
          y: 0,
          width: desiredViewport.width,
          height: desiredViewport.diagramHeight,
        },
      });
    } else if (output.endsWith(".svg")) {
      const svg = await page.evaluate(() => toSVG());
      fs.writeFileSync(output, svg, "utf8");
    } else {
      console.error(`Unknown output file format: ${output}`);
    }
  }
}

async function withPage(fn) {
  let browser;

  try {
    browser = await puppeteer.launch({
      executablePath: "/usr/bin/google-chrome",
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    await fn(await browser.newPage());
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

async function convertAll(conversions, options = {}) {
  const { minDimensions, footer, title, deviceScaleFactor } = options;

  await withPage(async function (page) {
    for (const conversion of conversions) {
      const { input, outputs } = conversion;

      await printDiagram(page, {
        input,
        outputs,
        minDimensions,
        title,
        footer,
        deviceScaleFactor,
      });
    }
  });
}

async function convert(input, output) {
  return await convertAll([
    {
      input,
      outputs: [output],
    },
  ]);
}

export { convertAll, convert };
