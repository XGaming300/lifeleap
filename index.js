//SERVER
const express = require('express')
const cors = require('cors');

const app = express()
app.use(cors())
const port = 6969;
app.use(express.json());
console.log('Server started at http://localhost:6969');

let chanceOfSurvival;
let addChildren;
let currentTotalPopulation = 100;
let totalDead = 0;
let totalBorn = 0;
function start(totalPoulation, food, water, temp) {
    // chanceOfSurvival = (food + water + temp + 1);

    // if ((food + water + temp) / 3 < 6) {
    //     addChildren = totalPoulation * 0.1
    // } else {
    //     addChildren = totalPoulation * 0.2
    // }

    currentTotalPopulation = totalPoulation;
}

// function yearsAdded(num) {
//     let oldPopulation = currentTotalPopulation;
//     for (let i = 0; i < num; i++) {
//         let random = Math.floor(Math.random() * 10);
//         if (random > chanceOfSurvival) {
//             currentTotalPopulation -= currentTotalPopulation * 0.05
//         } else {
//             currentTotalPopulation -= currentTotalPopulation * 0.3
//         }
//     }
//     console.log(currentTotalPopulation)

//     totalDead = oldPopulation - currentTotalPopulation;
//     populationAfterDeath = currentTotalPopulation;
//     console.log(totalDead)


//     for (let i = 0; i < num; i++) {
//         currentTotalPopulation += addChildren * Math.random()
//         console.log(currentTotalPopulation)

//     }
//     totalBorn = currentTotalPopulation - populationAfterDeath

//     let results = [currentTotalPopulation, totalBorn.toString(), totalDead.toString()]
//     console.log(results)

//     return results
// }

async function yearsAdded(num, totalPopulation) {
    currentTotalPopulation = totalPopulation;
    console.log(currentTotalPopulation)
    for (let i = 0; i < num; i++) {
        totalBorn += 500;
        totalDead += 100;
        currentTotalPopulation -= 50;
    }

}


app.post("/start", async (req, res) => {
    let totalPoulation = req.body.totalPoulation
    let food = req.body.food
    let water = req.body.water
    let temp = req.body.temp
    console.log("START")

    start(totalPoulation, food, water, temp)
    res.json({ data: "YEPPIEE" })
})

app.post("/addYears", async (req, res) => {
    let numberOfYears = req.body.numberOfYears
    let totalPopulation = req.body.totalPopulation

    await yearsAdded(numberOfYears, totalPopulation)
    res.json({ totalPopulation: currentTotalPopulation.toString(), totalBorn: totalBorn.toString(), totalDead: totalDead.toString() })
})

app.listen(port)
