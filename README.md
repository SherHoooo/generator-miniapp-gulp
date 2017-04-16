# generator-miniapp-gulp
> A simple generator for building wechat-miniapp with gulp

# About
Generator-miniapp-gulp will help you build new Wechat-miniapp projects using gulp.

Out of the box it comes with support for:
- Gulp
- ES2015 via Babel-Loader
- Different supported style languages (sass, scss, less, stylus)
- Automatic code linting via esLint
- Automatic complie

## Installation

First, install [Yeoman](http://yeoman.io) and generator-sherhootest using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-miniapp-gulp
```

Then generate your new Wechat-miniapp project:

```bash

yo miniapp-gulp
```
## Code & Build

```bash
# when your souce file changes, it will automatically compile to be wxml & wxss
gulp watch

# complie your souce file
gulp build
```

## License

MIT © [夏浩]()


