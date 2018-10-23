const path = require('path')
const globby = require('globby')
const flatten = require('arr-flatten')

module.exports = bsconfig => {
  return Promise.all(bsconfig.sources.map(source =>
      source.files ?
        Promise.resolve(source.files.map(file => path.join(process.cwd(), source.dir, file))) :
        globby([path.join(process.cwd(), source.dir, '*.ml')]) 
    ))
    .then(flatten)
}
