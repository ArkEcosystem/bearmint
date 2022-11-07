import type { Account, AddressFactory, KeyPairFactory, Milestones, Tx } from '@bearmint/bep-013'
import type { params, PlainMessage } from '@bearmint/bep-018'

export interface GenesisOptions {
	appState?: object
	distributeInitialSupply?: boolean
	genesis: {
		chainId: string
		consensusParameters: PlainMessage<params.ConsensusParams>
		genesisTime: string | number
		keyPairType: 'ed25519' | 'secp256k1'
	}
	milestones: Milestones
	entities: {
		accounts: number
		nodes: number
		validators: number
	}
	services: {
		addressFactory: AddressFactory
		keyPairFactory: KeyPairFactory
	}
	state: {
		accounts?: Account[]
		initialSupply: string
		txs?: Tx[]
	}
}
