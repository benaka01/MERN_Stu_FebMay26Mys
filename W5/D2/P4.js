// Writing custom callback functions

function processStudent(name,score,moon,callback) {
    console.log("Student Name : ",name);
    console.log("Student score : ",score);
    callback(name,score);
    moon(name,score);
}

function showresult(name,score) {
    if(score>=70){
        console.log(name+" has Passed");
    }
    else{
        console.log(name+" has Failed!!");
    }
}

function showGrade(name,score,moon) {
    if(score>=85){
        console.log("Grade A+");
    }
    else if(score>=75){
        console.log("Grade A");
    }
    else if(score>=70){
        console.log("Grade B");
    }
    else{
        console.log("Failed");
    }
}
//function call
processStudent("Benaka",100,showresult,showGrade);
