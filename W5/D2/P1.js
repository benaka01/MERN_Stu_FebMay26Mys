//Introduction to callback function

//main function
function greetUser(name,callback) {
    console.log("Hello, "+name);
    //the callback function is executed only after the execution of the current function
    callback();
}
//primary function
function showCompletionMessage() {
    console.log("The greeting task is complete");   
}

greetUser("Ben",showCompletionMessage);
greetUser("Benaka",showCompletionMessage);