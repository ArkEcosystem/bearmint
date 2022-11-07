import type {
	Cradle,
	FunctionReturning,
	KeyPairFactory,
	PrivateKeyFactory,
	PublicKeyFactory,
	ServiceProvider,
	SignatureFactory,
} from '@bearmint/bep-013'
import { ContainerType } from '@bearmint/bep-013'
import { makeServiceProviderSkeleton } from '@bearmint/bep-016'
import { getModuleMilestone } from '@bearmint/bep-021'

export interface CryptoStrategy {
	makeKeyPairFactory: FunctionReturning<KeyPairFactory>
	makePrivateKeyFactory: FunctionReturning<PrivateKeyFactory>
	makePublicKeyFactory: FunctionReturning<PublicKeyFactory>
	makeSignatureFactory: FunctionReturning<SignatureFactory>
}

export function makeServiceProvider(cradle: Pick<Cradle, 'Container'>): ServiceProvider {
	function getStrategy(ctx: Cradle) {
		return ctx.StrategyRegistry.get<CryptoStrategy>(
			'@bearmint/bep-030',
			getModuleMilestone<{ strategy: string }>(
				ctx.ServiceProviderRepository,
				ctx.CommittedState,
				'@bearmint/bep-030',
			).strategy,
		)
	}

	return {
		...makeServiceProviderSkeleton(import.meta.url),
		async register() {
			cradle.Container.bindFunction(ContainerType.KeyPairFactory, (ctx: Cradle) =>
				ctx.Container.build(getStrategy(ctx).makeKeyPairFactory),
			)

			cradle.Container.bindFunction(ContainerType.PrivateKeyFactory, (ctx: Cradle) =>
				ctx.Container.build(getStrategy(ctx).makePrivateKeyFactory),
			)

			cradle.Container.bindFunction(ContainerType.PublicKeyFactory, (ctx: Cradle) =>
				ctx.Container.build(getStrategy(ctx).makePublicKeyFactory),
			)

			cradle.Container.bindFunction(ContainerType.SignatureFactory, (ctx: Cradle) =>
				ctx.Container.build(getStrategy(ctx).makeSignatureFactory),
			)
		},
	}
}
