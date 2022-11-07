import { defineConfig } from 'tsup'

export default defineConfig({
	clean: true,
	dts: true,
	entry: ['source/index.ts'],
	format: 'esm',
	outDir: 'distribution',
	sourcemap: true,
	target: 'es2022',
})
