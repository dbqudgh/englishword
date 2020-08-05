const fs = require('fs')
const  word = fs.readFileSync('./string.txt').toString().split("\n");

module.exports ={
    word
}