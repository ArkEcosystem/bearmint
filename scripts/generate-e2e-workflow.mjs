import { writeFileSync } from 'fs'
import { join } from 'path'
import { stringify } from 'yaml'
import { dirname } from '../packages/bep-009/distribution/index.js'

const transactions = [
	'bep-055',
	'bep-056',
	'bep-057',
	'bep-058',
	'bep-059',
	'bep-064',
	'bep-065',
	'bep-066',
	'bep-067',
	'bep-068',
	'bep-104',
	'bep-110',
	'bep-126',
	'bep-127',
	'bep-128',
	'bep-129',
	'bep-130',
	'bep-131',
	'bep-132',
	'bep-133',
	'bep-134',
	'bep-135',
	'bep-136',
	'bep-137',
]

const workflow = {
	name: 'E2E',
	on: {
		push: {
			branches: ['main'],
		},
		pull_request: {
			types: ['ready_for_review', 'synchronize', 'opened'],
		},
	},
	env: {
		BM_APP: '${GITHUB_WORKSPACE}/examples/bear/app.mjs',
		BM_CLI: '${GITHUB_WORKSPACE}/packages/bep-117/bin/index.mjs',
		BM_GEN: '${GITHUB_WORKSPACE}/examples/bear/genesis-node.mjs',
		TENDER: '${GITHUB_WORKSPACE}/bin/tendermint_0.37.0-alpha.2_linux_amd64',
	},
	jobs: {},
}

for (const transaction of transactions) {
	workflow.jobs[transaction] = {
		if: 'github.event.pull_request.draft == false',
		concurrency: {
			group: '${{ github.head_ref }}-' + transaction,
			'cancel-in-progress': true,
		},
		'runs-on': 'ubuntu-latest',
		steps: [
			{
				uses: 'actions/checkout@v3',
				with: {
					'fetch-depth': 0,
					'persist-credentials': false,
					ref: '${{ github.head_ref }}',
				},
			},
			{
				uses: 'pnpm/action-setup@v2',
				with: {
					run_install: true,
					version: 'latest',
				},
			},
			{
				uses: 'actions/setup-node@v3',
				with: {
					'node-version': '18.x',
				},
			},
			{
				run: 'pnpm run build',
			},
			{
				run: 'node ${{ env.BM_GEN }}',
			},
			{
				run: 'node ${{ env.BM_APP }} &',
			},
			{
				run: '${{ env.TENDER }} start &',
			},
			{
				run: `cd packages/${transaction} && pnpm run test:e2e`,
			},
		],
	}
}

writeFileSync(
	join(dirname(import.meta.url), '..', '.github', 'workflows', 'e2e.yml'),
	stringify(workflow, { lineWidth: 120 }),
)
