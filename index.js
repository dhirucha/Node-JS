const path = require("path");

console.log(path.sep)

console.log(process.env.PATH)

console.log(path.delimiter)

const currentFilePath = __filename
console.log(currentFilePath)

let result = path.basename(currentFilePath)
console.log(result)

let baseName = path.basename(currentFilePath)
console.log('basename >',baseName)

let baseNameWithoutExt = path.basename(currentFilePath,'.js')
console.log('basename without extension >',baseNameWithoutExt)

let dirName = path.dirname(currentFilePath)
console.log('dirName >',dirName)

