// chaining Promises with returned values
function getBaseAmount() {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve(1000);
        }, 500);
    });
}
getBaseAmount()
    .then(function (amount) {
        console.log("Base Amount:", amount);
        return amount;
    })
    .then(function (updatedAmount) {
        console.log("Amount after service charge:", updatedAmount);
        return updatedAmount-100;
    })
    .then(function (finalAmount) {
        console.log("Final Amount after discount: ", finalAmount);
    });