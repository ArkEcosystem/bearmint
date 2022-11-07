import { assert } from '@bearmint/bep-009'
import type { Address, KeyPair, TxBuilder, TxMsgFaker } from '@bearmint/bep-013'
import type {
	AnyMessage,
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
	PartialMessage,
	TxMsg,
} from '@bearmint/bep-018'

import { BUILDERS } from './builder/factory.js'
import { FAKERS } from './faker/factory.js'
import { makeClient } from './rails/factory.js'
import { makeTendermintClient } from './tendermint/factory.js'
import { signTx } from './tx.js'
import type { Options } from './types.js'

export function makeInstance(options?: Options) {
	function buildTx(type: '@bearmint/bep-055'): TxBuilder<BEP55Msg>
	function buildTx(type: '@bearmint/bep-056'): TxBuilder<BEP56Msg>
	function buildTx(type: '@bearmint/bep-057'): TxBuilder<BEP57Msg>
	function buildTx(type: '@bearmint/bep-058'): TxBuilder<BEP58Msg>
	function buildTx(type: '@bearmint/bep-059'): TxBuilder<BEP59Msg>
	function buildTx(type: '@bearmint/bep-064'): TxBuilder<BEP64Msg>
	function buildTx(type: '@bearmint/bep-065'): TxBuilder<BEP65Msg>
	function buildTx(type: '@bearmint/bep-066'): TxBuilder<BEP66Msg>
	function buildTx(type: '@bearmint/bep-067'): TxBuilder<BEP67Msg>
	function buildTx(type: '@bearmint/bep-068'): TxBuilder<BEP68Msg>
	function buildTx(type: '@bearmint/bep-104'): TxBuilder<BEP104Msg>
	function buildTx(type: '@bearmint/bep-110'): TxBuilder<BEP110Msg>
	function buildTx(type: '@bearmint/bep-122'): TxBuilder<BEP122Msg>
	function buildTx(type: '@bearmint/bep-126'): TxBuilder<BEP126Msg>
	function buildTx(type: '@bearmint/bep-127'): TxBuilder<BEP127Msg>
	function buildTx(type: '@bearmint/bep-128'): TxBuilder<BEP128Msg>
	function buildTx(type: '@bearmint/bep-129'): TxBuilder<BEP129Msg>
	function buildTx(type: '@bearmint/bep-130'): TxBuilder<BEP130Msg>
	function buildTx(type: '@bearmint/bep-131'): TxBuilder<BEP131Msg>
	function buildTx(type: '@bearmint/bep-132'): TxBuilder<BEP132Msg>
	function buildTx(type: '@bearmint/bep-133'): TxBuilder<BEP133Msg>
	function buildTx(type: '@bearmint/bep-134'): TxBuilder<BEP134Msg>
	function buildTx(type: '@bearmint/bep-135'): TxBuilder<BEP135Msg>
	function buildTx(type: '@bearmint/bep-136'): TxBuilder<BEP136Msg>
	function buildTx(type: '@bearmint/bep-137'): TxBuilder<BEP137Msg>
	// eslint-disable-next-line unicorn/consistent-function-scoping
	function buildTx(type: keyof typeof BUILDERS): TxBuilder<AnyMessage> {
		return BUILDERS[type]()
	}

	function fakeTxMsg(type: '@bearmint/bep-055'): TxMsgFaker<BEP55Msg>
	function fakeTxMsg(type: '@bearmint/bep-056'): TxMsgFaker<BEP56Msg>
	function fakeTxMsg(type: '@bearmint/bep-057'): TxMsgFaker<BEP57Msg>
	function fakeTxMsg(type: '@bearmint/bep-058'): TxMsgFaker<BEP58Msg>
	function fakeTxMsg(type: '@bearmint/bep-059'): TxMsgFaker<BEP59Msg>
	function fakeTxMsg(type: '@bearmint/bep-064'): TxMsgFaker<BEP64Msg>
	function fakeTxMsg(type: '@bearmint/bep-065'): TxMsgFaker<BEP65Msg>
	function fakeTxMsg(type: '@bearmint/bep-066'): TxMsgFaker<BEP66Msg>
	function fakeTxMsg(type: '@bearmint/bep-067'): TxMsgFaker<BEP67Msg>
	function fakeTxMsg(type: '@bearmint/bep-068'): TxMsgFaker<BEP68Msg>
	function fakeTxMsg(type: '@bearmint/bep-104'): TxMsgFaker<BEP104Msg>
	function fakeTxMsg(type: '@bearmint/bep-110'): TxMsgFaker<BEP110Msg>
	function fakeTxMsg(type: '@bearmint/bep-122'): TxMsgFaker<BEP122Msg>
	function fakeTxMsg(type: '@bearmint/bep-126'): TxMsgFaker<BEP126Msg>
	function fakeTxMsg(type: '@bearmint/bep-127'): TxMsgFaker<BEP127Msg>
	function fakeTxMsg(type: '@bearmint/bep-128'): TxMsgFaker<BEP128Msg>
	function fakeTxMsg(type: '@bearmint/bep-129'): TxMsgFaker<BEP129Msg>
	function fakeTxMsg(type: '@bearmint/bep-130'): TxMsgFaker<BEP130Msg>
	function fakeTxMsg(type: '@bearmint/bep-131'): TxMsgFaker<BEP131Msg>
	function fakeTxMsg(type: '@bearmint/bep-132'): TxMsgFaker<BEP132Msg>
	function fakeTxMsg(type: '@bearmint/bep-133'): TxMsgFaker<BEP133Msg>
	function fakeTxMsg(type: '@bearmint/bep-134'): TxMsgFaker<BEP134Msg>
	function fakeTxMsg(type: '@bearmint/bep-135'): TxMsgFaker<BEP135Msg>
	function fakeTxMsg(type: '@bearmint/bep-136'): TxMsgFaker<BEP136Msg>
	function fakeTxMsg(type: '@bearmint/bep-137'): TxMsgFaker<BEP137Msg>
	function fakeTxMsg(type: keyof typeof FAKERS): TxMsgFaker<AnyMessage> {
		assert.defined<Options>(options)

		return FAKERS[type](options)
	}

	return {
		buildTx,
		fakeTxMsg,
		rails() {
			assert.defined<Options>(options?.rails)

			return makeClient(options.rails.host)
		},
		async signTx({
			data,
			recipient,
			sender,
		}: {
			data: { gas: string; nonce: string; message: PartialMessage<TxMsg> }
			recipient: Address
			sender: KeyPair
		}) {
			assert.defined<Options>(options)

			return signTx({
				...options.cryptography.account,
				data,
				recipient,
				sender,
			})
		},
		trpc(host?: string) {
			return makeTendermintClient(host ?? 'http://127.0.0.1:26657')
		},
	}
}
