const express = require('express')
const cors = require('cors');

const app = express()
app.use(cors())
const port = 6969;
app.use(express.json());
console.log('Server started at http://localhost:6969');

app.post("/addYears", async (req, res) => {
    let years = req.body.numberOfYears
    let totalPopulation = req.body.totalPopulation
    let food = req.body.food
    let water = req.body.water
    let temp = req.body.temp
    let location = req.body.location
    let child = 0
    let adult = 0
    let childRate = 0
    let old = 0
    let sum = 0
    let population = 0;
    let mortality = 0; 
    var timeseries = require("timeseries-analysis");
    let year = 2
    let countries = [
        {
            name: "Canada",
        },
        {
            name: "China",
        },
        {
            name: "Saudi Arabia",
        }
    ]




    function Surviv(water, food, temp, location) {
        let decrease = 0

        for (let i = 0; i <= years; i++) {
            if (location = 1) {
                let mortalityCa = Math.random() * ((totalPopulation / 100) * 6.9)
                population = totalPopulation - mortality 
            }
            if (location = 2) {
                let mortalityCh = Math.random() * ((totalPopulation / 100) * 8.6)
                population = totalPopulation - mortality

            }
            if (location = 3) {
                let mortalitySa = Math.random() * ((totalPopulation / 100) * 8.4)
                population = totalPopulation - mortality

            }
            decrease += 1
        }


        return Csurviv
    }

    for (let i = 0; i <= year; i++) {


        var dataCa = [
            [2000, 30683313],
            [2001, 31002763],
            [2002, 31322398],
            [2003, 31619450],
            [2004, 31911668],
            [2005, 32215916],
            [2006, 32531867],
            [2007, 32862459],
            [2008, 33218541],
            [2009, 33593917],
            [2010, 33963412],
            [2011, 34323531],
            [2012, 34691878],
            [2013, 35063691],
            [2014, 35404608],
            [2015, 35732126],
            [2016, 36113532],
            [2017, 36554348],
            [2018, 37522584],
            [2020, 37888705],
            [2021, 38155012],
            [2022, 38454327],
            [2023, 38781291],
            [2024, 39107046],
        ]
        if (location = 1) {
            var t = new timeseries.main(dataCa)
            var t = new ts.index(ts.adapter.sin({ cycles: years }))
            var forecastDatapoint = 23 + i
            var coeffs = dataCa.ARMaxEntropy({
                dataCa: t.dataCa.slice(0, 23)
            });

            var forecast = 0;
            for (var i = 0; i < coeffs.length; i++) {
                forecast -= t.dataCa[22 - i][1] * coeffs[i];
            }
             sum = totalPopulation - forecast
             population = population + forecast
        }
        console.log("forecast", forecast);
        var dataCh = [
            [2000, 1264099069],
            [2001, 1272739582],
            [2002, 1280926120],
            [2003, 1288873367],
            [2004, 1296816711],
            [2005, 1304887562],
            [2006, 1313086567],
            [2007, 1321513224],
            [2008, 1330167148],
            [2009, 1339125595],
            [2010, 1348191368],
            [2011, 1357095481],
            [2012, 1366560818],
            [2013, 1376100308],
            [2014, 1385189668],
            [2015, 1393715448],
            [2016, 1401889681],
            [2017, 1410275957],
            [2018, 1417069468],
            [2020, 1421864031],
            [2021, 1424929781],
            [2022, 1425893465],
            [2023, 1425887337],
            [2024, 1425178782],
        ]
        if (location = 2) {

            var t = new timeseries.main(dataCh)
            var t = new ts.index(ts.adapter.sin({ cycles: years }))
            var forecastDatapoint = 23 + i
            var coeffs = dataCh.ARMaxEntropy({
                dataCh: t.dataCh.slice(0, 22)
            });

            var forecast = 0;
            for (var i = 0; i < coeffs.length; i++) {
                forecast -= t.dataCh[22 - i][1] * coeffs[i];
            }
            sum = totalPopulation - forecast
            population = population+ forecast
        }

        var dataSa = [
            [2000, 21547390],
            [2001, 22085929],
            [2002, 22623415],
            [2003, 23150847],
            [2004, 23661808],
            [2005, 24397644],
            [2006, 25382870],
            [2007, 26400068],
            [2008, 27437353],
            [2009, 28483797],
            [2010, 29411929],
            [2011, 30150945],
            [2012, 30821543],
            [2013, 31482498],
            [2014, 32125564],
            [2015, 32749848],
            [2016, 33416270],
            [2017, 34193122],
            [2018, 35018133],
            [2020, 35827362],
            [2021, 35997107],
            [2022, 35950396],
            [2023, 36408820],
            [2024, 36947025],
        ]
        if (location = 3) {
            var t = new timeseries.main(dataSa)
            var t = new ts.index(ts.adapter.sin({ cycles: years }))
            var forecastDatapoint = 23 + i
            var coeffs = dataSa.ARMaxEntropy({
                dataSa: t.dataSa.slice(0, 22)
            });

            var forecast = 0;
            for (var i = 0; i < coeffs.length; i++) {
                forecast -= t.dataSa[23 - i][1] * coeffs[i];
            }
            sum = totalPopulation - forecast
            population = population+ forecast
        }

    }





    function start() {

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




    // The function itself I will write
    // Just so it docent give you an error when testing use can temporary use this
    // function displayData(listOfHumans, stats) {
    //     console.log(listOfHumans)
    //     console.log(stats)
    // }


        
    res.json({ totalPopulation: population, totalBorn: Forecast, totalDead: mortality})

    

})

app.post("/start", async (req, res) => {
    let totalPoulation = req.body.totalPoulation
    let food = req.body.food
    let water = req.body.water
    let temp = req.body.temp


    start(totalPopulation, food, water, temp)


    res.json({ data: "YEPPIEE" })
})

app.listen(port)