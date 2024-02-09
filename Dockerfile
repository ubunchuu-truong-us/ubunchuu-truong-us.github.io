# DO NOT CHANGE THE BASE IMAGE
FROM mcr.microsoft.com/devcontainers/base:ubuntu-22.04
# DO NOT CHANGE THE DEFAULT USER
ARG DOCKERUSER=vscode

# Config sudoers and assign permission to non-root user
RUN \
  echo '${DOCKERUSER} ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers && \
  mkdir -p /home/${DOCKERUSER}/.local/bin /home/${DOCKERUSER}/.config && \
  chown -R ${DOCKERUSER} /home/${DOCKERUSER}/

# Install Node.js 18
RUN \
  curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
  apt-get update && apt-get install --no-install-recommends -y nodejs git sudo vim && \
  apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Install yarn
RUN \
  npm install -g yarn

USER ${DOCKERUSER}

# Install starship for non-root user with pure prompt
RUN \
  sh -c "$(curl -fsSL https://starship.rs/install.sh)" -- --yes -b /home/${DOCKERUSER}/.local/bin && \
  echo 'eval "$(starship init bash && starship preset pure-preset -o ~/.config/starship.toml)"' >> /home/${DOCKERUSER}/.bashrc
