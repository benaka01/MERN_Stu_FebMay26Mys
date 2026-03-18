//Introduction to async/await
function getMessage() {
    return new Promise(function (res) {
        setTimeout(() => {
           res("Async/Await makes promise based code easier to read");
        },1000);
    });
}

//creating async operation
async function showMessage() {
    console.log("Loading message.....");
    const message1=getMessage();
    const message=await getMessage();
    console.log(message1);
    console.log(message);
    
}

showMessage();

