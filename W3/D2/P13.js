// Function Scope
function scope(){
    var insideVar=10;
    const insideConst=30;
    let insideLet=20;
    console.log(insideVar);
    console.log(insideLet);
    console.log(insideConst);
}
scope();
// console.log(insideVar);  --These is function scope
// console.log(insideLet);       -- As being scope function the variables cannot access outside of the function and let is block scope
// console.log(insideConst);  -- const is block scope

function varFunction(){
    if(true){
        var x=40;
    }
    console.log("x is ",x);

}
varFunction();