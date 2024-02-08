FROM node:18

# Arguments for container user and group
ARG DockerWORKDIR=/ubunchuu-truong-us
ARG DockerUSER=node
ARG DockerUID=2022
ARG DockerGID=2022
USER root

RUN \
    apt-get update && apt-get install -y curl sudo git-all wget vim nano jq unzip zip \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN \
    userdel -f node \
    && getent group ${DockerGID} || groupadd --gid ${DockerGID} ${DockerUSER} \
    && useradd --no-log-init --uid ${DockerUID} --gid ${DockerGID} -m ${DockerUSER} \
    && mkdir -p /etc/sudoers.d/ /home/${DockerUSER}/.local/bin /home/${DockerUSER}/.config \
    && echo ${DockerUSER} ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/${DockerUSER} \
    && chmod 0440 /etc/sudoers.d/${DockerUSER} \
    && chown -R ${DockerUID}:${DockerGID} /home/${DockerUSER}
    
USER ${DockerUSER}
WORKDIR ${DockerWORKDIR}

RUN \
    curl -fsSL https://starship.rs/install.sh | sh -s -- -y -b /home/${DockerUSER}/.local/bin && \
    SNIPPET=' export PROMPT_COMMAND="history -a" && \
    export PATH=$PATH:/home/'${DockerUSER}'/.local/bin && \
    export HISTFILE=/home/'${DockerUSER}'/commandhistory/.bash_history && \
    eval "$(starship init bash)" && \
    starship preset no-nerd-font -o ~/.config/starship.toml' && \
    mkdir -p /home/${DockerUSER}/commandhistory && \
    touch /home/${DockerUSER}/commandhistory/.bash_history && \
    echo $SNIPPET >> "/home/${DockerUSER}/.bashrc"
    
ENV VARIANT ubunchuu-truong-us
SHELL ["/bin/bash", "-il", "-c"]