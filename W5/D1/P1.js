// Introduction to Node.js
const runtimeName="Node.js";
console.log("Introduction to Node.js");
console.log(`${runtimeName} : Runs Java Script outside the browser`);

//array creation
const commonUses=[
    "Used for server-side application",
    "automation scripts can be created"
];

//array desctructuring
console.log(`${commonUses[0]}`);
console.log(`${commonUses[1]}`);

//using function
commonUses.forEach((commonUse,index)=>{
    console.log(`${index+1},${commonUse}`);
});