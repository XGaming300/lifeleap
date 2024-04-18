

let totalPopulation = 100000;

function displayCharacter(number) {
    const box1 = document.getElementById("box1")
    // const startPage = document.getElementById("startPage")
    // const startPage = document.getElementById("startPage")

    for (let i = 0; i < number; i++) {
        human = document.createElement("div");
        human.setAttribute("class", "human")

        img = document.createElement("img");
        img.src = "https://media.istockphoto.com/id/1297832726/photo/portrait-of-a-smiling-young-businessman.jpg?s=612x612&w=0&k=20&c=32Qg7TnqfGkrDwTL3q0X0Kx9ab3JDzuqxzp4poH39zc="
        
        info = document.createElement("div");
        gender = document.createElement("h3");
        age = document.createElement("h3");
        info.setAttribute("class", "humanInfo")


        gender.innerHTML = "Male"
        age.innerHTML = "24"

        info.appendChild(gender)
        info.appendChild(age)

        human.appendChild(img)
        human.appendChild(info)

        box1.appendChild(human)

    }
}

function createCharacter() {
    newPopulation = 110000;

    let scaledPeople = (newPopulation * 31) / totalPopulation;

    console.log(scaledPeople)

    displayCharacter(scaledPeople)
}

createCharacter()


function bindEvents() {
    // PAGES
    const startPage = document.getElementById("startPage")
    const mainPage = document.getElementById("mainPage")

    // BUTTONS
    const startButton = document.getElementById("startButton")
    
    //INPUTS


    startButton.addEventListener("click", () => {

        // CHECK IF FEELS FILLED IN 

        startPage.classList.add("hide")
        mainPage.classList.remove("hide")

    })



}


bindEvents() 



// function addYears(numberOfYears) {
//     //This function will be called when button on website is pressed to add years
//     //Use this function as a starting point for the logic
// }

// //This is the function you will call at the end of your logic 
// // After logic is done 2 variables should be passed into it to display them
// displayData(listOfHumans, stats) 

// //The function itself I will write
// // Just so it docent give you an error when testing use can temporary use this
// function displayData(listOfHumans, stats) {
//     console.log(listOfHumans)
//     console.log(stats)
// }
