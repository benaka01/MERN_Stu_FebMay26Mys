const input = document.getElementById("nameinput");
const display = document.getElementById("display");

input.addEventListener("keydown",function(event){
    console.log("Key is pressed : ", event.key);
    display.textContent = "Last key pressed is "+ event.key;
    
});