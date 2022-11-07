## What Is Bearmint?

**Bearmint** is a Blockchain Framework that is developed on top of and interacts with [Tendermint](https://tendermint.com/) via its [Application Blockchain Interface](https://docs.tendermint.com/master/spec/abci/) to facilitate the application's lifecycle. Bearmint is responsible for handling state management and persistence. The onus is thus on the developer to implement the various transactions that manipulate this state. Its primary purpose is to remove some of the major roadblocks to Blockchain development, thus making it less intimidating and time-consuming for developers.

Please see our [official documentation](https://bep.dev/) to learn more about what Bearmint is including the motivation behind it and its goals. Both here and on GitHub you will find various tutorials as well as any and all release notes.

## Releases

**Please do not set `main` as your production branch - instead we ask that you make use of [releases](https://github.com/bearmint/bearmint/releases) instead.**

We treat `main` as our development branch. It typically changes several times per day. Stability is only achieved once a given milestone is reached - we will then proceed to tag a release for the milestone in question and publish it to the NPM registry.

## Modules

Bearmint is made up of hundreds of modules, each of which is assigned a numerical BEP value that functions as the package name. For example, the implementation of [BEP-055](https://bep.dev/055) corresponds with [bep-055](https://github.com/bearmint/bearmint/tree/main/packages/bep-055) on GitHub and [@bearmint/bep-055](#) on NPM.

A complete list of BEPs is available [here](./MODULES.md). Note that any BEPs with an existing implementation link to the corresponding implementation located within the specification documentation.

## Security

If you discover a security vulnerability within this package, please send an e-mail to security@bearmint.com. All security vulnerabilities will be promptly addressed.

## Contributing

Thank you for your interest in this project - we really appreciate that you would like to contribute towards its development! Your input is crucial in ensuring that we maintain a high standard at all times. It is only because of the individuals who actively [contribute](../../contributors) that this project exists at all. Bear in mind that we [release](https://github.com/bearmint/bearmint/releases) all project contributions to the public under our [official license](LICENSE).

Please note that this project is released with a [Code of Conduct](https://bep.dev/contribution-guide/#contributor-covenant-code-of-conduct) and [Contribution Guide](https://bep.dev/headquarters/contribution-guide). Therefore, by participating in this project, you fully consent to abide by their terms and provisions.

Please report any violations of the CoC by sending a message to: opensource@bearmint.com.

### Submitting a Pull Request

1. [Fork](https://github.com/bearmint/bearmint/fork) and clone the repository
2. Create a new branch: `git checkout -b my-branch-name`
3. Make your changes
4. Push to your fork and [submit a pull request](https://github.com/bearmint/bearmint/compare)
5. Please wait patiently for an authorized party to review and merge your pull request

## License

Bearmint is open-source software licensed under the [MIT License](LICENSE).
