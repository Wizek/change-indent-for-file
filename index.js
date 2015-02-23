var changeIndent = require('change-indent')
var fs = require('fs')

function changeIndentForFile (fileName, size) {
  var fileAsString = fs.readFileSync(fileName).toString()
  var changedFile = changeIndent(fileAsString, size)
  fs.writeFileSync(fileName, changedFile)
}

exports = changeIndentForFile
