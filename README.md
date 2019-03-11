# bs-source-files

[![Build Status](https://travis-ci.org/Risto-Stevcev/bs-source-files.svg?branch=master)](https://travis-ci.org/Risto-Stevcev/bs-source-files)
[![Latest release](https://img.shields.io/npm/v/@ristostevcev/bs-source-files.svg?style=flat)](https://www.npmjs.com/package/@ristostevcev/bs-source-files)
[![License](https://img.shields.io/npm/l/@ristostevcev/bs-source-files.svg?style=flat)](https://github.com/Risto-Stevcev/bs-source-files/blob/master/LICENSE)

Fetches the list of source files from a bucklescript project

## Installation

```sh
npm install --save bs-source-files
```

## Usage

Assuming `process.cwd()` points to the root directory of your bucklescript project:

```js
const bsFiles = require('bs-source-files')
const bsconfig = require('./bsconfig.json')

bsFiles(bsconfig).then(console.log)
``` 

## License

See LICENSE
