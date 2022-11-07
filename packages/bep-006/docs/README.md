@bearmint/bep-006 - v0.0.0

# @bearmint/bep-006 - v0.0.0

## Table of contents

### Namespaces

- [config](modules/config.md)

### Interfaces

- [TxTestContext](interfaces/TxTestContext.md)

### Variables

- [denominations](README.md#denominations)
- [genesisParameters](README.md#genesisparameters)
- [milestone](README.md#milestone)
- [mnemonic](README.md#mnemonic)
- [mnemonics](README.md#mnemonics)

## Variables

### denominations

• `Const` **denominations**: `Record`<`DenominationType`, `string`\>

#### Defined in

[fixtures.ts:28](https://github.com/bearmint/bearmint/blob/main/packages/bep-006/source/fixtures.ts#L28)

___

### genesisParameters

• `Const` **genesisParameters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `app_hash` | `string` |
| `app_state` | { `accounts`: ({ `address`: `string` = 'bear1kwxk32w3sjcsu7e5e2lhl6fj4gdctcr6ax8edde9dwd7lpdkxeqevhxwzt5azp0kl7em9uf2gq64ju2fknr'; `balances`: { `BEAR`: `string` = '100000000000000000'; `FIRE`: `string` = '100000000000000000' } ; `publicKey`: `string` = 'b38d68a9d184b10e7b34cabf7fe932aa1b85e07ae98f96b7256b9bef85b63641965cce12e9d105f6ffb3b2f12a403559'; `validator`: `undefined`  } \| { `address`: `string` = 'bear1se4ecex5kxguux9vje80nh6v042xcam0phgjnfw7zznxysuhh03pujdh5gafq00s3nw9u3x2m6lhvz2ftl9'; `balances`: `undefined` ; `publicKey`: `string` = '866b9c64d4b191ce18ac964ef9df4c7d546c776f0dd129a5de10a6624397bbe21e49b7a23a903df08cdc5e44cadebf76'; `validator`: { `address`: `string` = 'b8e4eac7074603e133b627aa01dcea4d131c6bc6'; `moniker`: `string` = 'genesis\_1'; `power`: `string` = '1'; `publicKey`: `string` = '0b95c6245d852c3497b51c2cf9d7c98a1af8a094d5eca63454ce0e4d445df366' }  })[] ; `txs`: `never`[] = [] } |
| `app_state.accounts` | ({ `address`: `string` = 'bear1kwxk32w3sjcsu7e5e2lhl6fj4gdctcr6ax8edde9dwd7lpdkxeqevhxwzt5azp0kl7em9uf2gq64ju2fknr'; `balances`: { `BEAR`: `string` = '100000000000000000'; `FIRE`: `string` = '100000000000000000' } ; `publicKey`: `string` = 'b38d68a9d184b10e7b34cabf7fe932aa1b85e07ae98f96b7256b9bef85b63641965cce12e9d105f6ffb3b2f12a403559'; `validator`: `undefined`  } \| { `address`: `string` = 'bear1se4ecex5kxguux9vje80nh6v042xcam0phgjnfw7zznxysuhh03pujdh5gafq00s3nw9u3x2m6lhvz2ftl9'; `balances`: `undefined` ; `publicKey`: `string` = '866b9c64d4b191ce18ac964ef9df4c7d546c776f0dd129a5de10a6624397bbe21e49b7a23a903df08cdc5e44cadebf76'; `validator`: { `address`: `string` = 'b8e4eac7074603e133b627aa01dcea4d131c6bc6'; `moniker`: `string` = 'genesis\_1'; `power`: `string` = '1'; `publicKey`: `string` = '0b95c6245d852c3497b51c2cf9d7c98a1af8a094d5eca63454ce0e4d445df366' }  })[] |
| `app_state.txs` | `never`[] |
| `chain_id` | `string` |
| `consensus_params` | { `block`: { `maxBytes`: `string` = '22020096'; `maxGas`: `string` = '-1' } ; `evidence`: { `maxAgeDuration`: `string` = '172800000000000'; `maxAgeNumBlocks`: `string` = '100000'; `maxBytes`: `string` = '1048576' } ; `validator`: { `pubKeyTypes`: `string`[]  } ; `version`: { `appVersion`: `string` = '0' }  } |
| `consensus_params.block` | { `maxBytes`: `string` = '22020096'; `maxGas`: `string` = '-1' } |
| `consensus_params.block.maxBytes` | `string` |
| `consensus_params.block.maxGas` | `string` |
| `consensus_params.evidence` | { `maxAgeDuration`: `string` = '172800000000000'; `maxAgeNumBlocks`: `string` = '100000'; `maxBytes`: `string` = '1048576' } |
| `consensus_params.evidence.maxAgeDuration` | `string` |
| `consensus_params.evidence.maxAgeNumBlocks` | `string` |
| `consensus_params.evidence.maxBytes` | `string` |
| `consensus_params.validator` | { `pubKeyTypes`: `string`[]  } |
| `consensus_params.validator.pubKeyTypes` | `string`[] |
| `consensus_params.version` | { `appVersion`: `string` = '0' } |
| `consensus_params.version.appVersion` | `string` |
| `genesis_time` | `string` |
| `initial_height` | `string` |
| `validators` | { `address`: `string` = 'b8e4eac7074603e133b627aa01dcea4d131c6bc6'; `moniker`: `string` = 'genesis\_1'; `power`: `string` = '1'; `pub_key`: { `type`: `string` = 'tendermint/PubKeyEd25519'; `value`: `string` = 'C5XGJF2FLDSXtRws+dfJihr4oJTV7KY0VM4OTURd82Y=' }  }[] |

#### Defined in

[tendermint.ts:21](https://github.com/bearmint/bearmint/blob/main/packages/bep-006/source/tendermint.ts#L21)

___

### milestone

• `Const` **milestone**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blockNumber` | `string` |
| `parameters` | { `application`: { `protocolVersion`: `string` = '0.0.0'; `semanticVersion`: `string` = '0.0.0' } ; `consensus`: { `block`: { `maxBytes`: `string` = '22020096'; `maxGas`: `string` = '-1' } ; `evidence`: { `maxAgeDuration`: `string` = '172800000000000'; `maxAgeNumBlocks`: `string` = '100000'; `maxBytes`: `string` = '1048576' } ; `validator`: { `pubKeyTypes`: `string`[]  } ; `version`: { `appVersion`: `string` = '0' }  } ; `denominations`: `Record`<`DenominationType`, `string`\> ; `modules`: { `mandatory`: { `@bearmint/bep-021`: { `*`: { `strategy`: `string` = '@bearmint/bep-115' }  } ; `@bearmint/bep-030`: { `*`: { `strategy`: `string` = '@bearmint/bep-033' }  } ; `@bearmint/bep-038`: { `*`: { `strategy`: `string` = '@bearmint/bep-042' }  } ; `@bearmint/bep-042`: { `*`: { `prefix`: `string` = 'bear' }  } ; `@bearmint/bep-048`: { `*`: { `strategy`: `string` = '@bearmint/bep-049' }  } ; `@bearmint/bep-049`: { `*`: { `@bearmint/bep-055`: { `*`: `string`  } ; `@bearmint/bep-056`: { `*`: `string`  } ; `@bearmint/bep-057`: { `*`: `string`  } ; `@bearmint/bep-058`: { `*`: `string`  } ; `@bearmint/bep-059`: { `*`: `string`  } ; `@bearmint/bep-064`: { `*`: `string`  } ; `@bearmint/bep-065`: { `*`: `string`  } ; `@bearmint/bep-066`: { `*`: `string`  } ; `@bearmint/bep-067`: { `*`: `string`  } ; `@bearmint/bep-068`: { `*`: `string`  } ; `@bearmint/bep-104`: { `*`: `string`  } ; `@bearmint/bep-110`: { `*`: `string`  } ; `@bearmint/bep-122`: { `*`: `string`  } ; `@bearmint/bep-126`: { `*`: `string`  } ; `@bearmint/bep-127`: { `*`: `string`  } ; `@bearmint/bep-128`: { `*`: `string`  } ; `@bearmint/bep-129`: { `*`: `string`  } ; `@bearmint/bep-130`: { `*`: `string`  } ; `@bearmint/bep-131`: { `*`: `string`  } ; `@bearmint/bep-132`: { `*`: `string`  } ; `@bearmint/bep-133`: { `*`: `string`  } ; `@bearmint/bep-134`: { `*`: `string`  } ; `@bearmint/bep-135`: { `*`: `string`  } ; `@bearmint/bep-136`: { `*`: `string`  } ; `@bearmint/bep-137`: { `*`: `string`  }  }  } ; `@bearmint/bep-051`: { `*`: { `version`: `string` = '1.0.0' }  } ; `@bearmint/bep-055`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 256; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-056`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 256; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-057`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-058`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `detachDelegators`: `boolean` = true }  } ; `@bearmint/bep-059`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `list`: { `strategy`: `string`[]  }  }  } ; `@bearmint/bep-064`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  } ; `list`: { `secretAlgorithm`: `string`[]  }  }  } ; `@bearmint/bep-065`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-066`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-067`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 } ; `value`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 64; `min`: `number` = 1 }  } ; `list`: { `type`: `string`[]  }  }  } ; `@bearmint/bep-068`: { `*`: { `byteLength`: { `data`: { `max`: `number` = 64; `min`: `number` = 32 } ; `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-076`: { `*`: { `strategy`: `string` = '@bearmint/bep-077' }  } ; `@bearmint/bep-078`: { `*`: { `strategy`: `string` = 'fixed' }  } ; `@bearmint/bep-081`: { `*`: { `amount`: `number` = 2e8 }  } ; `@bearmint/bep-086`: { `*`: { `range`: { `percentage`: { `max`: `number` = 100; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-087`: { `*`: { `strategy`: `string` = '@bearmint/bep-088' }  } ; `@bearmint/bep-088`: { `*`: { `count`: { `validators`: { `max`: `number` = 5; `min`: `number` = 1 }  } ; `mode`: `string` = 'delegated'; `range`: { `power`: { `max`: `number` = 0; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-089`: { `*`: { `retainBlocks`: `number` = 0 }  } ; `@bearmint/bep-102`: { `*`: { `strategies`: { `@bearmint/bep-118`: `number`[]  }  }  } ; `@bearmint/bep-103`: { `*`: { `strategies`: { `@bearmint/bep-119`: `number`[]  }  }  } ; `@bearmint/bep-104`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 10; `min`: `number` = 1 } ; `stakes`: { `max`: `number` = 1; `min`: `number` = 0 }  } ; `range`: { `stake`: { `max`: `number` = 10e8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-110`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `regex`: { `moniker`: { `pattern`: `string` = '^[da-zA-Z](?:[da-zA-Z]\|-(?=[da-zA-Z])){1,32}$' }  }  }  } ; `@bearmint/bep-118`: { `*`: { `punishments`: { `denomination`: `string` = denominations.stake; `percentage`: `number` = 10; `type`: `number` = 0 }[]  }  } ; `@bearmint/bep-119`: { `*`: { `punishments`: { `denomination`: `string` = denominations.stake; `percentage`: `number` = 10; `type`: `number` = 0 }[]  }  } ; `@bearmint/bep-120`: { `*`: { `punishments`: { `durations`: `number`[] ; `type`: `string` = '*' }[]  }  } ; `@bearmint/bep-121`: { `*`: { `punishments`: { `jailSentences`: `number` = 3; `type`: `string` = '*' }[]  }  } ; `@bearmint/bep-122`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-124`: { `*`: { `amount`: `number` = 2e8 }  } ; `@bearmint/bep-126`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 } ; `uriPrefix`: { `max`: `number` = 32; `min`: `number` = 1 } ; `uriSuffix`: { `max`: `number` = 32; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 } ; `policies`: { `max`: `number` = 6; `min`: `number` = 1 }  } ; `list`: { `policies`: { `burn`: `string`[] ; `mint`: `string`[] ; `transfer`: `string`[]  }  } ; `regex`: { `name`: { `pattern`: `string` = '^([a-zA-Z0-9\_-]){1,128}$' } ; `symbol`: { `pattern`: `string` = '^([a-zA-Z0-9\_-]){1,128}$' }  }  }  } ; `@bearmint/bep-127`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-128`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-129`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-130`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-131`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-132`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-133`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-134`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 } ; `policies`: { `max`: `number` = 2; `min`: `number` = 1 }  } ; `list`: { `policies`: { `burn`: `string`[] ; `mint`: `string`[] ; `transfer`: `string`[]  }  } ; `range`: { `decimals`: { `max`: `number` = 32; `min`: `number` = 8 }  } ; `regex`: { `denomination`: { `pattern`: `string` = '^([a-zA-Z0-9\_-]){1,32}$' } ; `name`: { `pattern`: `string` = '^([a-zA-Z0-9\_-]){1,32}$' }  }  }  } ; `@bearmint/bep-135`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-136`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-137`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  }  }  } ; `transactions`: { `handlers`: { `@bearmint/bep-055`: { `ranges`: `string`[]  } ; `@bearmint/bep-056`: { `ranges`: `string`[]  } ; `@bearmint/bep-057`: { `ranges`: `string`[]  } ; `@bearmint/bep-058`: { `ranges`: `string`[]  } ; `@bearmint/bep-059`: { `ranges`: `string`[]  } ; `@bearmint/bep-064`: { `ranges`: `string`[]  } ; `@bearmint/bep-065`: { `ranges`: `string`[]  } ; `@bearmint/bep-066`: { `ranges`: `string`[]  } ; `@bearmint/bep-067`: { `ranges`: `string`[]  } ; `@bearmint/bep-068`: { `ranges`: `string`[]  } ; `@bearmint/bep-104`: { `ranges`: `string`[]  } ; `@bearmint/bep-110`: { `ranges`: `string`[]  } ; `@bearmint/bep-122`: { `ranges`: `string`[]  } ; `@bearmint/bep-126`: { `ranges`: `string`[]  } ; `@bearmint/bep-127`: { `ranges`: `string`[]  } ; `@bearmint/bep-128`: { `ranges`: `string`[]  } ; `@bearmint/bep-129`: { `ranges`: `string`[]  } ; `@bearmint/bep-130`: { `ranges`: `string`[]  } ; `@bearmint/bep-131`: { `ranges`: `string`[]  } ; `@bearmint/bep-132`: { `ranges`: `string`[]  } ; `@bearmint/bep-133`: { `ranges`: `string`[]  } ; `@bearmint/bep-134`: { `ranges`: `string`[]  } ; `@bearmint/bep-135`: { `ranges`: `string`[]  } ; `@bearmint/bep-136`: { `ranges`: `string`[]  } ; `@bearmint/bep-137`: { `ranges`: `string`[]  }  }  }  } |
| `parameters.application` | { `protocolVersion`: `string` = '0.0.0'; `semanticVersion`: `string` = '0.0.0' } |
| `parameters.application.protocolVersion` | `string` |
| `parameters.application.semanticVersion` | `string` |
| `parameters.consensus` | { `block`: { `maxBytes`: `string` = '22020096'; `maxGas`: `string` = '-1' } ; `evidence`: { `maxAgeDuration`: `string` = '172800000000000'; `maxAgeNumBlocks`: `string` = '100000'; `maxBytes`: `string` = '1048576' } ; `validator`: { `pubKeyTypes`: `string`[]  } ; `version`: { `appVersion`: `string` = '0' }  } |
| `parameters.consensus.block` | { `maxBytes`: `string` = '22020096'; `maxGas`: `string` = '-1' } |
| `parameters.consensus.block.maxBytes` | `string` |
| `parameters.consensus.block.maxGas` | `string` |
| `parameters.consensus.evidence` | { `maxAgeDuration`: `string` = '172800000000000'; `maxAgeNumBlocks`: `string` = '100000'; `maxBytes`: `string` = '1048576' } |
| `parameters.consensus.evidence.maxAgeDuration` | `string` |
| `parameters.consensus.evidence.maxAgeNumBlocks` | `string` |
| `parameters.consensus.evidence.maxBytes` | `string` |
| `parameters.consensus.validator` | { `pubKeyTypes`: `string`[]  } |
| `parameters.consensus.validator.pubKeyTypes` | `string`[] |
| `parameters.consensus.version` | { `appVersion`: `string` = '0' } |
| `parameters.consensus.version.appVersion` | `string` |
| `parameters.denominations` | `Record`<`DenominationType`, `string`\> |
| `parameters.modules` | { `mandatory`: { `@bearmint/bep-021`: { `*`: { `strategy`: `string` = '@bearmint/bep-115' }  } ; `@bearmint/bep-030`: { `*`: { `strategy`: `string` = '@bearmint/bep-033' }  } ; `@bearmint/bep-038`: { `*`: { `strategy`: `string` = '@bearmint/bep-042' }  } ; `@bearmint/bep-042`: { `*`: { `prefix`: `string` = 'bear' }  } ; `@bearmint/bep-048`: { `*`: { `strategy`: `string` = '@bearmint/bep-049' }  } ; `@bearmint/bep-049`: { `*`: { `@bearmint/bep-055`: { `*`: `string`  } ; `@bearmint/bep-056`: { `*`: `string`  } ; `@bearmint/bep-057`: { `*`: `string`  } ; `@bearmint/bep-058`: { `*`: `string`  } ; `@bearmint/bep-059`: { `*`: `string`  } ; `@bearmint/bep-064`: { `*`: `string`  } ; `@bearmint/bep-065`: { `*`: `string`  } ; `@bearmint/bep-066`: { `*`: `string`  } ; `@bearmint/bep-067`: { `*`: `string`  } ; `@bearmint/bep-068`: { `*`: `string`  } ; `@bearmint/bep-104`: { `*`: `string`  } ; `@bearmint/bep-110`: { `*`: `string`  } ; `@bearmint/bep-122`: { `*`: `string`  } ; `@bearmint/bep-126`: { `*`: `string`  } ; `@bearmint/bep-127`: { `*`: `string`  } ; `@bearmint/bep-128`: { `*`: `string`  } ; `@bearmint/bep-129`: { `*`: `string`  } ; `@bearmint/bep-130`: { `*`: `string`  } ; `@bearmint/bep-131`: { `*`: `string`  } ; `@bearmint/bep-132`: { `*`: `string`  } ; `@bearmint/bep-133`: { `*`: `string`  } ; `@bearmint/bep-134`: { `*`: `string`  } ; `@bearmint/bep-135`: { `*`: `string`  } ; `@bearmint/bep-136`: { `*`: `string`  } ; `@bearmint/bep-137`: { `*`: `string`  }  }  } ; `@bearmint/bep-051`: { `*`: { `version`: `string` = '1.0.0' }  } ; `@bearmint/bep-055`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 256; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-056`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 256; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-057`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-058`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `detachDelegators`: `boolean` = true }  } ; `@bearmint/bep-059`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `list`: { `strategy`: `string`[]  }  }  } ; `@bearmint/bep-064`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  } ; `list`: { `secretAlgorithm`: `string`[]  }  }  } ; `@bearmint/bep-065`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-066`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-067`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 } ; `value`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 64; `min`: `number` = 1 }  } ; `list`: { `type`: `string`[]  }  }  } ; `@bearmint/bep-068`: { `*`: { `byteLength`: { `data`: { `max`: `number` = 64; `min`: `number` = 32 } ; `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-076`: { `*`: { `strategy`: `string` = '@bearmint/bep-077' }  } ; `@bearmint/bep-078`: { `*`: { `strategy`: `string` = 'fixed' }  } ; `@bearmint/bep-081`: { `*`: { `amount`: `number` = 2e8 }  } ; `@bearmint/bep-086`: { `*`: { `range`: { `percentage`: { `max`: `number` = 100; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-087`: { `*`: { `strategy`: `string` = '@bearmint/bep-088' }  } ; `@bearmint/bep-088`: { `*`: { `count`: { `validators`: { `max`: `number` = 5; `min`: `number` = 1 }  } ; `mode`: `string` = 'delegated'; `range`: { `power`: { `max`: `number` = 0; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-089`: { `*`: { `retainBlocks`: `number` = 0 }  } ; `@bearmint/bep-102`: { `*`: { `strategies`: { `@bearmint/bep-118`: `number`[]  }  }  } ; `@bearmint/bep-103`: { `*`: { `strategies`: { `@bearmint/bep-119`: `number`[]  }  }  } ; `@bearmint/bep-104`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 10; `min`: `number` = 1 } ; `stakes`: { `max`: `number` = 1; `min`: `number` = 0 }  } ; `range`: { `stake`: { `max`: `number` = 10e8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-110`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `regex`: { `moniker`: { `pattern`: `string` = '^[da-zA-Z](?:[da-zA-Z]\|-(?=[da-zA-Z])){1,32}$' }  }  }  } ; `@bearmint/bep-118`: { `*`: { `punishments`: { `denomination`: `string` = denominations.stake; `percentage`: `number` = 10; `type`: `number` = 0 }[]  }  } ; `@bearmint/bep-119`: { `*`: { `punishments`: { `denomination`: `string` = denominations.stake; `percentage`: `number` = 10; `type`: `number` = 0 }[]  }  } ; `@bearmint/bep-120`: { `*`: { `punishments`: { `durations`: `number`[] ; `type`: `string` = '*' }[]  }  } ; `@bearmint/bep-121`: { `*`: { `punishments`: { `jailSentences`: `number` = 3; `type`: `string` = '*' }[]  }  } ; `@bearmint/bep-122`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-124`: { `*`: { `amount`: `number` = 2e8 }  } ; `@bearmint/bep-126`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 } ; `uriPrefix`: { `max`: `number` = 32; `min`: `number` = 1 } ; `uriSuffix`: { `max`: `number` = 32; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 } ; `policies`: { `max`: `number` = 6; `min`: `number` = 1 }  } ; `list`: { `policies`: { `burn`: `string`[] ; `mint`: `string`[] ; `transfer`: `string`[]  }  } ; `regex`: { `name`: { `pattern`: `string` = '^([a-zA-Z0-9\_-]){1,128}$' } ; `symbol`: { `pattern`: `string` = '^([a-zA-Z0-9\_-]){1,128}$' }  }  }  } ; `@bearmint/bep-127`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-128`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-129`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-130`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-131`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-132`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-133`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-134`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 } ; `policies`: { `max`: `number` = 2; `min`: `number` = 1 }  } ; `list`: { `policies`: { `burn`: `string`[] ; `mint`: `string`[] ; `transfer`: `string`[]  }  } ; `range`: { `decimals`: { `max`: `number` = 32; `min`: `number` = 8 }  } ; `regex`: { `denomination`: { `pattern`: `string` = '^([a-zA-Z0-9\_-]){1,32}$' } ; `name`: { `pattern`: `string` = '^([a-zA-Z0-9\_-]){1,32}$' }  }  }  } ; `@bearmint/bep-135`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-136`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-137`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  }  }  } |
| `parameters.modules.mandatory` | { `@bearmint/bep-021`: { `*`: { `strategy`: `string` = '@bearmint/bep-115' }  } ; `@bearmint/bep-030`: { `*`: { `strategy`: `string` = '@bearmint/bep-033' }  } ; `@bearmint/bep-038`: { `*`: { `strategy`: `string` = '@bearmint/bep-042' }  } ; `@bearmint/bep-042`: { `*`: { `prefix`: `string` = 'bear' }  } ; `@bearmint/bep-048`: { `*`: { `strategy`: `string` = '@bearmint/bep-049' }  } ; `@bearmint/bep-049`: { `*`: { `@bearmint/bep-055`: { `*`: `string`  } ; `@bearmint/bep-056`: { `*`: `string`  } ; `@bearmint/bep-057`: { `*`: `string`  } ; `@bearmint/bep-058`: { `*`: `string`  } ; `@bearmint/bep-059`: { `*`: `string`  } ; `@bearmint/bep-064`: { `*`: `string`  } ; `@bearmint/bep-065`: { `*`: `string`  } ; `@bearmint/bep-066`: { `*`: `string`  } ; `@bearmint/bep-067`: { `*`: `string`  } ; `@bearmint/bep-068`: { `*`: `string`  } ; `@bearmint/bep-104`: { `*`: `string`  } ; `@bearmint/bep-110`: { `*`: `string`  } ; `@bearmint/bep-122`: { `*`: `string`  } ; `@bearmint/bep-126`: { `*`: `string`  } ; `@bearmint/bep-127`: { `*`: `string`  } ; `@bearmint/bep-128`: { `*`: `string`  } ; `@bearmint/bep-129`: { `*`: `string`  } ; `@bearmint/bep-130`: { `*`: `string`  } ; `@bearmint/bep-131`: { `*`: `string`  } ; `@bearmint/bep-132`: { `*`: `string`  } ; `@bearmint/bep-133`: { `*`: `string`  } ; `@bearmint/bep-134`: { `*`: `string`  } ; `@bearmint/bep-135`: { `*`: `string`  } ; `@bearmint/bep-136`: { `*`: `string`  } ; `@bearmint/bep-137`: { `*`: `string`  }  }  } ; `@bearmint/bep-051`: { `*`: { `version`: `string` = '1.0.0' }  } ; `@bearmint/bep-055`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 256; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-056`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 256; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-057`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-058`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `detachDelegators`: `boolean` = true }  } ; `@bearmint/bep-059`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `list`: { `strategy`: `string`[]  }  }  } ; `@bearmint/bep-064`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  } ; `list`: { `secretAlgorithm`: `string`[]  }  }  } ; `@bearmint/bep-065`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-066`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-067`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 } ; `value`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 64; `min`: `number` = 1 }  } ; `list`: { `type`: `string`[]  }  }  } ; `@bearmint/bep-068`: { `*`: { `byteLength`: { `data`: { `max`: `number` = 64; `min`: `number` = 32 } ; `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-076`: { `*`: { `strategy`: `string` = '@bearmint/bep-077' }  } ; `@bearmint/bep-078`: { `*`: { `strategy`: `string` = 'fixed' }  } ; `@bearmint/bep-081`: { `*`: { `amount`: `number` = 2e8 }  } ; `@bearmint/bep-086`: { `*`: { `range`: { `percentage`: { `max`: `number` = 100; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-087`: { `*`: { `strategy`: `string` = '@bearmint/bep-088' }  } ; `@bearmint/bep-088`: { `*`: { `count`: { `validators`: { `max`: `number` = 5; `min`: `number` = 1 }  } ; `mode`: `string` = 'delegated'; `range`: { `power`: { `max`: `number` = 0; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-089`: { `*`: { `retainBlocks`: `number` = 0 }  } ; `@bearmint/bep-102`: { `*`: { `strategies`: { `@bearmint/bep-118`: `number`[]  }  }  } ; `@bearmint/bep-103`: { `*`: { `strategies`: { `@bearmint/bep-119`: `number`[]  }  }  } ; `@bearmint/bep-104`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 10; `min`: `number` = 1 } ; `stakes`: { `max`: `number` = 1; `min`: `number` = 0 }  } ; `range`: { `stake`: { `max`: `number` = 10e8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-110`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `regex`: { `moniker`: { `pattern`: `string` = '^[da-zA-Z](?:[da-zA-Z]\|-(?=[da-zA-Z])){1,32}$' }  }  }  } ; `@bearmint/bep-118`: { `*`: { `punishments`: { `denomination`: `string` = denominations.stake; `percentage`: `number` = 10; `type`: `number` = 0 }[]  }  } ; `@bearmint/bep-119`: { `*`: { `punishments`: { `denomination`: `string` = denominations.stake; `percentage`: `number` = 10; `type`: `number` = 0 }[]  }  } ; `@bearmint/bep-120`: { `*`: { `punishments`: { `durations`: `number`[] ; `type`: `string` = '*' }[]  }  } ; `@bearmint/bep-121`: { `*`: { `punishments`: { `jailSentences`: `number` = 3; `type`: `string` = '*' }[]  }  } ; `@bearmint/bep-122`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-124`: { `*`: { `amount`: `number` = 2e8 }  } ; `@bearmint/bep-126`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 } ; `uriPrefix`: { `max`: `number` = 32; `min`: `number` = 1 } ; `uriSuffix`: { `max`: `number` = 32; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 } ; `policies`: { `max`: `number` = 6; `min`: `number` = 1 }  } ; `list`: { `policies`: { `burn`: `string`[] ; `mint`: `string`[] ; `transfer`: `string`[]  }  } ; `regex`: { `name`: { `pattern`: `string` = '^([a-zA-Z0-9\_-]){1,128}$' } ; `symbol`: { `pattern`: `string` = '^([a-zA-Z0-9\_-]){1,128}$' }  }  }  } ; `@bearmint/bep-127`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-128`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-129`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-130`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-131`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-132`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-133`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-134`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 } ; `policies`: { `max`: `number` = 2; `min`: `number` = 1 }  } ; `list`: { `policies`: { `burn`: `string`[] ; `mint`: `string`[] ; `transfer`: `string`[]  }  } ; `range`: { `decimals`: { `max`: `number` = 32; `min`: `number` = 8 }  } ; `regex`: { `denomination`: { `pattern`: `string` = '^([a-zA-Z0-9\_-]){1,32}$' } ; `name`: { `pattern`: `string` = '^([a-zA-Z0-9\_-]){1,32}$' }  }  }  } ; `@bearmint/bep-135`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-136`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } ; `@bearmint/bep-137`: { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-021` | { `*`: { `strategy`: `string` = '@bearmint/bep-115' }  } |
| `parameters.modules.mandatory.@bearmint/bep-021.*` | { `strategy`: `string` = '@bearmint/bep-115' } |
| `parameters.modules.mandatory.@bearmint/bep-021.*.strategy` | `string` |
| `parameters.modules.mandatory.@bearmint/bep-030` | { `*`: { `strategy`: `string` = '@bearmint/bep-033' }  } |
| `parameters.modules.mandatory.@bearmint/bep-030.*` | { `strategy`: `string` = '@bearmint/bep-033' } |
| `parameters.modules.mandatory.@bearmint/bep-030.*.strategy` | `string` |
| `parameters.modules.mandatory.@bearmint/bep-038` | { `*`: { `strategy`: `string` = '@bearmint/bep-042' }  } |
| `parameters.modules.mandatory.@bearmint/bep-038.*` | { `strategy`: `string` = '@bearmint/bep-042' } |
| `parameters.modules.mandatory.@bearmint/bep-038.*.strategy` | `string` |
| `parameters.modules.mandatory.@bearmint/bep-042` | { `*`: { `prefix`: `string` = 'bear' }  } |
| `parameters.modules.mandatory.@bearmint/bep-042.*` | { `prefix`: `string` = 'bear' } |
| `parameters.modules.mandatory.@bearmint/bep-042.*.prefix` | `string` |
| `parameters.modules.mandatory.@bearmint/bep-048` | { `*`: { `strategy`: `string` = '@bearmint/bep-049' }  } |
| `parameters.modules.mandatory.@bearmint/bep-048.*` | { `strategy`: `string` = '@bearmint/bep-049' } |
| `parameters.modules.mandatory.@bearmint/bep-048.*.strategy` | `string` |
| `parameters.modules.mandatory.@bearmint/bep-049` | { `*`: { `@bearmint/bep-055`: { `*`: `string`  } ; `@bearmint/bep-056`: { `*`: `string`  } ; `@bearmint/bep-057`: { `*`: `string`  } ; `@bearmint/bep-058`: { `*`: `string`  } ; `@bearmint/bep-059`: { `*`: `string`  } ; `@bearmint/bep-064`: { `*`: `string`  } ; `@bearmint/bep-065`: { `*`: `string`  } ; `@bearmint/bep-066`: { `*`: `string`  } ; `@bearmint/bep-067`: { `*`: `string`  } ; `@bearmint/bep-068`: { `*`: `string`  } ; `@bearmint/bep-104`: { `*`: `string`  } ; `@bearmint/bep-110`: { `*`: `string`  } ; `@bearmint/bep-122`: { `*`: `string`  } ; `@bearmint/bep-126`: { `*`: `string`  } ; `@bearmint/bep-127`: { `*`: `string`  } ; `@bearmint/bep-128`: { `*`: `string`  } ; `@bearmint/bep-129`: { `*`: `string`  } ; `@bearmint/bep-130`: { `*`: `string`  } ; `@bearmint/bep-131`: { `*`: `string`  } ; `@bearmint/bep-132`: { `*`: `string`  } ; `@bearmint/bep-133`: { `*`: `string`  } ; `@bearmint/bep-134`: { `*`: `string`  } ; `@bearmint/bep-135`: { `*`: `string`  } ; `@bearmint/bep-136`: { `*`: `string`  } ; `@bearmint/bep-137`: { `*`: `string`  }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-049.*` | { `@bearmint/bep-055`: { `*`: `string`  } ; `@bearmint/bep-056`: { `*`: `string`  } ; `@bearmint/bep-057`: { `*`: `string`  } ; `@bearmint/bep-058`: { `*`: `string`  } ; `@bearmint/bep-059`: { `*`: `string`  } ; `@bearmint/bep-064`: { `*`: `string`  } ; `@bearmint/bep-065`: { `*`: `string`  } ; `@bearmint/bep-066`: { `*`: `string`  } ; `@bearmint/bep-067`: { `*`: `string`  } ; `@bearmint/bep-068`: { `*`: `string`  } ; `@bearmint/bep-104`: { `*`: `string`  } ; `@bearmint/bep-110`: { `*`: `string`  } ; `@bearmint/bep-122`: { `*`: `string`  } ; `@bearmint/bep-126`: { `*`: `string`  } ; `@bearmint/bep-127`: { `*`: `string`  } ; `@bearmint/bep-128`: { `*`: `string`  } ; `@bearmint/bep-129`: { `*`: `string`  } ; `@bearmint/bep-130`: { `*`: `string`  } ; `@bearmint/bep-131`: { `*`: `string`  } ; `@bearmint/bep-132`: { `*`: `string`  } ; `@bearmint/bep-133`: { `*`: `string`  } ; `@bearmint/bep-134`: { `*`: `string`  } ; `@bearmint/bep-135`: { `*`: `string`  } ; `@bearmint/bep-136`: { `*`: `string`  } ; `@bearmint/bep-137`: { `*`: `string`  }  } |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-055` | { `*`: `string`  } |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-055.*` | `string` |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-056` | { `*`: `string`  } |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-056.*` | `string` |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-057` | { `*`: `string`  } |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-057.*` | `string` |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-058` | { `*`: `string`  } |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-058.*` | `string` |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-059` | { `*`: `string`  } |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-059.*` | `string` |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-064` | { `*`: `string`  } |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-064.*` | `string` |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-065` | { `*`: `string`  } |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-065.*` | `string` |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-066` | { `*`: `string`  } |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-066.*` | `string` |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-067` | { `*`: `string`  } |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-067.*` | `string` |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-068` | { `*`: `string`  } |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-068.*` | `string` |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-104` | { `*`: `string`  } |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-104.*` | `string` |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-110` | { `*`: `string`  } |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-110.*` | `string` |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-122` | { `*`: `string`  } |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-122.*` | `string` |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-126` | { `*`: `string`  } |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-126.*` | `string` |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-127` | { `*`: `string`  } |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-127.*` | `string` |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-128` | { `*`: `string`  } |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-128.*` | `string` |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-129` | { `*`: `string`  } |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-129.*` | `string` |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-130` | { `*`: `string`  } |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-130.*` | `string` |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-131` | { `*`: `string`  } |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-131.*` | `string` |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-132` | { `*`: `string`  } |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-132.*` | `string` |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-133` | { `*`: `string`  } |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-133.*` | `string` |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-134` | { `*`: `string`  } |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-134.*` | `string` |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-135` | { `*`: `string`  } |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-135.*` | `string` |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-136` | { `*`: `string`  } |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-136.*` | `string` |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-137` | { `*`: `string`  } |
| `parameters.modules.mandatory.@bearmint/bep-049.*.@bearmint/bep-137.*` | `string` |
| `parameters.modules.mandatory.@bearmint/bep-051` | { `*`: { `version`: `string` = '1.0.0' }  } |
| `parameters.modules.mandatory.@bearmint/bep-051.*` | { `version`: `string` = '1.0.0' } |
| `parameters.modules.mandatory.@bearmint/bep-051.*.version` | `string` |
| `parameters.modules.mandatory.@bearmint/bep-055` | { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 256; `min`: `number` = 1 }  }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-055.*` | { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 256; `min`: `number` = 1 }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-055.*.byteLength` | { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-055.*.byteLength.memo` | { `max`: `number` = 256; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-055.*.byteLength.memo.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-055.*.byteLength.memo.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-055.*.count` | { `ops`: { `max`: `number` = 256; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-055.*.count.ops` | { `max`: `number` = 256; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-055.*.count.ops.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-055.*.count.ops.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-056` | { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 256; `min`: `number` = 1 }  }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-056.*` | { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 256; `min`: `number` = 1 }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-056.*.byteLength` | { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-056.*.byteLength.memo` | { `max`: `number` = 256; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-056.*.byteLength.memo.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-056.*.byteLength.memo.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-056.*.count` | { `ops`: { `max`: `number` = 256; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-056.*.count.ops` | { `max`: `number` = 256; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-056.*.count.ops.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-056.*.count.ops.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-057` | { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-057.*` | { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-057.*.byteLength` | { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-057.*.byteLength.memo` | { `max`: `number` = 256; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-057.*.byteLength.memo.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-057.*.byteLength.memo.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-058` | { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `detachDelegators`: `boolean` = true }  } |
| `parameters.modules.mandatory.@bearmint/bep-058.*` | { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `detachDelegators`: `boolean` = true } |
| `parameters.modules.mandatory.@bearmint/bep-058.*.byteLength` | { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-058.*.byteLength.memo` | { `max`: `number` = 256; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-058.*.byteLength.memo.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-058.*.byteLength.memo.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-058.*.detachDelegators` | `boolean` |
| `parameters.modules.mandatory.@bearmint/bep-059` | { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `list`: { `strategy`: `string`[]  }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-059.*` | { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `list`: { `strategy`: `string`[]  }  } |
| `parameters.modules.mandatory.@bearmint/bep-059.*.byteLength` | { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-059.*.byteLength.memo` | { `max`: `number` = 256; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-059.*.byteLength.memo.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-059.*.byteLength.memo.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-059.*.list` | { `strategy`: `string`[]  } |
| `parameters.modules.mandatory.@bearmint/bep-059.*.list.strategy` | `string`[] |
| `parameters.modules.mandatory.@bearmint/bep-064` | { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  } ; `list`: { `secretAlgorithm`: `string`[]  }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-064.*` | { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  } ; `list`: { `secretAlgorithm`: `string`[]  }  } |
| `parameters.modules.mandatory.@bearmint/bep-064.*.byteLength` | { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-064.*.byteLength.memo` | { `max`: `number` = 256; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-064.*.byteLength.memo.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-064.*.byteLength.memo.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-064.*.count` | { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-064.*.count.ops` | { `max`: `number` = 8; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-064.*.count.ops.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-064.*.count.ops.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-064.*.list` | { `secretAlgorithm`: `string`[]  } |
| `parameters.modules.mandatory.@bearmint/bep-064.*.list.secretAlgorithm` | `string`[] |
| `parameters.modules.mandatory.@bearmint/bep-065` | { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-065.*` | { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-065.*.byteLength` | { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-065.*.byteLength.memo` | { `max`: `number` = 256; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-065.*.byteLength.memo.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-065.*.byteLength.memo.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-065.*.count` | { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-065.*.count.ops` | { `max`: `number` = 8; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-065.*.count.ops.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-065.*.count.ops.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-066` | { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-066.*` | { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-066.*.byteLength` | { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-066.*.byteLength.memo` | { `max`: `number` = 256; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-066.*.byteLength.memo.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-066.*.byteLength.memo.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-066.*.count` | { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-066.*.count.ops` | { `max`: `number` = 8; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-066.*.count.ops.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-066.*.count.ops.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-067` | { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 } ; `value`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 64; `min`: `number` = 1 }  } ; `list`: { `type`: `string`[]  }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-067.*` | { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 } ; `value`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 64; `min`: `number` = 1 }  } ; `list`: { `type`: `string`[]  }  } |
| `parameters.modules.mandatory.@bearmint/bep-067.*.byteLength` | { `memo`: { `max`: `number` = 256; `min`: `number` = 1 } ; `value`: { `max`: `number` = 256; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-067.*.byteLength.memo` | { `max`: `number` = 256; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-067.*.byteLength.memo.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-067.*.byteLength.memo.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-067.*.byteLength.value` | { `max`: `number` = 256; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-067.*.byteLength.value.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-067.*.byteLength.value.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-067.*.count` | { `ops`: { `max`: `number` = 64; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-067.*.count.ops` | { `max`: `number` = 64; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-067.*.count.ops.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-067.*.count.ops.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-067.*.list` | { `type`: `string`[]  } |
| `parameters.modules.mandatory.@bearmint/bep-067.*.list.type` | `string`[] |
| `parameters.modules.mandatory.@bearmint/bep-068` | { `*`: { `byteLength`: { `data`: { `max`: `number` = 64; `min`: `number` = 32 } ; `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-068.*` | { `byteLength`: { `data`: { `max`: `number` = 64; `min`: `number` = 32 } ; `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-068.*.byteLength` | { `data`: { `max`: `number` = 64; `min`: `number` = 32 } ; `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-068.*.byteLength.data` | { `max`: `number` = 64; `min`: `number` = 32 } |
| `parameters.modules.mandatory.@bearmint/bep-068.*.byteLength.data.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-068.*.byteLength.data.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-068.*.byteLength.memo` | { `max`: `number` = 256; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-068.*.byteLength.memo.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-068.*.byteLength.memo.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-068.*.count` | { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-068.*.count.ops` | { `max`: `number` = 8; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-068.*.count.ops.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-068.*.count.ops.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-076` | { `*`: { `strategy`: `string` = '@bearmint/bep-077' }  } |
| `parameters.modules.mandatory.@bearmint/bep-076.*` | { `strategy`: `string` = '@bearmint/bep-077' } |
| `parameters.modules.mandatory.@bearmint/bep-076.*.strategy` | `string` |
| `parameters.modules.mandatory.@bearmint/bep-078` | { `*`: { `strategy`: `string` = 'fixed' }  } |
| `parameters.modules.mandatory.@bearmint/bep-078.*` | { `strategy`: `string` = 'fixed' } |
| `parameters.modules.mandatory.@bearmint/bep-078.*.strategy` | `string` |
| `parameters.modules.mandatory.@bearmint/bep-081` | { `*`: { `amount`: `number` = 2e8 }  } |
| `parameters.modules.mandatory.@bearmint/bep-081.*` | { `amount`: `number` = 2e8 } |
| `parameters.modules.mandatory.@bearmint/bep-081.*.amount` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-086` | { `*`: { `range`: { `percentage`: { `max`: `number` = 100; `min`: `number` = 1 }  }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-086.*` | { `range`: { `percentage`: { `max`: `number` = 100; `min`: `number` = 1 }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-086.*.range` | { `percentage`: { `max`: `number` = 100; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-086.*.range.percentage` | { `max`: `number` = 100; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-086.*.range.percentage.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-086.*.range.percentage.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-087` | { `*`: { `strategy`: `string` = '@bearmint/bep-088' }  } |
| `parameters.modules.mandatory.@bearmint/bep-087.*` | { `strategy`: `string` = '@bearmint/bep-088' } |
| `parameters.modules.mandatory.@bearmint/bep-087.*.strategy` | `string` |
| `parameters.modules.mandatory.@bearmint/bep-088` | { `*`: { `count`: { `validators`: { `max`: `number` = 5; `min`: `number` = 1 }  } ; `mode`: `string` = 'delegated'; `range`: { `power`: { `max`: `number` = 0; `min`: `number` = 1 }  }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-088.*` | { `count`: { `validators`: { `max`: `number` = 5; `min`: `number` = 1 }  } ; `mode`: `string` = 'delegated'; `range`: { `power`: { `max`: `number` = 0; `min`: `number` = 1 }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-088.*.count` | { `validators`: { `max`: `number` = 5; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-088.*.count.validators` | { `max`: `number` = 5; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-088.*.count.validators.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-088.*.count.validators.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-088.*.mode` | `string` |
| `parameters.modules.mandatory.@bearmint/bep-088.*.range` | { `power`: { `max`: `number` = 0; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-088.*.range.power` | { `max`: `number` = 0; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-088.*.range.power.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-088.*.range.power.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-089` | { `*`: { `retainBlocks`: `number` = 0 }  } |
| `parameters.modules.mandatory.@bearmint/bep-089.*` | { `retainBlocks`: `number` = 0 } |
| `parameters.modules.mandatory.@bearmint/bep-089.*.retainBlocks` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-102` | { `*`: { `strategies`: { `@bearmint/bep-118`: `number`[]  }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-102.*` | { `strategies`: { `@bearmint/bep-118`: `number`[]  }  } |
| `parameters.modules.mandatory.@bearmint/bep-102.*.strategies` | { `@bearmint/bep-118`: `number`[]  } |
| `parameters.modules.mandatory.@bearmint/bep-102.*.strategies.@bearmint/bep-118` | `number`[] |
| `parameters.modules.mandatory.@bearmint/bep-103` | { `*`: { `strategies`: { `@bearmint/bep-119`: `number`[]  }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-103.*` | { `strategies`: { `@bearmint/bep-119`: `number`[]  }  } |
| `parameters.modules.mandatory.@bearmint/bep-103.*.strategies` | { `@bearmint/bep-119`: `number`[]  } |
| `parameters.modules.mandatory.@bearmint/bep-103.*.strategies.@bearmint/bep-119` | `number`[] |
| `parameters.modules.mandatory.@bearmint/bep-104` | { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 10; `min`: `number` = 1 } ; `stakes`: { `max`: `number` = 1; `min`: `number` = 0 }  } ; `range`: { `stake`: { `max`: `number` = 10e8; `min`: `number` = 1 }  }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-104.*` | { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 10; `min`: `number` = 1 } ; `stakes`: { `max`: `number` = 1; `min`: `number` = 0 }  } ; `range`: { `stake`: { `max`: `number` = 10e8; `min`: `number` = 1 }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-104.*.byteLength` | { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-104.*.byteLength.memo` | { `max`: `number` = 256; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-104.*.byteLength.memo.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-104.*.byteLength.memo.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-104.*.count` | { `ops`: { `max`: `number` = 10; `min`: `number` = 1 } ; `stakes`: { `max`: `number` = 1; `min`: `number` = 0 }  } |
| `parameters.modules.mandatory.@bearmint/bep-104.*.count.ops` | { `max`: `number` = 10; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-104.*.count.ops.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-104.*.count.ops.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-104.*.count.stakes` | { `max`: `number` = 1; `min`: `number` = 0 } |
| `parameters.modules.mandatory.@bearmint/bep-104.*.count.stakes.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-104.*.count.stakes.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-104.*.range` | { `stake`: { `max`: `number` = 10e8; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-104.*.range.stake` | { `max`: `number` = 10e8; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-104.*.range.stake.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-104.*.range.stake.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-110` | { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `regex`: { `moniker`: { `pattern`: `string` = '^[da-zA-Z](?:[da-zA-Z]\|-(?=[da-zA-Z])){1,32}$' }  }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-110.*` | { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `regex`: { `moniker`: { `pattern`: `string` = '^[da-zA-Z](?:[da-zA-Z]\|-(?=[da-zA-Z])){1,32}$' }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-110.*.byteLength` | { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-110.*.byteLength.memo` | { `max`: `number` = 256; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-110.*.byteLength.memo.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-110.*.byteLength.memo.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-110.*.regex` | { `moniker`: { `pattern`: `string` = '^[da-zA-Z](?:[da-zA-Z]\|-(?=[da-zA-Z])){1,32}$' }  } |
| `parameters.modules.mandatory.@bearmint/bep-110.*.regex.moniker` | { `pattern`: `string` = '^[da-zA-Z](?:[da-zA-Z]\|-(?=[da-zA-Z])){1,32}$' } |
| `parameters.modules.mandatory.@bearmint/bep-110.*.regex.moniker.pattern` | `string` |
| `parameters.modules.mandatory.@bearmint/bep-118` | { `*`: { `punishments`: { `denomination`: `string` = denominations.stake; `percentage`: `number` = 10; `type`: `number` = 0 }[]  }  } |
| `parameters.modules.mandatory.@bearmint/bep-118.*` | { `punishments`: { `denomination`: `string` = denominations.stake; `percentage`: `number` = 10; `type`: `number` = 0 }[]  } |
| `parameters.modules.mandatory.@bearmint/bep-118.*.punishments` | { `denomination`: `string` = denominations.stake; `percentage`: `number` = 10; `type`: `number` = 0 }[] |
| `parameters.modules.mandatory.@bearmint/bep-119` | { `*`: { `punishments`: { `denomination`: `string` = denominations.stake; `percentage`: `number` = 10; `type`: `number` = 0 }[]  }  } |
| `parameters.modules.mandatory.@bearmint/bep-119.*` | { `punishments`: { `denomination`: `string` = denominations.stake; `percentage`: `number` = 10; `type`: `number` = 0 }[]  } |
| `parameters.modules.mandatory.@bearmint/bep-119.*.punishments` | { `denomination`: `string` = denominations.stake; `percentage`: `number` = 10; `type`: `number` = 0 }[] |
| `parameters.modules.mandatory.@bearmint/bep-120` | { `*`: { `punishments`: { `durations`: `number`[] ; `type`: `string` = '*' }[]  }  } |
| `parameters.modules.mandatory.@bearmint/bep-120.*` | { `punishments`: { `durations`: `number`[] ; `type`: `string` = '*' }[]  } |
| `parameters.modules.mandatory.@bearmint/bep-120.*.punishments` | { `durations`: `number`[] ; `type`: `string` = '*' }[] |
| `parameters.modules.mandatory.@bearmint/bep-121` | { `*`: { `punishments`: { `jailSentences`: `number` = 3; `type`: `string` = '*' }[]  }  } |
| `parameters.modules.mandatory.@bearmint/bep-121.*` | { `punishments`: { `jailSentences`: `number` = 3; `type`: `string` = '*' }[]  } |
| `parameters.modules.mandatory.@bearmint/bep-121.*.punishments` | { `jailSentences`: `number` = 3; `type`: `string` = '*' }[] |
| `parameters.modules.mandatory.@bearmint/bep-122` | { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-122.*` | { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-122.*.byteLength` | { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-122.*.byteLength.memo` | { `max`: `number` = 256; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-122.*.byteLength.memo.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-122.*.byteLength.memo.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-124` | { `*`: { `amount`: `number` = 2e8 }  } |
| `parameters.modules.mandatory.@bearmint/bep-124.*` | { `amount`: `number` = 2e8 } |
| `parameters.modules.mandatory.@bearmint/bep-124.*.amount` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-126` | { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 } ; `uriPrefix`: { `max`: `number` = 32; `min`: `number` = 1 } ; `uriSuffix`: { `max`: `number` = 32; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 } ; `policies`: { `max`: `number` = 6; `min`: `number` = 1 }  } ; `list`: { `policies`: { `burn`: `string`[] ; `mint`: `string`[] ; `transfer`: `string`[]  }  } ; `regex`: { `name`: { `pattern`: `string` = '^([a-zA-Z0-9\_-]){1,128}$' } ; `symbol`: { `pattern`: `string` = '^([a-zA-Z0-9\_-]){1,128}$' }  }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-126.*` | { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 } ; `uriPrefix`: { `max`: `number` = 32; `min`: `number` = 1 } ; `uriSuffix`: { `max`: `number` = 32; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 } ; `policies`: { `max`: `number` = 6; `min`: `number` = 1 }  } ; `list`: { `policies`: { `burn`: `string`[] ; `mint`: `string`[] ; `transfer`: `string`[]  }  } ; `regex`: { `name`: { `pattern`: `string` = '^([a-zA-Z0-9\_-]){1,128}$' } ; `symbol`: { `pattern`: `string` = '^([a-zA-Z0-9\_-]){1,128}$' }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-126.*.byteLength` | { `memo`: { `max`: `number` = 256; `min`: `number` = 1 } ; `uriPrefix`: { `max`: `number` = 32; `min`: `number` = 1 } ; `uriSuffix`: { `max`: `number` = 32; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-126.*.byteLength.memo` | { `max`: `number` = 256; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-126.*.byteLength.memo.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-126.*.byteLength.memo.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-126.*.byteLength.uriPrefix` | { `max`: `number` = 32; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-126.*.byteLength.uriPrefix.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-126.*.byteLength.uriPrefix.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-126.*.byteLength.uriSuffix` | { `max`: `number` = 32; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-126.*.byteLength.uriSuffix.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-126.*.byteLength.uriSuffix.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-126.*.count` | { `ops`: { `max`: `number` = 8; `min`: `number` = 1 } ; `policies`: { `max`: `number` = 6; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-126.*.count.ops` | { `max`: `number` = 8; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-126.*.count.ops.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-126.*.count.ops.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-126.*.count.policies` | { `max`: `number` = 6; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-126.*.count.policies.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-126.*.count.policies.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-126.*.list` | { `policies`: { `burn`: `string`[] ; `mint`: `string`[] ; `transfer`: `string`[]  }  } |
| `parameters.modules.mandatory.@bearmint/bep-126.*.list.policies` | { `burn`: `string`[] ; `mint`: `string`[] ; `transfer`: `string`[]  } |
| `parameters.modules.mandatory.@bearmint/bep-126.*.list.policies.burn` | `string`[] |
| `parameters.modules.mandatory.@bearmint/bep-126.*.list.policies.mint` | `string`[] |
| `parameters.modules.mandatory.@bearmint/bep-126.*.list.policies.transfer` | `string`[] |
| `parameters.modules.mandatory.@bearmint/bep-126.*.regex` | { `name`: { `pattern`: `string` = '^([a-zA-Z0-9\_-]){1,128}$' } ; `symbol`: { `pattern`: `string` = '^([a-zA-Z0-9\_-]){1,128}$' }  } |
| `parameters.modules.mandatory.@bearmint/bep-126.*.regex.name` | { `pattern`: `string` = '^([a-zA-Z0-9\_-]){1,128}$' } |
| `parameters.modules.mandatory.@bearmint/bep-126.*.regex.name.pattern` | `string` |
| `parameters.modules.mandatory.@bearmint/bep-126.*.regex.symbol` | { `pattern`: `string` = '^([a-zA-Z0-9\_-]){1,128}$' } |
| `parameters.modules.mandatory.@bearmint/bep-126.*.regex.symbol.pattern` | `string` |
| `parameters.modules.mandatory.@bearmint/bep-127` | { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-127.*` | { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-127.*.byteLength` | { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-127.*.byteLength.memo` | { `max`: `number` = 256; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-127.*.byteLength.memo.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-127.*.byteLength.memo.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-127.*.count` | { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-127.*.count.ops` | { `max`: `number` = 8; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-127.*.count.ops.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-127.*.count.ops.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-128` | { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-128.*` | { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-128.*.byteLength` | { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-128.*.byteLength.memo` | { `max`: `number` = 256; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-128.*.byteLength.memo.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-128.*.byteLength.memo.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-128.*.count` | { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-128.*.count.ops` | { `max`: `number` = 8; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-128.*.count.ops.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-128.*.count.ops.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-129` | { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-129.*` | { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-129.*.byteLength` | { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-129.*.byteLength.memo` | { `max`: `number` = 256; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-129.*.byteLength.memo.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-129.*.byteLength.memo.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-129.*.count` | { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-129.*.count.ops` | { `max`: `number` = 8; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-129.*.count.ops.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-129.*.count.ops.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-130` | { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-130.*` | { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-130.*.byteLength` | { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-130.*.byteLength.memo` | { `max`: `number` = 256; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-130.*.byteLength.memo.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-130.*.byteLength.memo.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-130.*.count` | { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-130.*.count.ops` | { `max`: `number` = 8; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-130.*.count.ops.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-130.*.count.ops.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-131` | { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-131.*` | { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-131.*.byteLength` | { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-131.*.byteLength.memo` | { `max`: `number` = 256; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-131.*.byteLength.memo.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-131.*.byteLength.memo.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-131.*.count` | { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-131.*.count.ops` | { `max`: `number` = 8; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-131.*.count.ops.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-131.*.count.ops.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-132` | { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-132.*` | { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-132.*.byteLength` | { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-132.*.byteLength.memo` | { `max`: `number` = 256; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-132.*.byteLength.memo.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-132.*.byteLength.memo.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-132.*.count` | { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-132.*.count.ops` | { `max`: `number` = 8; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-132.*.count.ops.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-132.*.count.ops.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-133` | { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-133.*` | { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-133.*.byteLength` | { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-133.*.byteLength.memo` | { `max`: `number` = 256; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-133.*.byteLength.memo.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-133.*.byteLength.memo.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-133.*.count` | { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-133.*.count.ops` | { `max`: `number` = 8; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-133.*.count.ops.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-133.*.count.ops.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-134` | { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 } ; `policies`: { `max`: `number` = 2; `min`: `number` = 1 }  } ; `list`: { `policies`: { `burn`: `string`[] ; `mint`: `string`[] ; `transfer`: `string`[]  }  } ; `range`: { `decimals`: { `max`: `number` = 32; `min`: `number` = 8 }  } ; `regex`: { `denomination`: { `pattern`: `string` = '^([a-zA-Z0-9\_-]){1,32}$' } ; `name`: { `pattern`: `string` = '^([a-zA-Z0-9\_-]){1,32}$' }  }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-134.*` | { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 } ; `policies`: { `max`: `number` = 2; `min`: `number` = 1 }  } ; `list`: { `policies`: { `burn`: `string`[] ; `mint`: `string`[] ; `transfer`: `string`[]  }  } ; `range`: { `decimals`: { `max`: `number` = 32; `min`: `number` = 8 }  } ; `regex`: { `denomination`: { `pattern`: `string` = '^([a-zA-Z0-9\_-]){1,32}$' } ; `name`: { `pattern`: `string` = '^([a-zA-Z0-9\_-]){1,32}$' }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-134.*.byteLength` | { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-134.*.byteLength.memo` | { `max`: `number` = 256; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-134.*.byteLength.memo.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-134.*.byteLength.memo.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-134.*.count` | { `ops`: { `max`: `number` = 8; `min`: `number` = 1 } ; `policies`: { `max`: `number` = 2; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-134.*.count.ops` | { `max`: `number` = 8; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-134.*.count.ops.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-134.*.count.ops.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-134.*.count.policies` | { `max`: `number` = 2; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-134.*.count.policies.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-134.*.count.policies.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-134.*.list` | { `policies`: { `burn`: `string`[] ; `mint`: `string`[] ; `transfer`: `string`[]  }  } |
| `parameters.modules.mandatory.@bearmint/bep-134.*.list.policies` | { `burn`: `string`[] ; `mint`: `string`[] ; `transfer`: `string`[]  } |
| `parameters.modules.mandatory.@bearmint/bep-134.*.list.policies.burn` | `string`[] |
| `parameters.modules.mandatory.@bearmint/bep-134.*.list.policies.mint` | `string`[] |
| `parameters.modules.mandatory.@bearmint/bep-134.*.list.policies.transfer` | `string`[] |
| `parameters.modules.mandatory.@bearmint/bep-134.*.range` | { `decimals`: { `max`: `number` = 32; `min`: `number` = 8 }  } |
| `parameters.modules.mandatory.@bearmint/bep-134.*.range.decimals` | { `max`: `number` = 32; `min`: `number` = 8 } |
| `parameters.modules.mandatory.@bearmint/bep-134.*.range.decimals.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-134.*.range.decimals.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-134.*.regex` | { `denomination`: { `pattern`: `string` = '^([a-zA-Z0-9\_-]){1,32}$' } ; `name`: { `pattern`: `string` = '^([a-zA-Z0-9\_-]){1,32}$' }  } |
| `parameters.modules.mandatory.@bearmint/bep-134.*.regex.denomination` | { `pattern`: `string` = '^([a-zA-Z0-9\_-]){1,32}$' } |
| `parameters.modules.mandatory.@bearmint/bep-134.*.regex.denomination.pattern` | `string` |
| `parameters.modules.mandatory.@bearmint/bep-134.*.regex.name` | { `pattern`: `string` = '^([a-zA-Z0-9\_-]){1,32}$' } |
| `parameters.modules.mandatory.@bearmint/bep-134.*.regex.name.pattern` | `string` |
| `parameters.modules.mandatory.@bearmint/bep-135` | { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-135.*` | { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-135.*.byteLength` | { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-135.*.byteLength.memo` | { `max`: `number` = 256; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-135.*.byteLength.memo.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-135.*.byteLength.memo.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-135.*.count` | { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-135.*.count.ops` | { `max`: `number` = 8; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-135.*.count.ops.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-135.*.count.ops.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-136` | { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-136.*` | { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-136.*.byteLength` | { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-136.*.byteLength.memo` | { `max`: `number` = 256; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-136.*.byteLength.memo.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-136.*.byteLength.memo.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-136.*.count` | { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-136.*.count.ops` | { `max`: `number` = 8; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-136.*.count.ops.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-136.*.count.ops.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-137` | { `*`: { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-137.*` | { `byteLength`: { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } ; `count`: { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  }  } |
| `parameters.modules.mandatory.@bearmint/bep-137.*.byteLength` | { `memo`: { `max`: `number` = 256; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-137.*.byteLength.memo` | { `max`: `number` = 256; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-137.*.byteLength.memo.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-137.*.byteLength.memo.min` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-137.*.count` | { `ops`: { `max`: `number` = 8; `min`: `number` = 1 }  } |
| `parameters.modules.mandatory.@bearmint/bep-137.*.count.ops` | { `max`: `number` = 8; `min`: `number` = 1 } |
| `parameters.modules.mandatory.@bearmint/bep-137.*.count.ops.max` | `number` |
| `parameters.modules.mandatory.@bearmint/bep-137.*.count.ops.min` | `number` |
| `parameters.transactions` | { `handlers`: { `@bearmint/bep-055`: { `ranges`: `string`[]  } ; `@bearmint/bep-056`: { `ranges`: `string`[]  } ; `@bearmint/bep-057`: { `ranges`: `string`[]  } ; `@bearmint/bep-058`: { `ranges`: `string`[]  } ; `@bearmint/bep-059`: { `ranges`: `string`[]  } ; `@bearmint/bep-064`: { `ranges`: `string`[]  } ; `@bearmint/bep-065`: { `ranges`: `string`[]  } ; `@bearmint/bep-066`: { `ranges`: `string`[]  } ; `@bearmint/bep-067`: { `ranges`: `string`[]  } ; `@bearmint/bep-068`: { `ranges`: `string`[]  } ; `@bearmint/bep-104`: { `ranges`: `string`[]  } ; `@bearmint/bep-110`: { `ranges`: `string`[]  } ; `@bearmint/bep-122`: { `ranges`: `string`[]  } ; `@bearmint/bep-126`: { `ranges`: `string`[]  } ; `@bearmint/bep-127`: { `ranges`: `string`[]  } ; `@bearmint/bep-128`: { `ranges`: `string`[]  } ; `@bearmint/bep-129`: { `ranges`: `string`[]  } ; `@bearmint/bep-130`: { `ranges`: `string`[]  } ; `@bearmint/bep-131`: { `ranges`: `string`[]  } ; `@bearmint/bep-132`: { `ranges`: `string`[]  } ; `@bearmint/bep-133`: { `ranges`: `string`[]  } ; `@bearmint/bep-134`: { `ranges`: `string`[]  } ; `@bearmint/bep-135`: { `ranges`: `string`[]  } ; `@bearmint/bep-136`: { `ranges`: `string`[]  } ; `@bearmint/bep-137`: { `ranges`: `string`[]  }  }  } |
| `parameters.transactions.handlers` | { `@bearmint/bep-055`: { `ranges`: `string`[]  } ; `@bearmint/bep-056`: { `ranges`: `string`[]  } ; `@bearmint/bep-057`: { `ranges`: `string`[]  } ; `@bearmint/bep-058`: { `ranges`: `string`[]  } ; `@bearmint/bep-059`: { `ranges`: `string`[]  } ; `@bearmint/bep-064`: { `ranges`: `string`[]  } ; `@bearmint/bep-065`: { `ranges`: `string`[]  } ; `@bearmint/bep-066`: { `ranges`: `string`[]  } ; `@bearmint/bep-067`: { `ranges`: `string`[]  } ; `@bearmint/bep-068`: { `ranges`: `string`[]  } ; `@bearmint/bep-104`: { `ranges`: `string`[]  } ; `@bearmint/bep-110`: { `ranges`: `string`[]  } ; `@bearmint/bep-122`: { `ranges`: `string`[]  } ; `@bearmint/bep-126`: { `ranges`: `string`[]  } ; `@bearmint/bep-127`: { `ranges`: `string`[]  } ; `@bearmint/bep-128`: { `ranges`: `string`[]  } ; `@bearmint/bep-129`: { `ranges`: `string`[]  } ; `@bearmint/bep-130`: { `ranges`: `string`[]  } ; `@bearmint/bep-131`: { `ranges`: `string`[]  } ; `@bearmint/bep-132`: { `ranges`: `string`[]  } ; `@bearmint/bep-133`: { `ranges`: `string`[]  } ; `@bearmint/bep-134`: { `ranges`: `string`[]  } ; `@bearmint/bep-135`: { `ranges`: `string`[]  } ; `@bearmint/bep-136`: { `ranges`: `string`[]  } ; `@bearmint/bep-137`: { `ranges`: `string`[]  }  } |
| `parameters.transactions.handlers.@bearmint/bep-055` | { `ranges`: `string`[]  } |
| `parameters.transactions.handlers.@bearmint/bep-055.ranges` | `string`[] |
| `parameters.transactions.handlers.@bearmint/bep-056` | { `ranges`: `string`[]  } |
| `parameters.transactions.handlers.@bearmint/bep-056.ranges` | `string`[] |
| `parameters.transactions.handlers.@bearmint/bep-057` | { `ranges`: `string`[]  } |
| `parameters.transactions.handlers.@bearmint/bep-057.ranges` | `string`[] |
| `parameters.transactions.handlers.@bearmint/bep-058` | { `ranges`: `string`[]  } |
| `parameters.transactions.handlers.@bearmint/bep-058.ranges` | `string`[] |
| `parameters.transactions.handlers.@bearmint/bep-059` | { `ranges`: `string`[]  } |
| `parameters.transactions.handlers.@bearmint/bep-059.ranges` | `string`[] |
| `parameters.transactions.handlers.@bearmint/bep-064` | { `ranges`: `string`[]  } |
| `parameters.transactions.handlers.@bearmint/bep-064.ranges` | `string`[] |
| `parameters.transactions.handlers.@bearmint/bep-065` | { `ranges`: `string`[]  } |
| `parameters.transactions.handlers.@bearmint/bep-065.ranges` | `string`[] |
| `parameters.transactions.handlers.@bearmint/bep-066` | { `ranges`: `string`[]  } |
| `parameters.transactions.handlers.@bearmint/bep-066.ranges` | `string`[] |
| `parameters.transactions.handlers.@bearmint/bep-067` | { `ranges`: `string`[]  } |
| `parameters.transactions.handlers.@bearmint/bep-067.ranges` | `string`[] |
| `parameters.transactions.handlers.@bearmint/bep-068` | { `ranges`: `string`[]  } |
| `parameters.transactions.handlers.@bearmint/bep-068.ranges` | `string`[] |
| `parameters.transactions.handlers.@bearmint/bep-104` | { `ranges`: `string`[]  } |
| `parameters.transactions.handlers.@bearmint/bep-104.ranges` | `string`[] |
| `parameters.transactions.handlers.@bearmint/bep-110` | { `ranges`: `string`[]  } |
| `parameters.transactions.handlers.@bearmint/bep-110.ranges` | `string`[] |
| `parameters.transactions.handlers.@bearmint/bep-122` | { `ranges`: `string`[]  } |
| `parameters.transactions.handlers.@bearmint/bep-122.ranges` | `string`[] |
| `parameters.transactions.handlers.@bearmint/bep-126` | { `ranges`: `string`[]  } |
| `parameters.transactions.handlers.@bearmint/bep-126.ranges` | `string`[] |
| `parameters.transactions.handlers.@bearmint/bep-127` | { `ranges`: `string`[]  } |
| `parameters.transactions.handlers.@bearmint/bep-127.ranges` | `string`[] |
| `parameters.transactions.handlers.@bearmint/bep-128` | { `ranges`: `string`[]  } |
| `parameters.transactions.handlers.@bearmint/bep-128.ranges` | `string`[] |
| `parameters.transactions.handlers.@bearmint/bep-129` | { `ranges`: `string`[]  } |
| `parameters.transactions.handlers.@bearmint/bep-129.ranges` | `string`[] |
| `parameters.transactions.handlers.@bearmint/bep-130` | { `ranges`: `string`[]  } |
| `parameters.transactions.handlers.@bearmint/bep-130.ranges` | `string`[] |
| `parameters.transactions.handlers.@bearmint/bep-131` | { `ranges`: `string`[]  } |
| `parameters.transactions.handlers.@bearmint/bep-131.ranges` | `string`[] |
| `parameters.transactions.handlers.@bearmint/bep-132` | { `ranges`: `string`[]  } |
| `parameters.transactions.handlers.@bearmint/bep-132.ranges` | `string`[] |
| `parameters.transactions.handlers.@bearmint/bep-133` | { `ranges`: `string`[]  } |
| `parameters.transactions.handlers.@bearmint/bep-133.ranges` | `string`[] |
| `parameters.transactions.handlers.@bearmint/bep-134` | { `ranges`: `string`[]  } |
| `parameters.transactions.handlers.@bearmint/bep-134.ranges` | `string`[] |
| `parameters.transactions.handlers.@bearmint/bep-135` | { `ranges`: `string`[]  } |
| `parameters.transactions.handlers.@bearmint/bep-135.ranges` | `string`[] |
| `parameters.transactions.handlers.@bearmint/bep-136` | { `ranges`: `string`[]  } |
| `parameters.transactions.handlers.@bearmint/bep-136.ranges` | `string`[] |
| `parameters.transactions.handlers.@bearmint/bep-137` | { `ranges`: `string`[]  } |
| `parameters.transactions.handlers.@bearmint/bep-137.ranges` | `string`[] |

#### Defined in

[tendermint.ts:83](https://github.com/bearmint/bearmint/blob/main/packages/bep-006/source/tendermint.ts#L83)

___

### mnemonic

• `Const` **mnemonic**: `string`

#### Defined in

[fixtures.ts:26](https://github.com/bearmint/bearmint/blob/main/packages/bep-006/source/fixtures.ts#L26)

___

### mnemonics

• `Const` **mnemonics**: `string`[]

#### Defined in

[fixtures.ts:20](https://github.com/bearmint/bearmint/blob/main/packages/bep-006/source/fixtures.ts#L20)
