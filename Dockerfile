FROM jenkins/jenkins:2.414.2-jdk11

USER root

# Install essential tools
RUN apt-get update && apt-get install -y \
    lsb-release \
    curl

# Install Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y nodejs

# Install Docker CLI
RUN curl -fsSLo /usr/share/keyrings/docker-archive-keyring.asc \
  https://download.docker.com/linux/debian/gpg
RUN echo "deb [arch=$(dpkg --print-architecture) \
  signed-by=/usr/share/keyrings/docker-archive-keyring.asc] \
  https://download.docker.com/linux/debian \
  $(lsb_release -cs) stable" > /etc/apt/sources.list.d/docker.list
RUN apt-get update && apt-get install -y docker-ce-cli

USER jenkins

# Install Jenkins plugins
RUN jenkins-plugin-cli --plugins "blueocean:1.25.3 docker-workflow:1.28"

# Install additional tools or dependencies for your project, if needed
# Example: RUN npm install -g some-package

# Add any other project-specific configurations or setup steps here
