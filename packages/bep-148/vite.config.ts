// eslint-disable-next-line n/no-extraneous-import
import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		coverage: {
			provider: 'c8',
			reporter: ['text', 'json', 'html'],
		},
		passWithNoTests: true,
		testTimeout: 60_000,
	},
})
