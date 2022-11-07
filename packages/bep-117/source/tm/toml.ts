/* eslint-disable security/detect-non-literal-regexp */
import { file, Paths, regexReplace } from '@bearmint/bep-009'
import type { JsonMap } from '@iarna/toml'
import { parse, stringify } from '@iarna/toml'

export function readConfig(): Record<string, any> {
	return parse(file.read(Paths.TM_PATH_CONF_CONFIG))
}

export function writeConfig(config: JsonMap) {
	file.write(Paths.TM_PATH_CONF_CONFIG, stringify(config))
}

export function modifyConfig(
	values: Record<
		string,
		string | boolean | number | { search: RegExp; replace: string } | string[]
	>,
) {
	let data = file.read(Paths.TM_PATH_CONF_CONFIG)

	for (const [key, value] of Object.entries(values)) {
		if (Array.isArray(value)) {
			data = data.replace(new RegExp(`^${key}(.*)`, 'gm'), `${key} = ${JSON.stringify(value)}`)
		} else if (typeof value === 'object') {
			data = regexReplace(data, value.search, value.replace)
		} else {
			data = regexReplace(
				data,
				new RegExp(`^${key}(.*)`, 'gm'),
				// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
				typeof value === 'string' ? `${key} = "${value}"` : `${key} = ${value}`,
			)
		}
	}

	file.write(Paths.TM_PATH_CONF_CONFIG, data)
}
