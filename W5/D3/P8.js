//try catch finally with async/await

function processPayment(isSucceeded) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isSucceeded){
                resolve("Payment Processed successfully!!!");
            }
            else{
                reject("Payment couldn't Processed successfully!!!");
            }
        }, 2000);
    });
}
async function runPaymentFlow(isSucceeded) {
    try{
        const result=await processPayment(isSucceeded);
        console.log("Success: ",result);
    }
    catch(error){
        console.log("Failure: ",error);
    }
    finally{
        console.log("Payment flow completed");
    }
}

runPaymentFlow(false).then(function(){
    return runPaymentFlow(true);
});