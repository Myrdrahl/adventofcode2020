const fs = require('fs')
let passwords = fs.readFileSync('passwords.txt').toString().split(/\n/)
//console.log(passwords[999])
let valid = 0

for (let i = 0; i < passwords.length; i++){
    let stuff = passwords[i].split(' ')
    let highandlow = stuff[0].split('-')
    highandlow[0] = parseInt(highandlow[0])
    highandlow[1] = parseInt(highandlow[1])
    stuff[1] = stuff[1].replace(':','')
    //console.log(stuff[1])
    //console.log(stuff[2])
    var count = stuff[2].split(stuff[1]).length-1
    //console.log(count)
    count >= highandlow[0] && count <= highandlow[1] ? valid++ : null
}
console.log(valid)