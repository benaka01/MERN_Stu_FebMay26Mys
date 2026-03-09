
const box=document.getElementById("box");
const insidebtn=document.getElementById("insidebox");

box.addEventListener("click",function(event){
    console.log("Event type",event.type);
    console.log("Event target id",event.target.id);
    console.log("event current target id",event.currentTarget.id );
});

insidebtn.addEventListener("click",function(event){
    console.log("Event type",event.type);
    console.log("Event target id",event.target.id);
    console.log("event current target id",event.currentTarget.id );
});