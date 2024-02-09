# Use the base image
FROM mcr.microsoft.com/devcontainers/base:ubuntu-22.04

ARG DOCKERUSER=vscode
RUN \
  echo '${DOCKERUSER} ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers && \
  mkdir -p /home/${DOCKERUSER}/.local/bin /home/${DOCKERUSER}/.config /workspace/ubunchuu-contributor && \
  chown -R ${DOCKERUSER} /home/${DOCKERUSER}/ /workspace/ubunchuu-contributor

# Install Node.js 18
RUN \
  apt-get update && apt-get install --no-install-recommends -y git curl sudo wget vim && \
  curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
  apt-get update && apt-get install --no-install-recommends -y nodejs && \
  apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Install yarn
RUN \
  npm install -g yarn

USER ${DOCKERUSER}
WORKDIR /workspace/ubunchuu-contributor

# Install starship for non-root user
RUN \
  sh -c "$(curl -fsSL https://starship.rs/install.sh)" -- --yes -b /home/${DOCKERUSER}/.local/bin && \
  echo 'eval "$(starship init bash && starship preset no-nerd-font -o ~/.config/starship.toml)"' >> /home/${DOCKERUSER}/.bashrc
