//Callback function
// is a function which is passed,as argument to another function
function greetUser(name,callback){
    console.log("hello ,",name);
    callback();
}
greetUser("Benaka",function(){
    console.log("callback function executed");
});