## What Is Bearmint?

> **Warning**
> Bearmint is an experimental product and should only be used for testing purposes. It is not intended for use in production environments and should be used at your own risk.

**Bearmint** is a Blockchain Framework that is developed on top of and interacts with [Tendermint](https://tendermint.com/) via its [Application Blockchain Interface](https://docs.tendermint.com/master/spec/abci/) to facilitate the application's lifecycle. Bearmint is responsible for handling state management and persistence. The onus is thus on the developer to implement the various transactions that manipulate this state. Its primary purpose is to remove some of the major roadblocks to Blockchain development, thus making it less intimidating and time-consuming for developers.

## Releases

**Please do not set `main` as your production branch - instead we ask that you make use of [releases](https://github.com/arkecosystem/bearmint/releases) instead.**

We treat `main` as our development branch. It typically changes several times per day. Stability is only achieved once a given milestone is reached - we will then proceed to tag a release for the milestone in question and publish it to the NPM registry.

## Modules

Bearmint is made up of hundreds of modules, each of which is assigned a numerical BEP value that functions as the package name. For example, the implementation of BEP-055 corresponds with [bep-055](https://github.com/arkecosystem/bearmint/tree/main/packages/bep-055) on GitHub and [@bearmint/bep-055](#) on NPM.

A complete list of BEPs is available [here](./MODULES.md). Note that any BEPs with an existing implementation link to the corresponding implementation located within the specification documentation.

## Security

If you discover a security vulnerability within this package, please send an e-mail to security@ark.io. All security vulnerabilities will be promptly addressed.

## Contributing

Thank you for your interest in this project - we really appreciate that you would like to contribute towards its development! Your input is crucial in ensuring that we maintain a high standard at all times. It is only because of the individuals who actively [contribute](../../contributors) that this project exists at all. Bear in mind that we [release](https://github.com/arkecosystem/bearmint/releases) all project contributions to the public under our [official license](LICENSE).

Please note that this project is released with a [Code of Conduct](https://ark.dev/docs/program-incentives/guidelines/code-of-conduct) and [Contribution Guide](https://ark.dev/docs/program-incentives/guidelines/contributing). Therefore, by participating in this project, you fully consent to abide by their terms and provisions.

### Submitting a Pull Request

1. [Fork](https://github.com/arkecosystem/bearmint/fork) and clone the repository
2. Create a new branch: `git checkout -b my-branch-name`
3. Make your changes
4. Push to your fork and [submit a pull request](https://github.com/arkecosystem/bearmint/compare)
5. Please wait patiently for an authorized party to review and merge your pull request

## AS-IS Clause

BEARMINT is provided "AS-IS" and without any warranty of any kind, whether express, implied or statutory, including but not limited to the warranties of merchantability, fitness for a particular purpose, and non-infringement. The entire risk as to the quality and performance of BEARMINT is with you. Should BEARMINT prove defective, you assume the cost of all necessary servicing, repair, or correction.

In no event shall the author of BEARMINT be liable to you or any third parties for any damages arising out of or in connection with the use or inability to use BEARMINT, including but not limited to damages for loss of profits, business interruption, or loss of data, even if the author of BEARMINT has been advised of the possibility of such damages.

By using BEARMINT, you agree to indemnify and hold harmless the author of BEARMINT and any contributors to BEARMINT from and against any claims, actions, or demands, including without limitation reasonable legal and accounting fees, arising from or related to your use of BEARMINT or your violation of these terms and conditions.

## License

Bearmint is open-source software licensed under the [MIT License](LICENSE).
