const port = 6969;
let year = 1;
let humansList = [];

let countries = [
    {
        name: "Canada",
        population: "38.93M",
        realNum: 38930000
    },
    {
        name: "China",
        population: "1.41B",
        realNum: 1410000000
    },
    {
        name: "Saudi Arabia",
        population: "36.41M",
        realNum: 36410000
    }
]

function displayCharacter() {
    let box1 = document.getElementById("box1")
    box1.innerHTML = ""
    // const startPage = document.getElementById("startPage")
    // const startPage = document.getElementById("startPage")

    for (let i = 0; i < humansList.length; i++) {
        human = document.createElement("div");
        human.setAttribute("class", "human")

        img = document.createElement("img");
        img.src = humansList[i].image

        info = document.createElement("div");
        gender = document.createElement("h3");
        age = document.createElement("h3");
        info.setAttribute("class", "humanInfo")

        gender.innerHTML = humansList[i].gender
        age.innerHTML = humansList[i].age

        info.appendChild(gender)
        info.appendChild(age)

        human.appendChild(img)
        human.appendChild(info)

        box1.appendChild(human)

    }
}

function createCharacter() {
    newPopulation = 110000;
    const totalPopulation = parseInt(document.getElementById("totalPopulationCounter").innerHTML)
    let scaledPeople = (newPopulation * 63) / totalPopulation;
    let totalDead = totalPopulation - scaledPeople;
    displayCharacter(scaledPeople)
}

function updateCharacters(yearsPassed) {
    for (let i = 0; i < humansList.length; i++) {
        humansList[i].age += parseInt(yearsPassed);

        if (humansList[i].age > 95) {
            humansList[i].age = Math.floor(Math.random() * 40) + 1;
            let random = Math.floor(Math.random() * 2)
            if (random == 1) humansList[i].gender = "Male"
            else humansList[i].gender = "Female"
        }

        if (humansList[i].gender == "Male") {
            if (humansList[i].age < 6) {
                imageSrc = "images/male1.webp"
            } else if (humansList[i].age < 18) {
                imageSrc = "images/male2.webp"
            } else if (humansList[i].age < 50) {
                imageSrc = "images/male3.webp"
            } else {
                imageSrc = "images/male4.webp"
            }
        } else {
            if (humansList[i].age < 6) {
                imageSrc = "images/female1.webp"
            } else if (humansList[i].age < 18) {
                imageSrc = "images/female2.webp"
            } else if (humansList[i].age < 50) {
                imageSrc = "images/female3.webp"
            } else {
                imageSrc = "images/female4.webp"
            }
        }

        humansList[i].image = imageSrc;


    }

    displayCharacter()
}


function updateYear(number) {
    year += parseInt(number);
    document.getElementById("yearCounter").innerHTML = "YEAR: " + year
}

