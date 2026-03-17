//callback handling with name functions
function loadUser(next) {
    setTimeout(function () {
        console.log("Step 1: user loaded.");
        next();
    }, 800);
}

function loadOrders(next) {
    setTimeout(function () {
        console.log("Step 2:Orders loaded.");
        next();
    }, 600);
}

function loadPayments(next) {
    setTimeout(function () {
        console.log("Step 3 : Payments loaded");
        next();
    }, 400);
}

function loadShipment(next) {
    setTimeout(function () {
        console.log(" Step 4: shipment loaded");
        console.log("Same flow but easier to read");
    }, 200);
}
//function call using name function
loadUser(function(){
    loadOrders(function(){
        loadPayments(function(){
            loadShipment();
        });
    });
});