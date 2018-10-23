# bs-source-files

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
