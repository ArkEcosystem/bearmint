# Testing

## Manual

Add the following functions to your `~/.zshrc` file. This will enable you to type `bm` and `tm` to launch fresh instances of Bearmint and Tendermint.

```sh
function bm() {
    rm -rf ~/.bearmint/data
    node ~/Work/bearmint/examples/bear/genesis-node.mjs
    node ~/Work/bearmint/examples/bear/app.mjs
}

function tm() {
    tendermint unsafe-reset-all
    tendermint start
}
```

## E2E

### Prepare the environment

```sh
# Delete existing configurations
rm -rf ~/.bearmint
rm -rf ~/.tendermint
# Generate new configurations
node examples/bear/genesis-node.mjs
# Launch Bearmint (separate CLI instance)
node examples/bear/app.mjs
# Launch Tendermint (separate CLI instance)
tendermint start
```

### Execute a test

```ts
cd packages/bep55
pnpm run test:e2e
```
