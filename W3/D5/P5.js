const startbtn=document.getElementById("startbtn");
const removebtn=document.getElementById("removebtn");

function handleClick(){
    console.log("Startbtn clicked");
}

startbtn.addEventListener("click",handleClick);

removebtn.addEventListener("click",function(){
    startbtn.removeEventListener('click',handleClick);
    console.log("Click listener removed from startbtn");
});