import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'
import { BEP67MsgOp } from '@bearmint/bep-018'

import { createTx, setUp } from '../setup.js'

describe<TxTestContext>('Tx Executor', () => {
	setUp(beforeEach)

	it('should attach [base32cid] to the sender', async (context) => {
		const { primaryKey, sender, tx } = await createTx(context, {
			ops: [
				{
					type: 'base32cid',
					value: 'bafybeie5gq4jxvzmsym6hjlwxej4rwdoxt7wadqvmmwbqi7r27fclha2va',
				},
			],
		})

		await expect(await context.execute(tx)).toPassExecution()

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-067').getListHex(sender.address),
		).toStrictEqual([primaryKey])

		expect(
			BEP67MsgOp.fromBinary(
				await context.state.getMultiStore().get('@bearmint/bep-067').get(primaryKey),
			).toJson(),
		).toMatchSnapshot()
	})

	it('should attach [cid] to the sender', async (context) => {
		const { primaryKey, sender, tx } = await createTx(context, {
			ops: [
				{
					type: 'cid',
					value: 'bafybeiasb5vpmaounyilfuxbd3lryvosl4yefqrfahsb2esg46q6tu6y5q',
				},
			],
		})

		await expect(await context.execute(tx)).toPassExecution()

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-067').getListHex(sender.address),
		).toStrictEqual([primaryKey])

		expect(
			BEP67MsgOp.fromBinary(
				await context.state.getMultiStore().get('@bearmint/bep-067').get(primaryKey),
			).toJson(),
		).toMatchSnapshot()
	})

	it('should attach [cid] to the sender', async (context) => {
		const { primaryKey, sender, tx } = await createTx(context, {
			ops: [
				{
					type: 'cid',
					value: 'QmYjtig7VJQ6XsnUjqqJvj7QaMcCAwtrgNdahSiFofrE7o',
				},
			],
		})

		await expect(await context.execute(tx)).toPassExecution()

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-067').getListHex(sender.address),
		).toStrictEqual([primaryKey])

		expect(
			BEP67MsgOp.fromBinary(
				await context.state.getMultiStore().get('@bearmint/bep-067').get(primaryKey),
			).toJson(),
		).toMatchSnapshot()
	})

	it('should attach [cid] to the sender', async (context) => {
		const { primaryKey, sender, tx } = await createTx(context, {
			ops: [
				{
					type: 'cid',
					value: 'zdj7WWeQ43G6JJvLWQWZpyHuAMq6uYWRjkBXFad11vE2LHhQ7',
				},
			],
		})

		await expect(await context.execute(tx)).toPassExecution()

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-067').getListHex(sender.address),
		).toStrictEqual([primaryKey])

		expect(
			BEP67MsgOp.fromBinary(
				await context.state.getMultiStore().get('@bearmint/bep-067').get(primaryKey),
			).toJson(),
		).toMatchSnapshot()
	})

	it('should attach [cidPath] to the sender', async (context) => {
		const { primaryKey, sender, tx } = await createTx(context, {
			ops: [
				{
					type: 'cidPath',
					value: 'QmYjtig7VJQ6XsnUjqqJvj7QaMcCAwtrgNdahSiFofrE7o/path/to/file',
				},
			],
		})

		await expect(await context.execute(tx)).toPassExecution()

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-067').getListHex(sender.address),
		).toStrictEqual([primaryKey])

		expect(
			BEP67MsgOp.fromBinary(
				await context.state.getMultiStore().get('@bearmint/bep-067').get(primaryKey),
			).toJson(),
		).toMatchSnapshot()
	})

	it('should attach [ipfsPath] to the sender', async (context) => {
		const { primaryKey, sender, tx } = await createTx(context, {
			ops: [
				{
					type: 'ipfsPath',
					value: '/ipfs/QmYjtig7VJQ6XsnUjqqJvj7QaMcCAwtrgNdahSiFofrE7o',
				},
			],
		})

		await expect(await context.execute(tx)).toPassExecution()

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-067').getListHex(sender.address),
		).toStrictEqual([primaryKey])

		expect(
			BEP67MsgOp.fromBinary(
				await context.state.getMultiStore().get('@bearmint/bep-067').get(primaryKey),
			).toJson(),
		).toMatchSnapshot()
	})

	it('should attach [ipfsSubdomain] to the sender', async (context) => {
		const { primaryKey, sender, tx } = await createTx(context, {
			ops: [
				{
					type: 'ipfsSubdomain',
					value:
						'http://bafybeie5gq4jxvzmsym6hjlwxej4rwdoxt7wadqvmmwbqi7r27fclha2va.ipfs.dweb.link',
				},
			],
		})

		await expect(await context.execute(tx)).toPassExecution()

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-067').getListHex(sender.address),
		).toStrictEqual([primaryKey])

		expect(
			BEP67MsgOp.fromBinary(
				await context.state.getMultiStore().get('@bearmint/bep-067').get(primaryKey),
			).toJson(),
		).toMatchSnapshot()
	})

	it('should attach [ipfsUrl] to the sender', async (context) => {
		const { primaryKey, sender, tx } = await createTx(context, {
			ops: [
				{
					type: 'ipfsUrl',
					value: 'https://ipfs.io/ipfs/QmYjtig7VJQ6XsnUjqqJvj7QaMcCAwtrgNdahSiFofrE7o',
				},
			],
		})

		await expect(await context.execute(tx)).toPassExecution()

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-067').getListHex(sender.address),
		).toStrictEqual([primaryKey])

		expect(
			BEP67MsgOp.fromBinary(
				await context.state.getMultiStore().get('@bearmint/bep-067').get(primaryKey),
			).toJson(),
		).toMatchSnapshot()
	})

	it('should attach [ipnsPath] to the sender', async (context) => {
		const { primaryKey, sender, tx } = await createTx(context, {
			ops: [
				{
					type: 'ipnsPath',
					value: '/ipns/github.com',
				},
			],
		})

		await expect(await context.execute(tx)).toPassExecution()

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-067').getListHex(sender.address),
		).toStrictEqual([primaryKey])

		expect(
			BEP67MsgOp.fromBinary(
				await context.state.getMultiStore().get('@bearmint/bep-067').get(primaryKey),
			).toJson(),
		).toMatchSnapshot()
	})

	it('should attach [ipnsSubdomain] to the sender', async (context) => {
		const { primaryKey, sender, tx } = await createTx(context, {
			ops: [
				{
					type: 'ipnsSubdomain',
					value:
						'http://bafybeiabc2xofh6tdi6vutusorpumwcikw3hf3st4ecjugo6j52f6xwc6q.ipns.dweb.link',
				},
			],
		})

		await expect(await context.execute(tx)).toPassExecution()

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-067').getListHex(sender.address),
		).toStrictEqual([primaryKey])

		expect(
			BEP67MsgOp.fromBinary(
				await context.state.getMultiStore().get('@bearmint/bep-067').get(primaryKey),
			).toJson(),
		).toMatchSnapshot()
	})

	it('should attach [ipnsUrl] to the sender', async (context) => {
		const { primaryKey, sender, tx } = await createTx(context, {
			ops: [
				{
					type: 'ipnsUrl',
					value: 'https://ipfs.io/ipns/github.com',
				},
			],
		})

		await expect(await context.execute(tx)).toPassExecution()

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-067').getListHex(sender.address),
		).toStrictEqual([primaryKey])

		expect(
			BEP67MsgOp.fromBinary(
				await context.state.getMultiStore().get('@bearmint/bep-067').get(primaryKey),
			).toJson(),
		).toMatchSnapshot()
	})

	it('should attach [multiaddr] to the sender', async (context) => {
		const { primaryKey, sender, tx } = await createTx(context, {
			ops: [
				{
					type: 'multiaddr',
					value: '/ip4/127.0.0.1/udp/1234',
				},
			],
		})

		await expect(await context.execute(tx)).toPassExecution()

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-067').getListHex(sender.address),
		).toStrictEqual([primaryKey])

		expect(
			BEP67MsgOp.fromBinary(
				await context.state.getMultiStore().get('@bearmint/bep-067').get(primaryKey),
			).toJson(),
		).toMatchSnapshot()
	})

	it('should attach [multihash] to the sender', async (context) => {
		const { primaryKey, sender, tx } = await createTx(context, {
			ops: [
				{
					type: 'multihash',
					value: 'QmYjtig7VJQ6XsnUjqqJvj7QaMcCAwtrgNdahSiFofrE7o',
				},
			],
		})

		await expect(await context.execute(tx)).toPassExecution()

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-067').getListHex(sender.address),
		).toStrictEqual([primaryKey])

		expect(
			BEP67MsgOp.fromBinary(
				await context.state.getMultiStore().get('@bearmint/bep-067').get(primaryKey),
			).toJson(),
		).toMatchSnapshot()
	})

	it('should attach [path] to the sender', async (context) => {
		const { primaryKey, sender, tx } = await createTx(context, {
			ops: [
				{
					type: 'path',
					value: '/ipfs/QmYjtig7VJQ6XsnUjqqJvj7QaMcCAwtrgNdahSiFofrE7o',
				},
			],
		})

		await expect(await context.execute(tx)).toPassExecution()

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-067').getListHex(sender.address),
		).toStrictEqual([primaryKey])

		expect(
			BEP67MsgOp.fromBinary(
				await context.state.getMultiStore().get('@bearmint/bep-067').get(primaryKey),
			).toJson(),
		).toMatchSnapshot()
	})

	it('should attach [peerMultiaddr] to the sender', async (context) => {
		const { primaryKey, sender, tx } = await createTx(context, {
			ops: [
				{
					type: 'peerMultiaddr',
					value: '/p2p/QmcgpsyWgH8Y8ajJz1Cu72KnS5uo2Aa2LpzU7kinSoooo4',
				},
			],
		})

		await expect(await context.execute(tx)).toPassExecution()

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-067').getListHex(sender.address),
		).toStrictEqual([primaryKey])

		expect(
			BEP67MsgOp.fromBinary(
				await context.state.getMultiStore().get('@bearmint/bep-067').get(primaryKey),
			).toJson(),
		).toMatchSnapshot()
	})

	it('should attach [subdomain] to the sender', async (context) => {
		const { primaryKey, sender, tx } = await createTx(context, {
			ops: [
				{
					type: 'subdomain',
					value:
						'http://bafybeie5gq4jxvzmsym6hjlwxej4rwdoxt7wadqvmmwbqi7r27fclha2va.ipfs.dweb.link',
				},
			],
		})

		await expect(await context.execute(tx)).toPassExecution()

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-067').getListHex(sender.address),
		).toStrictEqual([primaryKey])

		expect(
			BEP67MsgOp.fromBinary(
				await context.state.getMultiStore().get('@bearmint/bep-067').get(primaryKey),
			).toJson(),
		).toMatchSnapshot()
	})

	it('should attach [url] to the sender', async (context) => {
		const { primaryKey, sender, tx } = await createTx(context, {
			ops: [
				{
					type: 'url',
					value: 'https://ipfs.io/ipfs/QmYjtig7VJQ6XsnUjqqJvj7QaMcCAwtrgNdahSiFofrE7o',
				},
			],
		})

		await expect(await context.execute(tx)).toPassExecution()

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-067').getListHex(sender.address),
		).toStrictEqual([primaryKey])

		expect(
			BEP67MsgOp.fromBinary(
				await context.state.getMultiStore().get('@bearmint/bep-067').get(primaryKey),
			).toJson(),
		).toMatchSnapshot()
	})

	it('should attach [urlOrPath] to the sender', async (context) => {
		const { primaryKey, sender, tx } = await createTx(context, {
			ops: [
				{
					type: 'urlOrPath',
					value:
						'https://bafybeie5gq4jxvzmsym6hjlwxej4rwdoxt7wadqvmmwbqi7r27fclha2va.ipfs.dweb.link',
				},
			],
		})

		await expect(await context.execute(tx)).toPassExecution()

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-067').getListHex(sender.address),
		).toStrictEqual([primaryKey])

		expect(
			BEP67MsgOp.fromBinary(
				await context.state.getMultiStore().get('@bearmint/bep-067').get(primaryKey),
			).toJson(),
		).toMatchSnapshot()
	})
})
