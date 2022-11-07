SHELL := bash
.ONESHELL:
.SHELLFLAGS := -eu -o pipefail -c
.DELETE_ON_ERROR:
MAKEFLAGS += --warn-undefined-variables
MAKEFLAGS += --no-builtin-rules

ifeq ($(origin .RECIPEPREFIX), undefined)
  $(error This Make does not support .RECIPEPREFIX. Please use GNU Make 4.0 or later)
endif
.RECIPEPREFIX = >

ESLINT=./node_modules/eslint/bin/eslint.js
NPM_CHECK_UPDATES=./node_modules/npm-check-updates/build/src/bin/cli.js
PRETTIER=./node_modules/prettier/bin-prettier.js
SEMANTIC_RELEASE=./node_modules/semantic-release/bin/semantic-release.js
SORT_PACKAGE_JSON=./node_modules/sort-package-json/cli.js
TURBO=./node_modules/turbo/bin/turbo
CUB=./packages/bep-117/bin/index.mjs
CHANGESET=./node_modules/@changesets/cli/bin.js

################################################################################
##### Generic ##################################################################
################################################################################

all: clean build format test
.PHONY: all

audit:
> ${TURBO} run audit
.PHONY: audit

bench:
> ${TURBO} run bench
.PHONY: bench

build:
> pnpm install
> ${TURBO} run build --force
.PHONY: build

changeset:
> ${CHANGESET}
.PHONY: changeset

clean:
> ${TURBO} run clean
.PHONY: clean

cloc:
> npx cloc packages
.PHONY: cloc

deps:
> ${NPM_CHECK_UPDATES} -u --target=latest
> ${TURBO} run deps:major
> pnpm i
.PHONY: deps

deps_commit: deps
> pnpm i
> git add -A
> git commit -s -m "chore: update dependencies" --no-verify
> git push
.PHONY: deps_commit

deps_list:
> node scripts/list-external-dependencies.mjs
.PHONY: deps

deps_check: build
> ${TURBO} run depcheck
.PHONY: deps_check

deps_check_dry:
> ${TURBO} run depcheck
.PHONY: deps_check

docs: build
> ${TURBO} run docs
> git add -A
> git commit -s -m "chore: rebuild documentation" --no-verify
> git push
.PHONY: docs

format_dry: prettier lint_root lint sort
> ${TURBO} run proto:format
.PHONY: format

format: format_dry
> git add -A
> git commit -s -m "style: resolve style guide violations" --no-verify
> git push
.PHONY: format

generate_smoke_workflow:
> node scripts/generate-smoke-workflow.js
> ${PRETTIER} --write "./**/*.yml"
.PHONY: generate_smoke_workflow

lint:
> ${TURBO} run lint
.PHONY: lint

lint_root:
> ${ESLINT} 'examples/**/*.mjs' --format=codeframe --config=config/eslintrc.js --fix
.PHONY: lint_root

prettier:
> ${PRETTIER} --cache --write "./**/*.{js,json,md,mjs,ts,yaml,yml}"
.PHONY: prettier

release: sanity
> ${CHANGESET} version
> ${CHANGESET} publish
.PHONY: release

sanity: build format_dry test
.PHONY: sanity

semantic_release:
> ${SEMANTIC_RELEASE}
.PHONY: semantic_release

snapshots: build
> rm -rf packages/**/snapshots
> make test
.PHONY: sort

sort:
> node scripts/sort-package-json.mjs "package.json" "packages/*/package.json"
.PHONY: sort

test:
> ${TURBO} run test
.PHONY: test

test_coverage:
> ${TURBO} run test:coverage
.PHONY: test_coverage

test_coverage_report:
> ${TURBO} run test:coverage:report
.PHONY: test_coverage_report
