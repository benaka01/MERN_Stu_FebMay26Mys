// promise states : pending , fulfilled , rejected
const fulfilledPromise=new Promise(function(resolve){
    console.log("fulfilled promise is ending");

    setTimeout(function(){
        resolve("FulfilledPromise is fulfilled");
    },1000);
});
const rejectedPromise = new Promise(function (resolve,reject) { 
    console.log("rejected promise is pending");
    setTimeout(function(){
        reject("rejectedPromise is rejected");
    },1500);
});
fulfilledPromise.then(function(message){
    console.log(message);
});

rejectedPromise.catch(function(message){
    console.log(message);
});