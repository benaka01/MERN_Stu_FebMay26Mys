// Basic Callback Variations
// 1. callback with no input data
// 2. callback that recieves data from main function

function runTask(callback) {
    console.log("Task is running.");
    callback();
}
function runTaskWithResult(taskname,callback) {
    console.log("Processing Task: "+taskname);
    callback("task "+taskname+"Finished Successfully.");
}
function showSipleDoneMessage() {
    console.log("Simple callback executed");

}
function showdetailedMessage(message) {
    console.log(message);
}

runTask(showSipleDoneMessage);
runTaskWithResult("Send monthly report",showdetailedMessage);