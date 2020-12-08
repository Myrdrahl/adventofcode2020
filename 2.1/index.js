const fs = require('fs')
let passwords = fs.readFileSync('passwords.txt').toString().split(/\n/)
//console.log(passwords[999])
let valid = 0
//
for (let i = 0; i < passwords.length; i++){
    let stuff = passwords[i].split(' ')
    let highandlow = stuff[0].split('-')
    highandlow[0] = parseInt(highandlow[0])+1
    highandlow[1] = parseInt(highandlow[1])+1
    stuff[1] = stuff[1].replace(':','')
    stuff[2].charAt((highandlow[0])) == stuff[1] || stuff[2].charAt((highandlow[1])) == stuff[1] ? valid++ : null
}
console.log(valid)