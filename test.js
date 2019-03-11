const path = require('path')
const test = require('tape')
const bsfiles = require('.')
const bsconfig = require('./test/bsconfig.json')

// Change cwd to the test folder
process.chdir('./test')

test('get list of files from bsconfig.json', t => {
  bsfiles(bsconfig)
    .then(files => {
      t.deepEqual(
        new Set(files),
        new Set([
          'src/Client.ml', 'src/Pool.ml', 'src/Query.ml', 'src/Result.ml',
          'src/foo/Foobar.ml', 'test/Test_Helpers.ml', 'test/Test_Postgres.ml',
        ].map(file => path.join(__dirname, 'test', file)))
      )
      t.end()
    })
})
