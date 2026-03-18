//How to handle errors using try/catch block
 function loadCustomerProfile() {
    return new Promise((resolve, reject) => {
        const isServiceAvailable=false;
        if (isServiceAvailable) {
            resolve("Sucessful!!! Customer Profile Loaded.");
        }
        else{
            reject("Unsuccessful!! Customer Profile Unavailable.");
        }
    });
 }
async function showCustomerProfile() {
    try{
    const message=await loadCustomerProfile();
    console.log(message);
    }
    catch(error){
        console.error("Error : "+error);
    }
 }
 showCustomerProfile();