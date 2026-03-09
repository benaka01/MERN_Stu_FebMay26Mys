const form = document.getElementById("loginform");
const username = document.getElementById("username");
const message = document.getElementById("message");

form.addEventListener("submit",function(ben){
    //stop page reload
    ben.preventDefault();

    if(username.value.trim()===""){
        message.textContent = "Username is required";
        console.log("Form blocked : no input for username");
        return;
    }
    message.textContent = "Form handled by JS for user ", username.value;
    console.log("Form Submitted with username",username.value);
});