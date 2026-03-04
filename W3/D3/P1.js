//for loop 
let i;
console.log("For loop example");
for(i=0;i<=5;i++){//forward loop
    console.log("i =",i);
}
for(i=5;i>=0;i--){//backward loop
    console.log("i=",i);
}
//nested for loop
for(let i=1;i<=3;i++){
    for(let j=1;j<=2;j++){
        console.log(`i=${i},j=${j}`);
    }
}