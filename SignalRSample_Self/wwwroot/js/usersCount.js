// create connection
var connectionUserCount = new signalR.HubConnectionBuilder().withUrl("/hub/userCount").build();


// connect to methods that hub invokes aka receives notifications from Hub
connectionUserCount.on("updateTotalViews", (value) => {
    console.log("Passed value from server: " + value);
    var newCountSpan = document.getElementById("totalViewsCounter");
    newCountSpan.innerText = value.toString();
});

// invoke hub methods aka send information to hub
function newWindowLoadedOnClient() {
    connectionUserCount.send("NewWindowLoaded");
}

// start connection
function fulfilled() {
    // do something to start
    console.log("Connection to User Hub successfull!");
    newWindowLoadedOnClient();
}

function rejected() {
    // rejected logs
    console.log("Connection to User Hub failed!");
}

connectionUserCount.start().then(fulfilled, rejected);