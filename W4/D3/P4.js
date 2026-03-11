const jsonoutput =document.getElementById("jsonoutput");

document.getElementById("savebtn").addEventListener("click",function(){
    const user={
        name:"Ben",
        id:"101",
        role:"developer",
        skills:["html","css","js","react"],
    };
    console.log(user);
    localStorage.setItem("userProfile",JSON.stringify(user));
    jsonoutput.textContent="user object saved as string to local storage";
});

document.getElementById("readbtn").addEventListener("click",function(){
    const up =localStorage.getItem("userProfile");
    const view=(JSON.parse(up));
    jsonoutput.textContent="user object read"+view;
});
