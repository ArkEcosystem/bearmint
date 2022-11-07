import { homedir } from 'node:os'

// $BMHOME is equivelant to $TMHOME but for Bearmint
export const BM_PATH_HOME = process.env['BMHOME'] ?? `${homedir()}/.bearmint`
export const BM_PATH_CONF = `${BM_PATH_HOME}/config`
export const BM_PATH_CONF_CONFIG = `${BM_PATH_CONF}/config.toml`
export const BM_PATH_CONF_MILESTONES = `${BM_PATH_CONF}/milestones.json`
export const BM_PATH_ACCS = `${BM_PATH_HOME}/accounts.json`

// $TMHOME is a variable that Tendermint recommends in `~/.tendermint/config/config.toml`
export const TM_PATH_HOME = process.env['TMHOME'] ?? `${homedir()}/.tendermint`

export const TM_PATH_CONF = `${TM_PATH_HOME}/config`
export const TM_PATH_CONF_CONFIG = `${TM_PATH_CONF}/config.toml`
export const TM_PATH_CONF_GENESIS = `${TM_PATH_CONF}/genesis.json`
export const TM_PATH_CONF_NODE_KEY = `${TM_PATH_CONF}/node_key.json`
export const TM_PATH_CONF_PRIV_VALIDATOR_KEY = `${TM_PATH_CONF}/priv_validator_key.json`

export const TM_PATH_DATA = `${TM_PATH_HOME}/data`
export const TM_PATH_DATA_PRIV_VALIDATOR_STATE = `${TM_PATH_DATA}/priv_validator_state.json`
