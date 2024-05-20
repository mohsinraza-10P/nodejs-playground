const fs = require('fs')

const book = {
    title: 'Ego is the Enemy',
    author: 'Tyan Holiday'
}

const bookJson = JSON.stringify(book)
fs.writeFileSync('./src/util/sample.json', bookJson)

// console.log(bookJson)

// const parsedBook = JSON.parse(bookJson)
// console.log(parsedBook.author)