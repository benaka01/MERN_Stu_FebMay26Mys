//  Chaining promises with centraized error handling

function validateLogin(){
    return new Promise((resolve) => {
        setTimeout(function(){
            resolve("Login validated");
        },1000);
    });
}
function fetchAccountData() {
    return new Promise((resolve,reject) => {
        setTimeout(function(){
            const accountFound=true;
            if(accountFound) {
                resolve("Account data loaded.");
            }
            else{
                reject("Account Data could not found.");
            }
        },800);
    });
}

validateLogin()
.then(function(message){
    console.log(message);
    return fetchAccountData();
})
.then(function(accountMessage){
    console.log(accountMessage);
})
.catch(function(error){
    console.log("Chain Error ",error);
});