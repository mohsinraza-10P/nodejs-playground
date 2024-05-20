const fs = require('fs')

const filePath = './src/util/sample.json';
const dataBuffer = fs.readFileSync(filePath)
const dataJson = dataBuffer.toString()
const data = JSON.parse(dataJson)

data.title = "My Book"
data.author = "Syed Mohsin Raza"

const newJson = JSON.stringify(data)
fs.writeFileSync(filePath, newJson)