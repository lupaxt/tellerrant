Install the dependencies...

```bash
yarn
```

...then start [Rollup](https://rollupjs.org):
yarn start
```

Navigate to [localhost:5000](http://localhost:5000).
## Build and Package

### Compiles and minifies for production

Update `public/manifest.json` version and then run:

```
yarn build
```

Command will generate a build to `public/`, remove source map files and it's ready to be deployed. `app/` folder is a snapshot build for current version.

### Lint and fix files

```
yarn eslint
```

### Unit test with Jest

```js
yarn test