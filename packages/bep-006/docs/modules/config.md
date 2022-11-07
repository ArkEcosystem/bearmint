[@bearmint/bep-006 - v0.0.0](../README.md) / config

# Namespace: config

## Table of contents

### Variables

- [bearmint](config.md#bearmint)
- [genesis](config.md#genesis)
- [milestones](config.md#milestones)
- [node\_key](config.md#node_key)
- [priv\_validator\_key](config.md#priv_validator_key)

## Variables

### bearmint

• `Const` **bearmint**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accounts` | { `address`: `string` = 'bear1khy2elmyvszjyn4wecder0k0cptv6jj7guy4fl2tknlfnsxqsza06yv4yplze8vtfnrrrvd3qs8j2mzjmzm'; `mnemonic`: `string` = 'flip urban farm gravity gossip ranch spring skate oven clay uncle gasp stone exact machine loan monster spring permit safe fade middle donkey tail'; `privateKey`: `string` = '2b36791abd1eaf83a3279e142d4211bb9dfae99c345962f555a673e3c2dc9cfa'; `publicKey`: `string` = 'b5c8acff646405224eaece1b91becfc056cd4a5e470954fd4bb4fe99c0c080bafd1195207e2c9d8b4cc631b1b1040f25' }[] |
| `validators` | { `address`: `string` = '6e2e999d469f0820c38cc2d5aef60a8367ff9dda'; `mnemonic`: `string` = 'sheriff abandon cat mention rule obey ten nut clerk shine powder slush prepare squirrel surprise enact typical kiwi hedgehog tobacco rural defy wagon blind'; `moniker`: `string` = 'genesis\_1'; `privateKey`: `string` = 'bea8694de6e235ec745f74d823a10b6665e6d67843bfcacfc2d3e5c4c2c3351f20d7ee353ed370709e22ac2fb9d40da47885c8d87ce455995eafc58f7a4e4207'; `publicKey`: `string` = '20d7ee353ed370709e22ac2fb9d40da47885c8d87ce455995eafc58f7a4e4207' }[] |

#### Defined in

[config/bearmint.ts:18](https://github.com/bearmint/bearmint/blob/main/packages/bep-006/source/config/bearmint.ts#L18)

___

### genesis

• `Const` **genesis**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `app_hash` | `string` |
| `app_state` | { `accounts`: ({ `address`: `string` = 'bear1khy2elmyvszjyn4wecder0k0cptv6jj7guy4fl2tknlfnsxqsza06yv4yplze8vtfnrrrvd3qs8j2mzjmzm'; `balances`: { `BEAR`: `string` = '100000000000000000'; `FIRE`: `string` = '100000000000000000' } ; `publicKey`: `string` = 'b5c8acff646405224eaece1b91becfc056cd4a5e470954fd4bb4fe99c0c080bafd1195207e2c9d8b4cc631b1b1040f25'; `validator`: `undefined`  } \| { `address`: `string` = 'bear15x3yqkcetafdjvcwltczdd75hl3ecc4p8ehc30szql24dttgujgclrfnteg4a5nkjqphkqqtgcs9chwwulk'; `balances`: `undefined` ; `publicKey`: `string` = 'a1a2405b195f52d9330efaf026b7d4bfe39c62a13e6f88be0207d556ad68e4918f8d335e515ed27690037b000b46205c'; `validator`: { `address`: `string` = '6e2e999d469f0820c38cc2d5aef60a8367ff9dda'; `moniker`: `string` = 'genesis\_1'; `power`: `string` = '1'; `publicKey`: `string` = '20d7ee353ed370709e22ac2fb9d40da47885c8d87ce455995eafc58f7a4e4207' }  })[] ; `txs`: `never`[] = [] } |
| `app_state.accounts` | ({ `address`: `string` = 'bear1khy2elmyvszjyn4wecder0k0cptv6jj7guy4fl2tknlfnsxqsza06yv4yplze8vtfnrrrvd3qs8j2mzjmzm'; `balances`: { `BEAR`: `string` = '100000000000000000'; `FIRE`: `string` = '100000000000000000' } ; `publicKey`: `string` = 'b5c8acff646405224eaece1b91becfc056cd4a5e470954fd4bb4fe99c0c080bafd1195207e2c9d8b4cc631b1b1040f25'; `validator`: `undefined`  } \| { `address`: `string` = 'bear15x3yqkcetafdjvcwltczdd75hl3ecc4p8ehc30szql24dttgujgclrfnteg4a5nkjqphkqqtgcs9chwwulk'; `balances`: `undefined` ; `publicKey`: `string` = 'a1a2405b195f52d9330efaf026b7d4bfe39c62a13e6f88be0207d556ad68e4918f8d335e515ed27690037b000b46205c'; `validator`: { `address`: `string` = '6e2e999d469f0820c38cc2d5aef60a8367ff9dda'; `moniker`: `string` = 'genesis\_1'; `power`: `string` = '1'; `publicKey`: `string` = '20d7ee353ed370709e22ac2fb9d40da47885c8d87ce455995eafc58f7a4e4207' }  })[] |
| `app_state.txs` | `never`[] |
| `chain_id` | `string` |
| `consensus_params` | { `block`: { `max_bytes`: `string` = '22020096'; `max_gas`: `string` = '-1' } ; `evidence`: { `max_age_duration`: `string` = '172800000000000'; `max_age_num_blocks`: `string` = '100000'; `max_bytes`: `string` = '1048576' } ; `validator`: { `pub_key_types`: `string`[]  } ; `version`: { `app_version`: `string` = '0' }  } |
| `consensus_params.block` | { `max_bytes`: `string` = '22020096'; `max_gas`: `string` = '-1' } |
| `consensus_params.block.max_bytes` | `string` |
| `consensus_params.block.max_gas` | `string` |
| `consensus_params.evidence` | { `max_age_duration`: `string` = '172800000000000'; `max_age_num_blocks`: `string` = '100000'; `max_bytes`: `string` = '1048576' } |
| `consensus_params.evidence.max_age_duration` | `string` |
| `consensus_params.evidence.max_age_num_blocks` | `string` |
| `consensus_params.evidence.max_bytes` | `string` |
| `consensus_params.validator` | { `pub_key_types`: `string`[]  } |
| `consensus_params.validator.pub_key_types` | `string`[] |
| `consensus_params.version` | { `app_version`: `string` = '0' } |
| `consensus_params.version.app_version` | `string` |
| `genesis_time` | `string` |
| `initial_height` | `string` |
| `validators` | { `address`: `string` = '6e2e999d469f0820c38cc2d5aef60a8367ff9dda'; `moniker`: `string` = 'genesis\_1'; `power`: `string` = '1'; `pub_key`: { `type`: `string` = 'tendermint/PubKeyEd25519'; `value`: `string` = 'INfuNT7TcHCeIqwvudQNpHiFyNh85FWZXq/Fj3pOQgc=' }  }[] |

#### Defined in

[config/genesis.ts:18](https://github.com/bearmint/bearmint/blob/main/packages/bep-006/source/config/genesis.ts#L18)

___

### milestones

• `Const` **milestones**: { `blockNumber`: `string` = '1'; `parameters`: { `application`: { `protocolVersion`: `string` = '0.0.0'; `semanticVersion`: `string` = '0.0.0' } ; `consensus`: { `block`: { `maxBytes`: `string` = '22020096'; `maxGas`: `string` = '-1' } ; `evidence`: { `maxAgeDuration`: `string` = '172800000000000'; `maxAgeNumBlocks`: `string` = '100000'; `maxBytes`: `string` = '1048576' } ; `validator`: { `pubKeyTypes`: `string`[]  } ; `version`: { `appVersion`: `string` = '0' }  } ; `denominations`: { `gas`: `string` = 'FIRE'; `reward`: `string` = 'GOLD'; `stake`: `string` = 'SEED'; `token`: `string` = 'BEAR' } ; `modules`: { `mandatory`: { `@bearmint/bep-021`: { `*`: { `strategy`: `string` = '@bearmint/bep-115' }  } ; `@bearmint/bep-030`: { `*`: { `strategy`: `string` = '@bearmint/bep-033' }  } ; `@bearmint/bep-038`: { `*`: { `strategy`: `string` = '@bearmint/bep-042' }  } ; `@bearmint/bep-042`: { `*`: { `prefix`: `string` = 'bear' }  } ; `@bearmint/bep-048`: { `*`: { `strategy`: `string` = '@bearmint/bep-049' }  } ; `@bearmint/bep-049`: { `*`: { `handlers`: { `@bearmint/bep-055`: { `*`: `string`  } ; `@bearmint/bep-056`: { `*`: `string`  } ; `@bearmint/bep-057`: { `*`: `string`  } ; `@bearmint/bep-058`: { `*`: `string`  } ; `@bearmint/bep-059`: { `*`: `string`  } ; `@bearmint/bep-064`: { `*`: `string`  } ; `@bearmint/bep-065`: { `*`: `string`  } ; `@bearmint/bep-066`: { `*`: `string`  } ; `@bearmint/bep-067`: { `*`: `string`  } ; `@bearmint/bep-068`: { `*`: `string`  } ; `@bearmint/bep-104`: { `*`: `string`  } ; `@bearmint/bep-110`: { `*`: `string`  } ; `@bearmint/bep-122`: { `*`: `string`  } ; `@bearmint/bep-126`: { `*`: `string`  } ; `@bearmint/bep-127`: { `*`: `string`  } ; `@bearmint/bep-128`: { `*`: `string`  } ; `@bearmint/bep-129`: { `*`: `string`  } ; `@bearmint/bep-130`: { `*`: `string`  } ; `@bearmint/bep-131`: { `*`: `string`  } ; `@bearmint/bep-132`: { `*`: `string`  } ; `@bearmint/bep-133`: { `*`: `string`  } ; `@bearmint/bep-134`: { `*`: `string`  } ; `@bearmint/bep-135`: { `*`: `string`  } ; `@bearmint/bep-136`: { `*`: `string`  } ; `@bearmint/bep-137`: { `*`: `string`  }  }  }  } ; `@bearmint/bep-051`: { `*`: { `version`: `string` = '1.0.0' }  } ; `@bearmint/bep-055`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 256; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-056`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 256; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-057`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-058`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `detachDelegators`: `boolean` = true }  } ; `@bearmint/bep-059`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `list`: { `strategy`: `string`[]  }  }  } ; `@bearmint/bep-064`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  } ; `list`: { `secretAlgorithm`: `string`[]  }  }  } ; `@bearmint/bep-065`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-066`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-067`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 } ; `value`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 64; `min`: `number` = 1 }  } ; `list`: { `type`: `string`[]  }  }  } ; `@bearmint/bep-068`: { `*`: { `byteLength`: { `data`: { `max`: `number` = 64; `min`: `number` = 32 } ; `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-076`: { `*`: { `strategy`: `string` = '@bearmint/bep-077' }  } ; `@bearmint/bep-078`: { `*`: { `strategy`: `string` = 'fixed' }  } ; `@bearmint/bep-081`: { `*`: { `amount`: `number` = 200\_000\_000 }  } ; `@bearmint/bep-086`: { `*`: { `range`: { `percentage`: { `max`: `number` = 100; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-087`: { `*`: { `strategy`: `string` = '@bearmint/bep-088' }  } ; `@bearmint/bep-088`: { `*`: { `count`: { `validators`: { `max`: `number` = 1; `min`: `number` = 1 }  } ; `mode`: `string` = 'delegated'; `range`: { `power`: { `max`: `number` = 0; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-089`: { `*`: { `retainBlocks`: `number` = 0 }  } ; `@bearmint/bep-102`: { `*`: { `strategies`: { `@bearmint/bep-118`: `number`[]  }  }  } ; `@bearmint/bep-103`: { `*`: { `strategies`: { `@bearmint/bep-119`: `number`[]  }  }  } ; `@bearmint/bep-104`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 10; `min`: `number` = 1 } ; `stakes`: { `max`: `number` = 1; `min`: `number` = 0 }  } ; `range`: { `stake`: { `max`: `number` = 10e8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-110`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `regex`: { `moniker`: { `pattern`: `string` = '^[da-zA-Z](?:[da-zA-Z]\|-(?=[da-zA-Z])){1,32}$' }  }  }  } ; `@bearmint/bep-118`: { `*`: { `punishments`: { `denomination`: `string` = denominations.stake; `percentage`: `number` = 10; `type`: `number` = 0 }[]  }  } ; `@bearmint/bep-119`: { `*`: { `punishments`: { `denomination`: `string` = denominations.stake; `percentage`: `number` = 10; `type`: `number` = 0 }[]  }  } ; `@bearmint/bep-120`: { `*`: { `punishments`: { `durations`: `number`[] ; `type`: `string` = '*' }[]  }  } ; `@bearmint/bep-121`: { `*`: { `punishments`: { `jailSentences`: `number` = 3; `type`: `string` = '*' }[]  }  } ; `@bearmint/bep-122`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-124`: { `*`: { `amount`: `number` = 2e8 }  } ; `@bearmint/bep-126`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 } ; `uriPrefix`: { `max`: `number` = 32; `min`: `number` = 1 } ; `uriSuffix`: { `max`: `number` = 32; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 } ; `policies`: { `max`: `number` = 6; `min`: `number` = 1 }  } ; `list`: { `policies`: { `burn`: `string`[] ; `mint`: `string`[] ; `transfer`: `string`[]  }  } ; `regex`: { `name`: { `pattern`: `string` = '^([a-zA-Z0-9\_-]){1,128}$' } ; `symbol`: { `pattern`: `string` = '^([a-zA-Z0-9\_-]){1,128}$' }  }  }  } ; `@bearmint/bep-127`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-128`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-129`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-130`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-131`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-132`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-133`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-134`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 } ; `policies`: { `max`: `number` = 2; `min`: `number` = 1 }  } ; `list`: { `policies`: { `burn`: `string`[] ; `mint`: `string`[] ; `transfer`: `string`[]  }  } ; `range`: { `decimals`: { `max`: `number` = 32; `min`: `number` = 8 }  } ; `regex`: { `denomination`: { `pattern`: `string` = '^([a-zA-Z0-9\_-]){1,32}$' } ; `name`: { `pattern`: `string` = '^([a-zA-Z0-9\_-]){1,32}$' }  }  }  } ; `@bearmint/bep-135`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-136`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-137`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  }  }  } ; `transactions`: { `handlers`: { `@bearmint/bep-055`: { `ranges`: `string`[]  } ; `@bearmint/bep-056`: { `ranges`: `string`[]  } ; `@bearmint/bep-057`: { `ranges`: `string`[]  } ; `@bearmint/bep-058`: { `ranges`: `string`[]  } ; `@bearmint/bep-059`: { `ranges`: `string`[]  } ; `@bearmint/bep-064`: { `ranges`: `string`[]  } ; `@bearmint/bep-065`: { `ranges`: `string`[]  } ; `@bearmint/bep-066`: { `ranges`: `string`[]  } ; `@bearmint/bep-067`: { `ranges`: `string`[]  } ; `@bearmint/bep-068`: { `ranges`: `string`[]  } ; `@bearmint/bep-104`: { `ranges`: `string`[]  } ; `@bearmint/bep-110`: { `ranges`: `string`[]  } ; `@bearmint/bep-122`: { `ranges`: `string`[]  } ; `@bearmint/bep-126`: { `ranges`: `string`[]  } ; `@bearmint/bep-127`: { `ranges`: `string`[]  } ; `@bearmint/bep-128`: { `ranges`: `string`[]  } ; `@bearmint/bep-129`: { `ranges`: `string`[]  } ; `@bearmint/bep-130`: { `ranges`: `string`[]  } ; `@bearmint/bep-131`: { `ranges`: `string`[]  } ; `@bearmint/bep-132`: { `ranges`: `string`[]  } ; `@bearmint/bep-133`: { `ranges`: `string`[]  } ; `@bearmint/bep-134`: { `ranges`: `string`[]  } ; `@bearmint/bep-135`: { `ranges`: `string`[]  } ; `@bearmint/bep-136`: { `ranges`: `string`[]  } ; `@bearmint/bep-137`: { `ranges`: `string`[]  }  }  }  }  }[]

#### Defined in

[config/milestones.ts:21](https://github.com/bearmint/bearmint/blob/main/packages/bep-006/source/config/milestones.ts#L21)

___

### node\_key

• `Const` **node\_key**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `priv_key` | { `type`: `string` = 'tendermint/PrivKeyEd25519'; `value`: `string` = 'xSSOV0jgHlYM0Y0RQBGyNGJwHVCNT6nl9PVTm4blWN5O6jvJqkCSswvoqaP9Ijg8XJZoJXh8TuaHEYmHj10IZQ==' } |
| `priv_key.type` | `string` |
| `priv_key.value` | `string` |

#### Defined in

[config/node-key.ts:19](https://github.com/bearmint/bearmint/blob/main/packages/bep-006/source/config/node-key.ts#L19)

___

### priv\_validator\_key

• `Const` **priv\_validator\_key**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `priv_key` | { `type`: `string` = 'tendermint/PrivKeyEd25519'; `value`: `string` = 'vqhpTebiNex0X3TYI6ELZmXm1nhDv8rPwtPlxMLDNR8g1+41PtNwcJ4irC+51A2keIXI2HzkVZler8WPek5CBw==' } |
| `priv_key.type` | `string` |
| `priv_key.value` | `string` |
| `pub_key` | { `type`: `string` = 'tendermint/PubKeyEd25519'; `value`: `string` = 'INfuNT7TcHCeIqwvudQNpHiFyNh85FWZXq/Fj3pOQgc=' } |
| `pub_key.type` | `string` |
| `pub_key.value` | `string` |

#### Defined in

[config/priv-validator-key.ts:19](https://github.com/bearmint/bearmint/blob/main/packages/bep-006/source/config/priv-validator-key.ts#L19)
