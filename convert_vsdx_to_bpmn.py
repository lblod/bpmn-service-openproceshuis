from vsdx import VisioFile
from bpmn_tools.flow import Task, Flow, Process
from bpmn_tools.notation import Definitions
from bpmn_tools.diagrams import Plane, Diagram
from bpmn_tools.collaboration import Collaboration, Participant
from bpmn_tools.layout import graphviz
from bpmn_tools import util
from pathlib import Path
import os
import sys

# INPUT

visio_file_path = sys.argv[1]
visio = VisioFile(visio_file_path)
page = visio.get_page(0) # TODO: loop over pages

# TASKS

tasks = {}

for shape in page.child_shapes: # TODO: also consider deeper nested shapes

  # 'Shape' shapes are 'help' elements in Visio --> of no use in BPMN
  if shape.shape_type == 'Shape':
    continue

  tasks[shape.ID] = Task(shape.text.strip(), id=f"task_{shape.ID}")

# FLOWS

flows = {}

for connector in page.connects:
  task_id = connector.xml.attrib.get("ToSheet")

  # Some connectors are 'help' elements in Visio --> of no use in BPMN
  if task_id not in tasks:
    continue

  flow_id = connector.xml.attrib.get("FromSheet")
  flow_type = connector.xml.attrib.get("FromCell")

  if flow_id not in flows:
    flows[flow_id] = {}

  if flow_type == "BeginX":
    flows[flow_id]["source_task_id"] = task_id
  elif flow_type == "EndX":
    flows[flow_id]["target_task_id"] = task_id
    
  # Create flow object when both source and target are known
  if 'source_task_id' in flows[flow_id] and 'target_task_id' in flows[flow_id]:
    source_task_id = flows[flow_id]["source_task_id"]
    target_task_id = flows[flow_id]["target_task_id"]

    source_task = tasks[source_task_id]
    target_task = tasks[target_task_id]

    flows[flow_id] = Flow(source_task, target_task, id=f"flow_{flow_id}") # TODO: set flow name

# PROCESS

process = Process()
process.extend(tasks.values())
process.extend(flows.values())

# COLLABORATION

participant = Participant(process=process) # TODO: fetch from Visio
collaboration = Collaboration() # TODO: fetch from Visio
collaboration.append(participant)

# DIAGRAM

plane = Plane(element=collaboration)
diagram = Diagram(plane=plane)

# DEFINITIONS

definitions = Definitions()
definitions.append(process)
definitions.append(collaboration)
definitions.append(diagram)

# OUTPUT

graphviz.layout(definitions)
bpmn = util.model2xml(definitions)

root_file_path, _ = os.path.splitext(visio_file_path)
bpmn_file_path = f"{root_file_path}.bpmn"
Path(bpmn_file_path).write_text(bpmn)