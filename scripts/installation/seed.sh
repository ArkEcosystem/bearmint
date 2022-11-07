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
	echo "${lila}==>${reset}${bold} $1${reset}"
}

success() {
	echo "${green}==>${reset}${bold} $1${reset}"
}

info() {
	echo "${blue}==>${reset}${bold} $1${reset}"
}

warning() {
	echo "${yellow}==>${reset}${bold} $1${reset}"
}

error() {
	echo "${red}==>${reset}${bold} $1${reset}"
}

if [[ -z $(which apt-get || :) ]]; then
	heading "Unsupported system"
	exit 1
fi

if [[ $(locale -a | grep ^en_US.UTF-8) ]] || [[ $(locale -a | grep ^en_US.utf8) ]]; then
	if ! $(grep -E "(en_US.UTF-8)" "$HOME/.bashrc"); then
		# Setting the current shell locale
		export LC_ALL="en_US.UTF-8"
		export LANG="en_US.UTF-8"
		export LANGUAGE="en_US.UTF-8"

		# Setting the bashrc locale
		echo "export LC_ALL=en_US.UTF-8" >>"$HOME/.bashrc"
		echo "export LANG=en_US.UTF-8" >>"$HOME/.bashrc"
		echo "export LANGUAGE=en_US.UTF-8" >>"$HOME/.bashrc"
	fi
else
	# Install en_US.UTF-8 Locale
	sudo locale-gen en_US.UTF-8
	sudo update-locale LANG=en_US.UTF-8

	# Setting the current shell locale
	export LC_ALL="en_US.UTF-8"
	export LANG="en_US.UTF-8"
	export LANGUAGE="en_US.UTF-8"

	# Setting the bashrc locale
	echo "export LC_ALL=en_US.UTF-8" >>"$HOME/.bashrc"
	echo "export LANG=en_US.UTF-8" >>"$HOME/.bashrc"
	echo "export LANGUAGE=en_US.UTF-8" >>"$HOME/.bashrc"
fi

heading "Installing system dependencies..."

sudo apt-get update
sudo apt-get install -y git curl apt-transport-https update-notifier

success "Installed system dependencies!"

heading "Installing program dependencies..."

sudo apt-get install build-essential libcairo2-dev pkg-config libtool autoconf automake python libpq-dev jq libjemalloc-dev unzip supervisor multitail -y

success "Installed program dependencies!"

heading "Installing NTP..."

sudo timedatectl set-ntp off >/dev/null 2>&1 || true # disable the default systemd timesyncd service

sudo apt-get install ntp -yyq

if [ -z "$(sudo service ntp status | grep running)" ]; then
	sudo ntpd -gq
fi

success "Installed NTP!"

heading "Installing system updates..."

sudo apt-get update
sudo apt-get upgrade -yqq
sudo apt-get dist-upgrade -yq
sudo apt-get autoremove -yyq
sudo apt-get autoclean -yq

success "Installed system updates!"

heading "Installing node.js & npm..."

curl -fsSL https://fnm.vercel.app/install | bash
export PATH="$HOME/.fnm:$PATH"
fnm install 16
fnm default 16

export PATH="$HOME/.fnm:$PATH"
eval "$(fnm env)"

success "Installed node.js & npm!"

heading "Installing pnpm..."

curl -fsSL https://get.pnpm.io/install.sh | sh -

export PNPM_HOME="$HOME/.local/share/pnpm"
export PATH="$PNPM_HOME:$PATH"

success "Installed pnpm!"

heading "Cloning Bearmint..."

touch "$HOME/.ssh/known_hosts"
ssh-keygen -F github.com || ssh-keyscan github.com >>~/.ssh/known_hosts
git clone git@github.com:bearmint/bearmint.git

success "Cloned Bearmint!"

heading "Installing Tendermint..."

sudo cp $HOME/bearmint/bin/tendermint_0.37.0-alpha.2_linux_amd64 /usr/local/bin/tendermint

success "Installed Tendermint!"

heading "Installing Protocol Buffer Compiler..."

sudo cp $HOME/bearmint/bin/buf-Linux-x86_64 /usr/local/bin/buf

success "Installed Protocol Buffer Compiler!"

heading "Installing Bearmint..."

cd $HOME/bearmint
pnpm install
pnpm run build

echo 'alias cub="node $HOME/bearmint/packages/bep-117/bin/index.mjs"' >>$HOME/.bashrc

success "Installed Bearmint!"

heading "Installing Configuration..."

cp -R $HOME/bearmint/config/testnet/.bearmint $HOME/.bearmint
cp -R $HOME/bearmint/config/testnet/.tendermint $HOME/.tendermint
node $HOME/bearmint/packages/bep-117/bin/index.mjs config preset seed

success "Installed Configuration!"

heading "Installing Tendermint Supervisor..."

sudo tee -a /etc/supervisor/conf.d/tendermint.conf >/dev/null <<EOT
[program:tendermint]
autorestart=true
autostart=true
command=$(which tendermint) start
environment=HOME="$HOME"
killasgroup=true
redirect_stderr=true
stdout_logfile=$HOME/tendermint.log
stopasgroup=true
stopwaitsecs=3600
EOT

sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl start tendermint:*

success "Installed Tendermint Supervisor!"

heading "Installing Bearmint Supervisor..."

sudo tee -a /etc/supervisor/conf.d/bearmint.conf >/dev/null <<EOT
[program:bearmint]
autorestart=true
autostart=true
command=$(which node) $HOME/bearmint/examples/bear/app.mjs
environment=HOME="$HOME"
killasgroup=true
redirect_stderr=true
stdout_logfile=$HOME/bearmint.log
stopasgroup=true
stopwaitsecs=3600
EOT

sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl start bearmint:*

success "Installed Bearmint Supervisor!"

cd $HOME

multitail ~/tendermint.log ~/bearmint.log

exec "$BASH"
