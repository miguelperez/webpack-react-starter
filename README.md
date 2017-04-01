# Starter Pack

This starter pack helps as a plug and play development environment.

It comes bundled will some libraries to help you start developing your application right
away.

It generates the project files under `dist` directory.

```json
{
  "name": "webpack-react-starter",
  "version": "1.0.0",
  "description": "Simple starter application for my development with react and webpack.",
  "main": "index.js",
  "scripts": {
    "start": "webpack-dev-server",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "webpack",
    "react",
    "starter",
    "pack"
  ],
  "author": "Miguel Perez",
  "license": "ISC",
  "devDependencies": {
    "babel-core": "^6.24.0",
    "babel-loader": "^6.4.1",
    "babel-preset-env": "^1.3.2",
    "html-webpack-plugin": "^2.28.0",
    "webpack": "^2.3.2",
    "webpack-dev-server": "2.4.2"
  }
}
```

## Development libraries

Write es6 and transpile it to es5, inlcude a dev-server for rapid prototyping.

  - babel-core
  - babel-preset-env
  - babel-loader
  - html-webpack-plugin
