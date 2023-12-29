// create connection
var connectionUserCount = new signalR.HubConnectionBuilder()
    .withUrl("/hub/userCount", signalR.HttpTransportType.WebSockets).build();
//long Polling - timeout (1.5min)
// ServerSentEvents - inline data from server (new value - new packet)
// WebSockets - online with server


// connect to methods that hub invokes aka receives notifications from Hub
connectionUserCount.on("updateTotalViews", (value) => {
    console.log("Passed value from server for updateTotalViews: " + value);
    var newCountSpan = document.getElementById("totalViewsCounter");
    newCountSpan.innerText = value.toString();
});

// connect to methods that hub invokes aka receives notifications from Hub
connectionUserCount.on("updateTotalUsers", (value) => {
    console.log("Passed value from server for updateTotalUsers: " + value);
    var newCountSpan = document.getElementById("totalUsersCounter");
    newCountSpan.innerText = value.toString();
});

// invoke hub methods aka send information to hub
function newWindowLoadedOnClient() {
    connectionUserCount.invoke("NewWindowLoaded", "MrEshboboyevServer").then((value) => console.log(value));
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