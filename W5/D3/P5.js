// An async function always returns a Promise

async function getStatusMessage() {
    return "Order is ready";

}
const result=getStatusMessage();
console.log("Is this return value is a promise ..?",result instanceof Promise);//checking result is a promise or not 
result.then(function (message) {
    console.log("Resolved value: ",message);
});