
let countries = [
    {
        name: "Canada",
        population: 3878191
    },
    {
        name: "China",
        population: 1412000000
    },
    {
        name: "Saudi Arabia",
        population: 36947025
    }
]
let years = 50

function GenSurviv(water, food, temp, location, surviv) {
    let decrease = 0
    for (let i = 0; i <= years; i++) {
        surviv = ((Math.random() * (100 - decrease) - food - water - temp))
        surviv = Math.round(surviv)
        decrease += 1
    }
    return surviv
}
function ChildSurviv(water, food, temp, location, Csurviv) {
    let mortalityCa = ((114.4 / 98) * 4.9)
    //   console.log(mortalityCa)
    let mortalityCh = ((114.4 / 98) * 6.6)
    //  console.log(mortalityCh)
    let mortalitySa = ((114.4 / 98) * 6.4)
    //  console.log(mortalitySa)
    let decrease = 0
    for (let i = 0; i <= years; i++) {
        if (location = 1) {
            Csurviv = (Math.random() * ((100 - decrease) - food - water - temp - mortalityCa))
            Csurviv = Math.round(Csurviv)
        }
        if (location = 2) {
            Csurviv = (Math.random() * ((100 - decrease) - food - water - temp - mortalityCh))
            Csurviv = Math.round(Csurviv)
        }
        if (location = 3) {
            Csurviv = (Math.random() * ((100 - decrease) - food - water - temp - mortalitySa))
            Csurviv = Math.round(Csurviv)
        }
        decrease += 1
    }
    return Csurviv
}

function oldSurvive(water, food, temp, location, Osurviv) {
    let decrease = 0
    for (let i = 0; i <= years; i++) {
        Osurvivsurviv = ((Math.random() * (100 - decrease) - food - water - temp ))-10
        Osurviv = Math.round(surviv)
        console.log(surviv)
        decrease += 1
    }
    return Osurviv
}
function populationGrowth(birthRates){
    const data = [
        { y: 2, x: 1 },
        { y: 4, x: 2 },
        { y: 5, x: 3 },
        { y: 4, x: 4 },
        { y: 5, x: 5 },
        
    ]
    // Takes the following arguments (dataset, xKey, yKey)
const trend = createTrend(data, 'x', 'y');

console.log(trend);
// { slope: 0.6, yStart: 2.2, calcY: [Function: calcY] }
}






function start(location, population, water, food, temp) {

    if (food = 1) {
        food = 13.5
    }
    if (food = 2) {
        food = 6.75
    }
    if (food = 3) {
        food = 1.35
    }
    if (water = 1) {
        water = 0.5
    }
    if (water = 2) {
        water = 2.5
    }
    if (water = 3) {
        water = 5
    }
GenSurviv(water, food, temp)
ChildSurviv(water, food, temp)
populationGrowth()
}
start("Canada", 1234, 1, 2, 3)



// function addYears(numberOfYears) {
//     //This function will be called when button on website is pressed to add years
//     //Use this function as a starting point for the logic


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


