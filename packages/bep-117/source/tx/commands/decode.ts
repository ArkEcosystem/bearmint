import { canonicalizeJson, hexToBytes } from '@bearmint/bep-009'
import {
	BEP55Msg,
	BEP56Msg,
	BEP57Msg,
	BEP58Msg,
	BEP59Msg,
	BEP64Msg,
	BEP65Msg,
	BEP66Msg,
	BEP67Msg,
	BEP68Msg,
	BEP104Msg,
	BEP110Msg,
	BEP122Msg,
	BEP126Msg,
	BEP127Msg,
	BEP128Msg,
	BEP129Msg,
	BEP130Msg,
	BEP131Msg,
	BEP132Msg,
	BEP133Msg,
	BEP134Msg,
	BEP135Msg,
	BEP136Msg,
	BEP137Msg,
} from '@bearmint/bep-018'
import { Command, Option } from 'clipanion'
import { match } from 'ts-pattern'
import * as t from 'typanion'

export class DecodeTxCommand extends Command {
	public static override paths = [['tx', 'decode']]

	public readonly description = 'Submit a `NAT Mint` Tx'

	public readonly data = Option.String('--data', {
		description: 'The hash of the native token to mint',
		required: true,
		validator: t.isString(),
	})

	public readonly type = Option.String('--type', {
		description: 'The hash of the native token to mint',
		required: true,
		validator: t.isString(),
	})

	async execute() {
		console.log(
			JSON.stringify(
				canonicalizeJson(
					match(this.type as any)
						.with('@bearmint/bep-055', () => BEP55Msg.fromBinary(hexToBytes(this.data)))
						.with('@bearmint/bep-056', () => BEP56Msg.fromBinary(hexToBytes(this.data)))
						.with('@bearmint/bep-057', () => BEP57Msg.fromBinary(hexToBytes(this.data)))
						.with('@bearmint/bep-058', () => BEP58Msg.fromBinary(hexToBytes(this.data)))
						.with('@bearmint/bep-059', () => BEP59Msg.fromBinary(hexToBytes(this.data)))
						.with('@bearmint/bep-064', () => BEP64Msg.fromBinary(hexToBytes(this.data)))
						.with('@bearmint/bep-065', () => BEP65Msg.fromBinary(hexToBytes(this.data)))
						.with('@bearmint/bep-066', () => BEP66Msg.fromBinary(hexToBytes(this.data)))
						.with('@bearmint/bep-067', () => BEP67Msg.fromBinary(hexToBytes(this.data)))
						.with('@bearmint/bep-068', () => BEP68Msg.fromBinary(hexToBytes(this.data)))
						.with('@bearmint/bep-104', () => BEP104Msg.fromBinary(hexToBytes(this.data)))
						.with('@bearmint/bep-110', () => BEP110Msg.fromBinary(hexToBytes(this.data)))
						.with('@bearmint/bep-122', () => BEP122Msg.fromBinary(hexToBytes(this.data)))
						.with('@bearmint/bep-126', () => BEP126Msg.fromBinary(hexToBytes(this.data)))
						.with('@bearmint/bep-127', () => BEP127Msg.fromBinary(hexToBytes(this.data)))
						.with('@bearmint/bep-128', () => BEP128Msg.fromBinary(hexToBytes(this.data)))
						.with('@bearmint/bep-129', () => BEP129Msg.fromBinary(hexToBytes(this.data)))
						.with('@bearmint/bep-130', () => BEP130Msg.fromBinary(hexToBytes(this.data)))
						.with('@bearmint/bep-131', () => BEP131Msg.fromBinary(hexToBytes(this.data)))
						.with('@bearmint/bep-132', () => BEP132Msg.fromBinary(hexToBytes(this.data)))
						.with('@bearmint/bep-133', () => BEP133Msg.fromBinary(hexToBytes(this.data)))
						.with('@bearmint/bep-134', () => BEP134Msg.fromBinary(hexToBytes(this.data)))
						.with('@bearmint/bep-135', () => BEP135Msg.fromBinary(hexToBytes(this.data)))
						.with('@bearmint/bep-136', () => BEP136Msg.fromBinary(hexToBytes(this.data)))
						.with('@bearmint/bep-137', () => BEP137Msg.fromBinary(hexToBytes(this.data)))
						.exhaustive(),
				),
				undefined,
				4,
			),
		)
	}
}
