//SERVER
const express = require('express')
const cors = require('cors');

const app = express()
app.use(cors())
const port = 6969;
app.use(express.json());
console.log('Server started at http://localhost:6969');

// === GLOBAL ===
let currentTotalPopulation = 100;
let food;
let water;
let temp;
let chanceOfSurvival;
let addChildren;
let totalDead = 0;
let totalBorn = 0;

async function yearsAdded(num, totalPopulation) {
    currentTotalPopulation = totalPopulation;
    for (let i = 0; i < num; i++) {
        totalBorn += 500;
        totalDead += 100;
        currentTotalPopulation -= 50;
    }

}

app.post("/start", async (req, res) => {
    chanceOfSurvival = req.body.totalPoulation
    food = req.body.food
    water = req.body.water
    temp = req.body.temp

    res.json({ data: "YEPPIEE" })
})

app.post("/addYears", async (req, res) => {
    let numberOfYears = req.body.numberOfYears
    let totalPopulation = req.body.totalPopulation

    currentTotalPopulation = totalPopulation;

    await yearsAdded(numberOfYears, totalPopulation)
    res.json({ totalPopulation: currentTotalPopulation.toString(), totalBorn: totalBorn.toString(), totalDead: totalDead.toString() })
})

app.listen(port)
