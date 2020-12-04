const fs = require('fs')
const readline = require('readline')
let expenses = []

function checkFor2020(expenses) {
    expenses.forEach(element => {
        let rest = (2020 - element)

        expenses.includes(rest) ? console.log("Winning: ", (element * rest)) : null
        
    })
}


async function processLines() {
    const fileStream = fs.createReadStream('expenses.txt')

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    })
    for await (let line of rl) {
      
        line = parseInt(line)
        expenses.push(line)
    }
  
    checkFor2020(expenses)
}

processLines()