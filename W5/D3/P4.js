//combine multiple promise-based steps with async/await

function getOrderId() {
    return new Promise((resolve) => {
        setTimeout(() => {
           resolve(501) 
        }, 500);
    });
}


function getOrderDetails(orderId) {
    return new Promise((resolve) => {
        setTimeout(() => {
           resolve({
            id:orderId,
            product:"Laptop",
            quantity:2
           });
        }, 700);
    });
}

async function showOrderSummary() {
    const orderId=await getOrderId();
    console.log(orderId);
    const orderDetails=await getOrderDetails(orderId);
    console.log("ID : ",orderDetails.id);
    console.log("Product : ",orderDetails.product);
    console.log("Quantity: ",orderDetails.quantity);
}
showOrderSummary();