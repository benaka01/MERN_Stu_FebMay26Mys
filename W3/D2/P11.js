//Recursive function
//a function which calls itself until condition fails

function fact(n){
    if(n<=1){
        return 1;
    }
    else{
        return n*fact(n-1);
    }
}
console.log(fact(5));