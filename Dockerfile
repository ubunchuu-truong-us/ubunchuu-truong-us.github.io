# DO NOT CHANGE THE BASE IMAGE
FROM mcr.microsoft.com/devcontainers/base:ubuntu-24.04

LABEL org.opencontainers.image.source https://github.com/ubunchuu-truong-us/ubunchuu-truong-us.github.io
LABEL org.opencontainers.image.descripiton "Devcontainer image for Ubunchuu"

# DO NOT CHANGE THE DEFAULT USER
ARG DOCKERUSER=vscode

# Config sudoers and assign permission to non-root user
RUN \
  echo '${DOCKERUSER} ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers && \
  mkdir -p /home/${DOCKERUSER}/.local/bin /home/${DOCKERUSER}/.config && \
  chown -R ${DOCKERUSER} /home/${DOCKERUSER}/

WORKDIR /home/${DOCKERUSER}

RUN \
  apt-get update && apt-get install --no-install-recommends -y curl git-core neovim && \
  apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Install mise as the language manager
RUN curl https://mise.run | sh && \
  echo 'eval "$(~/.local/bin/mise activate bash)"' >> ~/.bashrc

# Install yarn
COPY mise.toml mise.toml
RUN mise install

USER ${DOCKERUSER}

# Install starship for non-root user with pure prompt
RUN \
  sh -c "$(curl -fsSL https://starship.rs/install.sh)" -- --yes -b /home/${DOCKERUSER}/.local/bin && \
  mkdir -p /home/${DOCKERUSER}/.config && \
  curl -fsSL "https://raw.githubusercontent.com/ubunchuu-truong-us/dotfiles/refs/heads/main/starship.toml" -o /home/${DOCKERUSER}/.config/starship.toml && \
  echo 'eval "$(starship init bash)"' >> /home/${DOCKERUSER}/.bashrc
