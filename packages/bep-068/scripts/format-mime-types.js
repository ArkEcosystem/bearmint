const { realpath, unlinkSync, writeFileSync } = require('fs')
const { join } = require('path')

const mimeTypes = join(makeServiceProviderSkeleton(import.meta.url), '../source/mime-types.json')

writeFileSync(
	join(makeServiceProviderSkeleton(import.meta.url), '../source/mime-types.ts'),
	`export const mimeTypes = ${JSON.stringify(Object.keys(require(mimeTypes)), undefined, 4)};`,
)

unlinkSync(mimeTypes)
