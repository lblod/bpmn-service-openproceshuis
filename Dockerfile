FROM semtech/mu-javascript-template:1.8.0
LABEL maintainer="info@redpencil.io"
ENV SUDO_QUERY_RETRY="true"
ENV SUDO_QUERY_RETRY_FOR_HTTP_STATUS_CODES="404,500,503"
ENV WRITE_DEBUG_TTLS="true"

# Install pip and graphviz
RUN apt-get update && \
    apt-get install -y python3-pip python3-venv graphviz && \
    rm -rf /var/lib/apt/lists/*

# Create virtual environment and install Python packages
RUN python3 -m venv /venv && \
    /venv/bin/pip install --upgrade pip && \
    /venv/bin/pip install vsdx bpmn-tools

# Add virtual environment to PATH
ENV PATH="/venv/bin:$PATH"