var cloakSpan = document.getElementById("cloakCounter");
var stoneSpan = document.getElementById("stoneCounter");
var wandSpan = document.getElementById("wandCounter");


// create connection
var connectionUserCount = new signalR.HubConnectionBuilder().withUrl("/hub/deathlyHallows").build();

// connect to methods that hub invokes aka receives notifications from Hub
connectionUserCount.on("updateDeathlyHallowCount", (cloak ,stone, wand) => {
    cloakSpan.innerText = cloak.toString();
    stoneSpan.innerText = stone.toString();
    wandSpan.innerText = wand.toString();
});


// start connection
function fulfilled() {
    // do something to start
    console.log("Connection to User Hub successfull!");
}

function rejected() {
    // rejected logs
    console.log("Connection to User Hub failed!");
}

connectionUserCount.start().then(fulfilled, rejected);