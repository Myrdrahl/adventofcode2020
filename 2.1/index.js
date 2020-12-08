const fs = require('fs')
let passwords = fs.readFileSync('passwords.txt').toString().split(/\n/)
//console.log(passwords[999])
let valid = 0
//
for (let i = 0; i < passwords.length; i++){
    let stuff = passwords[i].split(' ')
    let highandlow = stuff[0].split('-')
    firstPos = parseInt(highandlow[0])-1
    secondPos = parseInt(highandlow[1])-1
    letter = stuff[1].replace(':','')
    //console.log(stuff[2])
    //console.log(firstPos, stuff[2].charAt(firstPos))
    //console.log(secondPos, stuff[2].charAt(secondPos))
    stuff[2].charAt(firstPos) === letter || stuff[2].charAt(secondPos) === letter ? valid++ : null
}
console.log(valid)