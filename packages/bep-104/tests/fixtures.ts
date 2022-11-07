import { milestone } from '@bearmint/bep-006'

export const MILESTONE = {
	...milestone,
	parameters: {
		...milestone.parameters,
		modules: {
			mandatory: {
				...milestone.parameters.modules.mandatory,
				'@bearmint/bep-088': {
					'*': {
						count: {
							validators: {
								max: 1,
								min: 1,
							},
						},
						mode: 'standard',
						range: {
							power: {
								max: 0,
								min: 1,
							},
						},
					},
				},
				'@bearmint/bep-104': {
					'*': {
						byteLength: {
							memo: {
								max: 256,
								min: 1,
							},
						},
						count: {
							ops: {
								max: 2,
								min: 1,
							},
							stakes: {
								max: 0,
								min: 0,
							},
						},
						range: {
							stake: {
								max: 0,
								min: 0,
							},
						},
					},
				},
			},
		},
	},
}
