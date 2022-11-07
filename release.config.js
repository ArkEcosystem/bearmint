module.exports = {
	branches: [
		{ channel: 'latest', name: 'main', prerelease: false },
		// { channel: 'next', name: 'next', prerelease: true },
	],
	plugins: [
		[
			'@semantic-release/commit-analyzer',
			{
				releaseRules: [
					// Generic
					{ breaking: true, release: 'major' },
					{ release: 'patch', revert: true },
					// Conventional Commits
					{ release: 'major', type: 'deprecate' },
					{ release: 'major', type: 'remove' },
					{ release: 'minor', type: 'change' },
					{ release: 'minor', type: 'feat' },
					{ release: 'patch', type: 'fix' },
					{ release: 'patch', type: 'perf' },
					{ release: 'patch', type: 'refactor' },
					{ release: 'patch', type: 'security' },
				],
			},
		],
		'@semantic-release/release-notes-generator',
		'@semantic-release/changelog',
		'@semantic-release/npm',
		'@semantic-release/github',
		['@semantic-release/git', { message: 'chore(release): ${nextRelease.version} [skip ci]' }],
	],
	preset: 'conventionalcommits',
}
