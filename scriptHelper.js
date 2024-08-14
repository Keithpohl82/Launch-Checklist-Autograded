// Write your helper functions here!

//require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) { 
    if (testInput.trim() === "") {
        return "Empty";
    } else if (isNaN(Number(testInput))) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }

 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) { 
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus"); 
    pilot = document.querySelector("input[name=pilotName]").value;
    copilot = document.querySelector("input[name=copilotName]").value;
    fuelLevel = document.querySelector("input[name=fuelLevel]").value;  
    cargoMass = document.querySelector("input[name=cargoMass]").value;
    const launchStatus = document.getElementById("launchStatus");
    const faultyItems = document.getElementById("faultyItems");

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty") {
        alert("Pilot and Co-pilot names are required!");
        return;
    }

    if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        alert("Pilot and Co-pilot names must be strings!");
        return;
    }

    
    if (validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty") {
        alert("Fuel level and cargo mass are required!");
        return;
    }

    if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Not a Number") {
        alert("Fuel level and cargo mass must be numbers!");
        return;
    }

    faultyItems.style.visibility = "visible";

    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    let readyForLaunch = true;

    if (Number(fuelLevel) < 10000) {
        fuelStatus.innerHTML = "Fuel level too low for launch";
        readyForLaunch = false;
    } else {
        fuelStatus.innerHTML = "Fuel level high enough for launch";
    }

    if (Number(cargoMass) > 10000) {
        cargoStatus.innerHTML = "Cargo mass too high for launch";
        readyForLaunch = false;
    } else {
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
    }

    if (readyForLaunch) {
        launchStatus.innerHTML = "Shuttle is ready for launch";
        launchStatus.style.color = "green";
    } else {
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";
    }

 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {

         });
        
     return planetsReturned;
 }

 function pickPlanet(planets) {
 }
 
//  module.exports.addDestinationInfo = addDestinationInfo;
//  module.exports.validateInput = validateInput;
//  module.exports.formSubmission = formSubmission;
//  module.exports.pickPlanet = pickPlanet; 
//  module.exports.myFetch = myFetch;