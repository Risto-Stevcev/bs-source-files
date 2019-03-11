const path = require('path')
const globby = require('globby')
const flatten = require('arr-flatten')

module.exports = bsconfig => {
  const sources = bsconfig.sources instanceof Array ? bsconfig.sources : [bsconfig.sources]
  return Promise.all(sources.map(source =>
      source.files ?
        Promise.resolve(source.files.map(file => path.join(process.cwd(), source.dir, file))) :
        globby([path.join(process.cwd(), source.dir, source.subdirs ? '**' : '', '*.ml')])
    ))
    .then(flatten)
}
