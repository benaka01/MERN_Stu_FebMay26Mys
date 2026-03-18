//Why we need to use async/await
 function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
           resolve({id:101,name:"Kiran"});
        },1000 );
    });
 }
function getOrders(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
           resolve(["Order-A","Order-B"]) ;
        }, 1200);
    });
}
async function ShowUserAndOrders() {
    const users=await getUser();
    const orders=await getOrders(users.id);
    console.log("User Loaded: ",users);
    console.log("Orders Loaded : ",orders);
    
}
ShowUserAndOrders();