const fs = require('fs')
let passwords = fs.readFileSync('passwords.txt').toString().split(/\n/)
console.log(passwords[1])