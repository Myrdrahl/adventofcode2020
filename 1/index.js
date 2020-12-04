const fs = require('fs')
const { parse } = require('path')
const readline = require('readline')
let expenses = []

function checkFor2020(expenses) {
    // console.log(expenses) array er kommet inn hit også!
    expenses.forEach(element => {
        let rest = (2020 - element)
        //console.log(typeof(element))
        //console.log(typeof(rest))
        //console.log("Element: ", element)
        //console.log("Rest: ", rest)
        expenses.includes(rest) ? console.log("Winning: ",element ,rest) : console.log("Not the one")
        
    })
}


async function processLines() {
    const fileStream = fs.createReadStream('expenses.txt')

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    })
    for await (let line of rl) {
        //console.log(line)
        line = parseInt(line)
        expenses.push(line)
    }
    //console.log(expenses) array er komplett
    checkFor2020(expenses)
}

processLines()

