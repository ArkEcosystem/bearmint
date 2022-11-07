#!/usr/bin/env bash

set -e

# Typography
red=$(tput setaf 1)
green=$(tput setaf 2)
yellow=$(tput setaf 3)
lila=$(tput setaf 4)
pink=$(tput setaf 5)
blue=$(tput setaf 6)
white=$(tput setaf 7)
black=$(tput setaf 8)

bold=$(tput bold)
reset=$(tput sgr0)

heading() {
	echo "${lila}==> [$(date -u)]${reset}${bold} $1${reset}"
}

success() {
	echo "${green}==> [$(date -u)]${reset}${bold} $1${reset}"
}

info() {
	echo "${blue}==> [$(date -u)]${reset}${bold} $1${reset}"
}

warning() {
	echo "${yellow}==> [$(date -u)]${reset}${bold} $1${reset}"
}

error() {
	echo "${red}==> [$(date -u)]${reset}${bold} $1${reset}"
}

# Arrange
CHAIN_ID="bearmint-testnet"
SNAP_PATH="$HOME/.bearmint/snapshots"
DATA_PATH="$HOME/.bearmint/data"
BM_SERVICE_NAME="bearmint"
TM_SERVICE_NAME="tendermint"
RPC_ADDRESS="http://127.0.0.1:26657"

# Act
heading "LAST_BLOCK_HEIGHT $(curl -s ${RPC_ADDRESS}/status | jq -r .result.sync_info.latest_block_height)"

info "Stopping ${TM_SERVICE_NAME}"
sudo supervisorctl start ${TM_SERVICE_NAME}:*

info "Stopping ${BM_SERVICE_NAME}"
sudo supervisorctl start ${BM_SERVICE_NAME}:*

info "Creating new snapshot"
mkdir -p ${SNAP_PATH}
tar czf ${HOME}/$(echo "${CHAIN_ID}_$(date '+%Y-%m-%d').tar") -C ${DATA_PATH} --exclude=oasis_priv_validator.json .

info "Starting ${TM_SERVICE_NAME}"
sudo supervisorctl restart ${TM_SERVICE_NAME}:*

info "Starting ${BM_SERVICE_NAME}"
sudo supervisorctl restart ${BM_SERVICE_NAME}:*

info "Removing old snapshot(s)"
cd ${SNAP_PATH}
rm -fv ${OLD_SNAP}

info "Moving new snapshot to ${SNAP_PATH}"

OLD_SNAP=$(ls ${SNAP_PATH} | egrep -o "${CHAIN_ID}.*tar")
mv ${HOME}/${CHAIN_ID}*tar ${SNAP_PATH}

du -hs ${SNAP_PATH}

success "Done"
