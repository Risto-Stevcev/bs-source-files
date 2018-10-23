const path = require('path')
const test = require('tape')
const bsfiles = require('.')
const bsconfig = require('./test/bsconfig.json')

test('get list of files from bsconfig.json', t => {
  bsfiles(bsconfig)
    .then(files => {
      t.deepEqual(
        files,
        ['./src/Result.ml', './src/Query.ml', './src/Pool.ml', './src/Client.ml'].map(file => path.join(__dirname, file))
      )
      t.end()
    })
})
