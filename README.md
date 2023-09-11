# Charity Finder

Easily search for charities in the city.

## Prerequisite

- [Node.js v20](https://nodejs.org)
- [Yarn](https://yarnpkg.com)
- Public API key from [every.org](https://www.every.org/charity-api)

## Quick Start

Copy and edit public API key from every.org:

```sh
cp .env.example .env
# Modify the environment variables
```

Install dependencies:

```sh
yarn install
```

Start development server:

```sh
yarn dev
```

Linting and Styling:

```sh
yarn lint
yarn format
yarn format-check
```

Build production code to `./dist`:

```sh
yarn build
```

## License

This project is [MIT licensed](./LICENSE).
