const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./test1.txt', 'utf8')
const second = readFileSync('./test2.txt', 'utf8')

//console.log(first, second)
writeFileSync('./test3.txt', 'hello !!!', {flag:'a'})