// (Immediately Invoked function expression)IIFE
//Without return value
(function(){
    console.log("Basic IIFE executed Immediately");
})();

(function(appName,version){
    console.log("App Name here",appName,"version here",version);
})("NodeJS","24.22.0");
//with return value
const result= (function(){
    const a=10,b=20;
    return a+b;

})();
console.log("Sum is: "+result);