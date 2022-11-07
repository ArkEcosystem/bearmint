# Snapshots

## Create

```
0 0 * * * /bin/bash -c '/home/johndoe/bearmint/scripts/snapshot.sh'
```

## Restore

### Stop Services

```sh
sudo supervisorctl stop tendermint:*
sudo supervisorctl stop bearmint:*
```

### Remove Data

```
rm -rf ~/.bearmint/data
mkdir -p ~/.bearmint/data
cd ~/.bearmint/data
```

### Download Snapshot

```bash
SNAP_NAME=$(curl -s https://snapshots.bearmint.com/testnet/ | egrep -o ">testnet.*tar" | tr -d ">"); \
wget -O - https://snapshots.bearmint.com/testnet/${SNAP_NAME} | tar xf -
```

### Restart Services

```sh
sudo supervisorctl restart tendermint:*
sudo supervisorctl restart bearmint:*
```
