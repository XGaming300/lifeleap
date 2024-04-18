//SERVER
const express = require('express')
const cors = require('cors');

const app = express()
app.use(cors())
const port = 6969;
app.use(express.json());
console.log('Server started at http://localhost:6969');



// let age = 0;
// let countries = [
//     {
//         name: "Canada",
//         population: 3878191
//     },
//     {
//         name: "China",
//         population: 1412000000
//     },
//     {
//         name: "Saudi Arabia",
//         population: 36947025
//     }
// ]

// function GenSurviv(water, food, temp, location, surviv, years) {
//     let decrease = 0
//     if (age > 18) {
//         for (let i = 0; i <= years; i++) {
//             surviv = ((Math.random() * (100 - decrease) - food - water - temp))
//             surviv = Math.round(surviv)
//             decrease += 1
//         }
//     }
//     return surviv
// }
// function ChildSurviv(water, food, temp, location, Csurviv) {
//     let mortalityCa = ((114.4 / 98) * 4.9)
//     //   console.log(mortalityCa)
//     let mortalityCh = ((114.4 / 98) * 6.6)
//     //  console.log(mortalityCh)
//     let mortalitySa = ((114.4 / 98) * 6.4)
//     //  console.log(mortalitySa)
//     let decrease = 0
//     if (age < 18) {
//         for (let i = 0; i <= years; i++) {
//             if (location = 1) {
//                 Csurviv = (Math.random() * ((100 - decrease) - food - water - temp - mortalityCa))
//                 Csurviv = Math.round(Csurviv)
//             }
//             if (location = 2) {
//                 Csurviv = (Math.random() * ((100 - decrease) - food - water - temp - mortalityCh))
//                 Csurviv = Math.round(Csurviv)
//             }
//             if (location = 3) {
//                 Csurviv = (Math.random() * ((100 - decrease) - food - water - temp - mortalitySa))
//                 Csurviv = Math.round(Csurviv)
//             }
//             decrease += 1
//         }
//     }
//     return Csurviv
// }

// function oldSurvive(water, food, temp, location, Osurviv) {
//     let decrease = 0
//     for (let i = 0; i <= years; i++) {
//         Osurvivsurviv = ((Math.random() * (100 - decrease) - food - water - temp)) - 10
//         Osurviv = Math.round(surviv)
//         console.log(surviv)
//         decrease += 1
//     }
//     return Osurviv
// }







// function start(location, population, water, food, temp) {

//     if (food = 1) {
//         food = 13.5
//     }
//     if (food = 2) {
//         food = 6.75
//     }
//     if (food = 3) {
//         food = 1.35
//     }
//     if (water = 1) {
//         water = 0.5
//     }
//     if (water = 2) {
//         water = 2.5
//     }
//     if (water = 3) {
//         water = 5
//     }
//     GenSurviv(water, food, temp)
//     ChildSurviv(water, food, temp)
//     populationGrowth()
// }



// function determinedAge(child, adult, old, age, total) {
//     let childRate =
//         child = (popultion / 100) * childRate

// }





// displayData(listOfHumans, stats)
// {
//     //This is the function you will call at the end of your logic
//     // After logic is done 2 variables should be passed into it to display them

// }



// //The function itself I will write
// // Just so it docent give you an error when testing use can temporary use this
// function displayData(listOfHumans, stats) {
//     console.log(listOfHumans)
//     console.log(stats)
// }


// app.post("/addYears", async (req, res) => {
//     let mainText = req.body.text;
//     let final = await processText(mainText) //obj

//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify({
//         result: final
//     }));
// })


app.post("/start", async (req, res) => {
    let totalPoulation = req.body.totalPoulation
    let food = req.body.food
    let water = req.body.water
    let temp = req.body.temp
    console.log("hello")


    // start(1234, 1, 2, 3)


    res.json({ data: "YEPPIEE" })
})

app.listen(port)
