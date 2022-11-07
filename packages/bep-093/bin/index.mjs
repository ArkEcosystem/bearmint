#!/usr/bin/env node
import { Cli } from 'clipanion'

import { StartCommand } from '../distribution/commands/start.js'

const cli = new Cli({
	binaryLabel: '@bearmint/bep-093',
	binaryName: 'bep93',
	binaryVersion: '0.0.0',
})

cli.register(StartCommand)

await cli.runExit(process.argv.slice(2))
