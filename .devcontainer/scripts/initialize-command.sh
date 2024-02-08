#!/bin/bash
set -Eeuo pipefail

# Define eetportal working dir on local
export UBUNCHUU_DIR=~/.ubunchuu-truong-us

# make sure folders mounted by docker exist
# when created by docker they will owned by root and not the current user
mkdir -p ~/.ssh
mkdir -p ~/.gnupg
mkdir -p ~/.vscode-server
mkdir -p ${UBUNCHUU_DIR}/.ssh

# Always renew ssh folder if have any updated
echo "[INFO] Copy SSH key" 1>&2
cp -rT ~/.ssh/ ${UBUNCHUU_DIR}/.ssh/
chmod 600 -R ${UBUNCHUU_DIR}/.ssh/*

# Git config
echo "[INFO] Copy gitconfig" 1>&2
cp -f ~/.gitconfig ${UBUNCHUU_DIR}/.gitconfig

# Define docker args
SCRIPTDIR=$(dirname "$0")
ENV_FILE_PATH="${SCRIPTDIR}/../../.env"

touch "$ENV_FILE_PATH"
cat <<EOT >"$ENV_FILE_PATH"
USER=$(whoami)
HOME=/home/$(whoami)
CONTAINER_USER=$(whoami)
CONTAINER_UID=$(id -u)
CONTAINER_GID=$(id -g)
UBUNCHUU_DIR=$(echo $UBUNCHUU_DIR)
EOT

# Finished Setup
echo "[INFO] Success init scripts" 1>&2
echo "[INFO] Installing dev containers..." 1>&2