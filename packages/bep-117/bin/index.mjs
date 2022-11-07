#!/usr/bin/env node
import { Cli } from 'clipanion'

import { ConfigDeleteCommand } from '../distribution/cub/commands/config-del.js'
import { ConfigGetCommand } from '../distribution/cub/commands/config-get.js'
import { ConfigSetCommand } from '../distribution/cub/commands/config-set.js'
import { GenNodeKeyCommand } from '../distribution/tm/commands/gen-node-key.js'
import { GetPeerIdCommand } from '../distribution/tm/commands/get-peer-id.js'
import { PresetFullCommand } from '../distribution/tm/commands/preset-full.js'
import { PresetSeedCommand } from '../distribution/tm/commands/preset-seed.js'
import { PresetSentryCommand } from '../distribution/tm/commands/preset-sentry.js'
import { PresetValidatorCommand } from '../distribution/tm/commands/preset-validator.js'
import { RPCDisableCommand } from '../distribution/tm/commands/rpc-disable.js'
import { RPCEnableCommand } from '../distribution/tm/commands/rpc-enable.js'
import { SetExternalAddressCommand } from '../distribution/tm/commands/set-external-address.js'
import { SetValidatorKeyCommand } from '../distribution/tm/commands/set-validator-key.js'
import { BEP55Command } from '../distribution/tx/commands/bep-055.js'
import { BEP56Command } from '../distribution/tx/commands/bep-056.js'
import { BEP57Command } from '../distribution/tx/commands/bep-057.js'
import { BEP58Command } from '../distribution/tx/commands/bep-058.js'
import { BEP59Command } from '../distribution/tx/commands/bep-059.js'
import { BEP64Command } from '../distribution/tx/commands/bep-064.js'
import { BEP65Command } from '../distribution/tx/commands/bep-065.js'
import { BEP66Command } from '../distribution/tx/commands/bep-066.js'
import { BEP67Command } from '../distribution/tx/commands/bep-067.js'
import { BEP68Command } from '../distribution/tx/commands/bep-068.js'
import { BEP104Command } from '../distribution/tx/commands/bep-104.js'
import { BEP110Command } from '../distribution/tx/commands/bep-110.js'
import { BEP122Command } from '../distribution/tx/commands/bep-122.js'
import { BEP126Command } from '../distribution/tx/commands/bep-126.js'
import { BEP127Command } from '../distribution/tx/commands/bep-127.js'
import { BEP128Command } from '../distribution/tx/commands/bep-128.js'
import { BEP129Command } from '../distribution/tx/commands/bep-129.js'
import { BEP130Command } from '../distribution/tx/commands/bep-130.js'
import { BEP131Command } from '../distribution/tx/commands/bep-131.js'
import { BEP132Command } from '../distribution/tx/commands/bep-132.js'
import { BEP133Command } from '../distribution/tx/commands/bep-133.js'
import { BEP134Command } from '../distribution/tx/commands/bep-134.js'
import { BEP135Command } from '../distribution/tx/commands/bep-135.js'
import { BEP136Command } from '../distribution/tx/commands/bep-136.js'
import { BEP137Command } from '../distribution/tx/commands/bep-137.js'
import { DecodeTxCommand } from '../distribution/tx/commands/decode.js'
import { RoutineCommand } from '../distribution/tx/commands/routine.js'
import { RoutinePublishCommand } from '../distribution/tx/commands/routine-publish.js'

const cli = new Cli({
	binaryLabel: '@bearmint/bep-117',
	binaryName: 'cub',
	binaryVersion: '0.0.0',
})

cli.register(ConfigGetCommand)
cli.register(ConfigSetCommand)
cli.register(ConfigDeleteCommand)
cli.register(GenNodeKeyCommand)
cli.register(GetPeerIdCommand)
cli.register(PresetFullCommand)
cli.register(PresetSeedCommand)
cli.register(PresetSentryCommand)
cli.register(PresetValidatorCommand)
cli.register(RPCDisableCommand)
cli.register(RPCEnableCommand)
cli.register(SetExternalAddressCommand)
cli.register(SetValidatorKeyCommand)
cli.register(BEP55Command)
cli.register(BEP56Command)
cli.register(BEP57Command)
cli.register(BEP58Command)
cli.register(BEP59Command)
cli.register(BEP64Command)
cli.register(BEP65Command)
cli.register(BEP66Command)
cli.register(BEP67Command)
cli.register(BEP68Command)
cli.register(BEP104Command)
cli.register(BEP110Command)
cli.register(BEP122Command)
cli.register(BEP126Command)
cli.register(BEP127Command)
cli.register(BEP128Command)
cli.register(BEP129Command)
cli.register(BEP130Command)
cli.register(BEP131Command)
cli.register(BEP132Command)
cli.register(BEP133Command)
cli.register(BEP134Command)
cli.register(BEP135Command)
cli.register(BEP136Command)
cli.register(BEP137Command)
cli.register(DecodeTxCommand)
cli.register(RoutinePublishCommand)
cli.register(RoutineCommand)

await cli.runExit(process.argv.slice(2))
