// Default Parameters
function product (a=1,b=1)
{
    return a*b;
}
console.log("product of 15 and 4 is",product(15,4));
console.log("product of 15 and 'not prefer to enter' is",product(15));//it gives output as its Nan so we use default parameters for b while initializing

//Rest parameters
function SumofAll(...numbers){
    console.log(...numbers);//print parameters
}
SumofAll(1,2,3);
SumofAll(20);