async function sendStart(totalPopulation, food, water, temp) {
    let data = {
        totalPopulation: totalPopulation,
        food: food,
        water: water,
        temp: temp,
        location: 1
    }

    try {
        const response = await fetch("http://localhost:" + port + "/start", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const responseData = await response.json();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

async function addYears(numberOfYears) {
    updateYear(numberOfYears)

    let data = {
        numberOfYears: numberOfYears,
        totalPopulation: document.getElementById("totalPopulationCounter").innerHTML
    }

    try {
        const response = await fetch("http://localhost:" + port + "/addYears", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const responseData = await response.json();

        updateStats(responseData)
        updateCharacters(numberOfYears)

        // Handle the response data as needed
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

function findPercentPopulation() {
    let maleCount = 0;
    let femaleCount = 0;

    for (let i = 0; i < humansList.length; i++) {
        if (humansList[i].gender == "Male") maleCount++
        else femaleCount++
    }

    let total = maleCount + femaleCount;

    maleCount = Math.round((100 * maleCount) / total)
    femaleCount = Math.round((100 * femaleCount) / total)

    document.getElementById("malePer").innerHTML = maleCount + "%"
    document.getElementById("femalePer").innerHTML = femaleCount + "%"
}

function updateStats(data) {
    const totalPopulation = document.getElementById("totalPopulationCounter")
    totalPopulation.innerHTML = data.totalPopulation

    const born = document.getElementById("bornCount")
    born.innerHTML = "Total Born: " + data.totalBorn

    const dead = document.getElementById("deadCount")
    dead.innerHTML = "Total Dead: " + data.totalDead
}

function createHumanList() {
    for (let i = 0; i < 63; i++) {

        let age = Math.floor(Math.random() * 80) + 2;
        let gender;
        let imageSrc;

        let random = Math.floor(Math.random() * 2)


        if  (random == 1) {
            gender = "Male"

            if (age < 6) {
                imageSrc = "images/male1.webp"
            } else if (age < 18) {
                imageSrc = "images/male2.webp"
            } else if (age < 50) {
                imageSrc = "images/male3.webp"
            } else {
                imageSrc = "images/male4.webp"
            }


        } else {
            gender = "Female"

            if (age < 6) {
                imageSrc = "images/female1.webp"
            } else if (age < 18) {
                imageSrc = "images/female2.webp"
            } else if (age < 50) {
                imageSrc = "images/female3.webp"
            } else {
                imageSrc = "images/female4.webp"
            }
        }


        humansList.push({
            age: age,
            gender: gender,
            generation: 1,
            image: imageSrc
        })

    }
}


function bindEvents() {
    // PAGES
    const startPage = document.getElementById("startPage")
    const mainPage = document.getElementById("mainPage")

    // BUTTONS
    const startButton = document.getElementById("startButton")

    //INPUTS
    const canada = document.getElementById("canada")
    const china = document.getElementById("china")
    const sa = document.getElementById("sa")

    const foodLow = document.getElementById("foodLow")
    const foodMid = document.getElementById("foodMid")
    const foodHigh = document.getElementById("foodHigh")

    const waterLow = document.getElementById("waterLow")
    const waterMid = document.getElementById("waterMid")
    const waterHigh = document.getElementById("waterHigh")

    const tempLow = document.getElementById("tempLow")
    const tempMid = document.getElementById("tempMid")
    const tempHigh = document.getElementById("tempHigh")

    const btn1 = document.getElementById("btn1")
    const btn2 = document.getElementById("btn2")
    const btn3 = document.getElementById("btn3")
    const btn4 = document.getElementById("btn4")
    const btn5 = document.getElementById("btn5")
    const btn6 = document.getElementById("btn6")

    btn1.addEventListener("click", () => {addYears(btn1.innerHTML)})
    btn2.addEventListener("click", () => {addYears(btn2.innerHTML)})
    btn3.addEventListener("click", () => {addYears(btn3.innerHTML)})
    btn4.addEventListener("click", () => {addYears(btn4.innerHTML)})
    btn5.addEventListener("click", () => {addYears(btn5.innerHTML)})
    btn6.addEventListener("click", () => {addYears(btn6.innerHTML)})

    const totalPopulation = document.getElementById("populationNum")
    let country = countries[0];
    let food = 2;
    let water = 2;
    let temp = 2;

    let selectedPopulation = countries[0].realNum;
    const customPopulation = document.getElementById("customPopulation")



    foodLow.addEventListener("click", () => {
        foodLow.classList.add("underLine")
        foodMid.classList.remove("underLine")
        foodHigh.classList.remove("underLine")
        food = 1;
    })

    foodMid.addEventListener("click", () => {
        foodLow.classList.remove("underLine")
        foodMid.classList.add("underLine")
        foodHigh.classList.remove("underLine")
        food = 2;
    })

    foodHigh.addEventListener("click", () => {
        foodLow.classList.remove("underLine")
        foodMid.classList.remove("underLine")
        foodHigh.classList.add("underLine")
        food = 3;
    })

    waterLow.addEventListener("click", () => {
        waterLow.classList.add("underLine")
        waterMid.classList.remove("underLine")
        waterHigh.classList.remove("underLine")
        food = 1;
    })

    waterMid.addEventListener("click", () => {
        waterLow.classList.remove("underLine")
        waterMid.classList.add("underLine")
        waterHigh.classList.remove("underLine")
        food = 2;
    })

    waterHigh.addEventListener("click", () => {
        waterLow.classList.remove("underLine")
        waterMid.classList.remove("underLine")
        waterHigh.classList.add("underLine")
        food = 3;
    })

    tempLow.addEventListener("click", () => {
        tempLow.classList.add("underLine")
        tempMid.classList.remove("underLine")
        tempHigh.classList.remove("underLine")
        food = 1;
    })

    tempMid.addEventListener("click", () => {
        tempLow.classList.remove("underLine")
        tempMid.classList.add("underLine")
        tempHigh.classList.remove("underLine")
        food = 1;
    })

    tempHigh.addEventListener("click", () => {
        tempLow.classList.remove("underLine")
        tempMid.classList.remove("underLine")
        tempHigh.classList.add("underLine")
        food = 1;
    })

    // COUNTRIES
    customPopulation.addEventListener("input", () => {
        if (customPopulation.value != "") {
            selectedPopulation = customPopulation.value;
            totalPopulation.classList.remove("underLine")
        } else {
            totalPopulation.classList.add("underLine")
        }

    })

    canada.addEventListener("click", () => {
        canada.classList.add("underLine")
        china.classList.remove("underLine")
        sa.classList.remove("underLine")
        totalPopulation.innerHTML = countries[0].population;
        country = countries[0];
        selectedPopulation = countries[0].realNum
    })

    china.addEventListener("click", () => {
        canada.classList.remove("underLine")
        china.classList.add("underLine")
        sa.classList.remove("underLine")
        totalPopulation.innerHTML = countries[1].population
        country = countries[1];
        selectedPopulation = countries[1].realNum
    })

    sa.addEventListener("click", () => {
        canada.classList.remove("underLine")
        china.classList.remove("underLine")
        sa.classList.add("underLine")
        totalPopulation.innerHTML = countries[2].population
        country = countries[2];
        selectedPopulation = countries[2].realNum

    })


    startButton.addEventListener("click", () => {
        // let selecterCountry;
        // for (let i = 0; i < countries; i++) {
        //     if (selectedPopulation == countries[i].population) {
        //         selecterCountry = i;
        //     }
        // }

        // if (selecterCountry) {
        //     document.getElementById("totalPopulationCounter").innerHTML = countries[selecterCountry].realNum
        // } else {
        //     document.getElementById("totalPopulationCounter").innerHTML = selectedPopulation
        // }


        document.getElementById("totalPopulationCounter").innerHTML = selectedPopulation

        createHumanList()
        createCharacter()
        findPercentPopulation()

        sendStart(totalPopulation.innerHTML, food, water, temp)

        startPage.classList.add("hide")
        mainPage.classList.remove("hide")

    })
}

document.getElementById("populationNum").innerHTML = countries[0].population
bindEvents()
