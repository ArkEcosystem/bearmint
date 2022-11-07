import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import { makeStrategy } from '../../source/strategy.js'

describe('Milestone - Height Strategy', () => {
	it('should create a strategy and execute it', async () => {
		expect(
			await makeStrategy({
				ApplicationManifest: {
					semanticVersion: '2.5.0',
				},
			}).execute(BigInt(4), {
				'*': {
					blockNumber: 1,
					milestones: [
						{
							applicationParameters: {
								key1: '1-key1',
								key2: '1-key2',
							},
							blockNumber: 1,
						},
						{
							applicationParameters: {
								key2: '2-key2',
							},
							blockNumber: 2,
						},
						{
							applicationParameters: {
								key1: '3-key1',
							},
							blockNumber: 3,
						},
					],
				},
				'>=2.0.0': {
					blockNumber: 3,
					milestones: [
						{
							applicationParameters: {
								key1: '4-key1',
							},
							blockNumber: 4,
						},
					],
				},
				// This won't be activated because the semanticVersion matches but not the activation blockNumber
				'>=2.3.0': {
					blockNumber: 5,
					milestones: [
						{
							applicationParameters: {
								key1: '5-key1',
							},
							blockNumber: 4,
						},
					],
				},
			}),
		).toStrictEqual([
			{
				applicationParameters: {
					key1: '1-key1',
					key2: '1-key2',
				},
				blockNumber: 1,
			},
			{
				applicationParameters: {
					key2: '2-key2',
				},
				blockNumber: 2,
			},
			{
				applicationParameters: {
					key1: '3-key1',
				},
				blockNumber: 3,
			},
			{
				applicationParameters: {
					key1: '4-key1',
				},
				blockNumber: 4,
			},
		])
	})
})
