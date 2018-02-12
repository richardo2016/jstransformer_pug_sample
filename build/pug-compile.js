var fs = require('fs')
var path = require('path')
var pug = require('pug')

var rootDir = path.join(__dirname, '../dist')
var sourceDir = path.join(__dirname, '../src')
var fileNameList = fs.readdirSync(sourceDir)

fileNameList.forEach(function (filename, index) {
  if (filename.indexOf('_') === 0 || filename.indexOf('.pug') === -1) {
    return
  }
  const pugFilePath = path.join(sourceDir, filename)
  const compiledHtml = pug.renderFile(pugFilePath, {
    pretty: true
  })
  const htmlFilePath = path.join(rootDir, filename.replace('.pug', '.html'))
  fs.writeFileSync(htmlFilePath, compiledHtml)
})
