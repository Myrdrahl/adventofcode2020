const fs = require('fs')
const readline = require('readline')
let expenses = []

function checkFor2020(expenses) {
    // console.log(expenses) array er kommet inn hit også!
    expenses.forEach(element => {
        console.log(element)
        let rest = (2020 - element)
        if (expenses.includes(rest)) {
            console.log("Winning: " , element , rest)
        }
    })
}


async function processLines() {
    const fileStream = fs.createReadStream('expenses.txt')

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    })
    for await (const line of rl) {
        //console.log(line)
        expenses.push(line)
    }
    // console.log(expenses) array er komplett
    checkFor2020(expenses)
}

processLines()

