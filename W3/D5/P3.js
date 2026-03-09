//MOUSE EVENTS
const hoverbox=document.getElementById("hoverbox");

hoverbox.addEventListener("mousehover",function(){
    hoverbox.textContent = "Mouse is hover me";
    hoverbox.style.backgroundColor = "lightyellow";
});

hoverbox.addEventListener("mouseout",function(){
    hoverbox.textContent = "Mouse is over me";
    hoverbox.style.backgroundColor = "";
});