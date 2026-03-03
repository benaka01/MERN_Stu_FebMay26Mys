//Conditional Statements and Switch Statements and Type Conversion
//Conditional Statements
let age=20;
if(age<=13){
    console.log("Child");
}
else if(age<18){
    console.log("Teenager");
}
else{
    console.log("Adult");
}
//Switch Statements
console.log("Switch Statement");
const day="c";
switch(day){
    case 12:
        console.log("Start of the week");
        break;
    case "Wednesday":
        console.log(day,"MId day of the week");
        break;
    case "Tuesday":
        console.log(day,"Good day of the week");
        break;
    case 'c':
        console.log("Refreshment day of the week");
        break;
    default:
        console.log(day,":Some day of the week");
        break;
}

//Type Conversion
let n=Number("123");
console.log("n ",n,"Type of n is ",typeof (n));
let m=Number("ABC");
console.log("m ",m,"Type of m is ",typeof m, "isNan ", isNaN(m));