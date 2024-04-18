const express = require('express')
const cors = require('cors');

const app = express()
app.use(cors())
const port = 6969;
app.use(express.json());
console.log('Server started at http://localhost:6969');

app.post("/addYears", async (req, res) => {
    let numberOfYears = req.body.numberOfYears
    let location = 1
    var timeseries = require("timeseries-analysis");
    let year = 2
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

    function GenSurviv(water, food, temp, location, surviv, years) {
        let decrease = 0
        if (age > 18) {
            for (let i = 0; i <= years; i++) {
                surviv = ((Math.random() * (100 - decrease) - food - water - temp))
                surviv = Math.round(surviv)
                decrease += 1
            }
        }
        return surviv
    }
    function ChildSurviv(water, food, temp, location, Csurviv, years) {
        let mortalityCa = ((114.4 / 98) * 4.9)
        //   console.log(mortalityCa)
        let mortalityCh = ((114.4 / 98) * 6.6)
        //  console.log(mortalityCh)
        let mortalitySa = ((114.4 / 98) * 6.4)
        //  console.log(mortalitySa)
        let decrease = 0
        if (age < 18) {
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
        }
        return Csurviv
    }

    function oldSurvive(water, food, temp, location, Osurviv, years) {
        let decrease = 0
        for (let i = 0; i <= years; i++) {
            Osurvivsurviv = ((Math.random() * (100 - decrease) - food - water - temp)) - 10
            Osurviv = Math.round(surviv)
            console.log(surviv)
            decrease += 1
        }
        return Osurviv
    }







    function start(location, population, water, food, temp, years) {

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





    function populationGrowth(child, adult, old, age, total, childRate, population) {
        for (let i = 0; i <= year; i++) {
            if (location = 1) {
                childRate = (2 * Math.sin(i)) + 18
            }
            if (location = 2) {
                childRate = (2 * Math.sin(i)) + 20
            }
            if (location = 3) {
                childRate = (2 * Math.sin(i)) + 30
            }
            child = (population / 100) * childRate

            if (location = 1) {
                oldRate = (2 * Math.sin(i)) + 19
            }
            if (location = 2) {
                oldRate = (2 * Math.sin(i)) + 13
            }
            if (location = 3) {
                oldRate = (2 * Math.sin(i)) + 2
            }
            old = (population / 100) * oldRate
            adult = population - old - child
        }
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
        }
    }





    // displayData(listOfHumans, stats)
    // {


    // }



    // The function itself I will write
    // Just so it docent give you an error when testing use can temporary use this
    // function displayData(listOfHumans, stats) {
    //     console.log(listOfHumans)
    //     console.log(stats)
    // }


    app.post("/addYears", async (req, res) => {
        let mainText = req.body.text;
        let final = await processText(mainText) //obj

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            result: final
        }));
    })

    res.json({ totalPopulation: 131313, totalDead: 131313, totalBorn: 8123 })
})

app.post("/start", async (req, res) => {
    let totalPoulation = req.body.totalPoulation
    let food = req.body.food
    let water = req.body.water
    let temp = req.body.temp
    console.log("hello")


    //  start(1234, 1, 2, 3)


    res.json({ data: "YEPPIEE" })
})

app.listen(port)