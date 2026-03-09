function tagPassword(password){
    if(password.length < 8){
        return "Weak";
    }
    if(password.length>=8 && password.length <12 && typeof password === 'string'){
        return "Medium";
    }
    if(password.length>=12 && typeof password === 'string'){
        return "Strong";
    }
    else{
        return "Invalid";
    }
}
console.log(tagPassword("abcabc"));
console.log(tagPassword("abcabca120"));
console.log(tagPassword("abcabcaaaaaaaaa111"));