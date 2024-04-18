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
let dead = 0; 
let num1 = 0; 
function start(totalPoulation, food, water, temp) {


    currentTotalPopulation = totalPoulation;
}



async function yearsAdded(num, totalPopulation) {
    currentTotalPopulation = totalPopulation;
    console.log(currentTotalPopulation)
    for (let i = 0; i < num; i++) 
    {

            if (location = 1) {
                let Dead = Math.random() * ((totalPopulation / 100) * 6.9)
                population = totalPopulation - Dead 
            }
            if (location = 2) {
                let Dead = Math.random() * ((totalPopulation / 100) * 8.6)
                population = totalPopulation - Dead

            }
            if (location = 3) {
                let Dead = Math.random() * ((totalPopulation / 100) * 8.4)
                population = totalPopulation - Dead
            }
        }



num1 = (population*Math.sqrt((Math.random)*40))
        totalBorn = popualtion - num1 
        totalDead += totalDead
        currentTotalPopulation = popualtion
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