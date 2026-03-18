//Usage of await with non-promise value

function getReadyValue() {
    return 25;
}

function getDelayedValue() {
    return Promise.resolve(75);
}
 
async function showValues() {
    const readyValue=await getReadyValue();
    console.log("Ready Value :",readyValue);
    const delayedValue=await getDelayedValue();
    console.log("delayed Value :",delayedValue);
}
showValues();