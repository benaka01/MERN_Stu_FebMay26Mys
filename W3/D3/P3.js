//Break in loops
let i;
console.log("For loop example");
for(i=0;i<=5;i++){//forward loop
    if(i===2){
    
    break;
    }
    console.log("i =",i);
}

//continue 
console.log("For loop example");
for(i=0;i<=5;i++){//forward loop
    if(i===2){
    continue;
    }
    console.log("i =",i);
}
