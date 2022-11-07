import type { Options, Scope } from 'nock'
// @ts-expect-error
import base from 'nock'

export const nock = {
	cleanAll: base.cleanAll,
	disableNetConnect: base.disableNetConnect,
	enableNetConnect: base.enableNetConnect,
	fake: (basePath?: string | RegExp, options?: Options): Scope => base(basePath ?? /.+/, options),
}
