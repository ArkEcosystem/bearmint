/* eslint-disable @typescript-eslint/naming-convention */
module.exports = {
	'*.{js,mjs,ts}': [
		'prettier --cache --ignore-unknown --write',
		'eslint --fix --config=config/eslintrc.js',
	],
	'*.json': [
		'node ./scripts/sort-package-json.mjs "package.json" "packages/*/package.json"',
		'prettier --cache --ignore-unknown --write',
	],
	'*.md': 'prettier --ignore-unknown --write',
	'*.sh': './bin/shfmt -l -w scripts',
}
