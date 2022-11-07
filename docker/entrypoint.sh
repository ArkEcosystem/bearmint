#!/usr/bin/env bash
sudo /usr/sbin/ntpd
sudo chown $USER. $HOME -R
sudo chown $USER. $HOME/.*
sudo cp $HOME/bearmint/bin/tendermint*linux_amd64 /opt/bin/tendermint
sudo cp $HOME/bearmint/bin/buf-Linux-x86_64 /opt/bin/buf
#bearmint install
cd $HOME/bearmint
pnpm install
pnpm make build
#generatе bearmint configs
node examples/bear/genesis-node.mjs

echo 'alias cub="node $HOME/bearmint/packages/bep-117/bin/index.mjs"' >>$HOME/.bashrc

sudo supervisord &

#make sure container doesn't exit on error
bash
