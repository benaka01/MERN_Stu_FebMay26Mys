const outer = document.getElementById("outer");
const inner = document.getElementById("inner");
const innerbtn = document.getElementById("innerbtn");

outer.addEventListener("click",function()
 {
    console.log("Outer Div clciked");
});

inner.addEventListener("click",function()
 {
    console.log("Inner Div clciked");
});

innerbtn.addEventListener("click",function(event){
    console.log("inner button clicked");
    event.stopPropagation();
    console.log("propagation stops at button");
});