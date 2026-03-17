//Chaining promises with returned promises
function getOrderId(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(501);
        },500);
    });
}

function getOrderDetails(orderId){
    return new Promise((resolve) => {
       setTimeout(function(){
        resolve({
            id: orderId,
            product:"Laptop",
            quantity:2
        });
       },1500) ;
    });
}

getOrderId()
.then(function(orderId){
    console.log("Order Id recieved : ",orderId);
    return getOrderDetails(orderId);
})
.then(function(orderDetails){
    console.log("Order details loaded.");
    console.log("Product :",orderDetails.product);
    console.log("Quantity :",orderDetails.quantity);

});
