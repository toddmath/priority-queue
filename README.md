# Priority Queue

This is a basic, working implementation of a priority queue, written in Typescript. **Not made for production**, I mainly
wrote this as an exercise and for practice. Feel free to check it out, copy it, or
whatever.

> If you’re new to TypeScript, checkout [this handy cheatsheet](https://devhints.io/typescript)
> This was scaffolded with [TSDX][tsdx]

## Commands

The only file in this library is `/src/index.ts`.

To run:

```bash
npm start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

To build once:

```bash
npm run build ## or yarn build
```

To test:

```bash
npm test ## or yarn test
```

## Configuration

Code quality is set up for you with `prettier`, `husky`, and `lint-staged`. Adjust the respective fields in `package.json` accordingly.

### Jest

All test files are inside `/test`.

To run tests with Jest:

```bash
npm test ## or yarn test
```

### Bundle Analysis

[`size-limit`](https://github.com/ai/size-limit) is set up to calculate the real cost of your library with `npm run size` and visualize the bundle with `npm run analyze`.

### Rollup

[TSDX][tsdx] uses [Rollup](https://rollupjs.org) as a bundler and generates multiple rollup configs for various module formats and build settings. See [Optimizations](#optimizations) for details.

### TypeScript

`tsconfig.json` is set up to interpret `dom` and `esnext` types, as well as `react` for `jsx`. Adjust according to your needs.

## Continuous Integration

### GitHub Actions

Two actions are included:

- `main` which installs deps w/ cache, lints, tests, and builds on all pushes against a Node and OS matrix
- `size` which comments cost comparison of your library on every pull request using [`size-limit`](https://github.com/ai/size-limit)

## Module Formats

CJS, ESModules, and UMD module formats are supported.

The appropriate paths are configured in `package.json` and `dist/index.js` accordingly. Please report if any issues are found.

[tsdx]: <https://tsdx.io/>
