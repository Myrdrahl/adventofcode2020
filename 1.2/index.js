const fs = require('fs')
let expenses = fs.readFileSync('expenses.txt').toString().split(/\n/).map(s => parseInt(s, 10))
//console.log(expenses)

const reward = 2020

for (let i = 0; i < expenses.length; i++) {
    for (let j = i + 1; j < expenses.length; j++) {
        for (let k = j + 1; k < expenses.length; k++) {
            expenses[i]+expenses[j]+expenses[k] == reward ? console.log(expenses[i]*expenses[j]*expenses[k]) : null
        }
    }
}

