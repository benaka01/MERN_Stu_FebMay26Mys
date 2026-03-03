//Arrow function
(args) => {//arguments is optional
    //body of the function
}
//Add two number
const Sum = (a,b)=>{
    return a+b;
    
}
console.log("Sum is ",Sum(10,20));


//One more approach to  create arrow function
//It is Single Line return or implicit return
const square = x => x*x ;
console.log(" Square of 3 is "+square(3));

const sayHello = () => console.log("Hello from arrow func");
sayHello();