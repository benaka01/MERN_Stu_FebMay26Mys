//Object iteration
const book = {
    title :"JS for newbies",
    author : "Varshith",
    year :2026
};
for(let key in book){
    console.log(key,":",book[key]);// Accessing one key pair at a time
}

console.log("Keys",Object.keys(book));// Accessing only keys
console.log("Values",Object.values(book));// Accessing only values
console.log("Values",Object.entries(book));//Different format