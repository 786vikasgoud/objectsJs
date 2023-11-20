let defaults = require("../defaults.js")

let object ={
    firstName:"vikas",
    lastName:undefined,
    age:undefined,
    fatherName:undefined,
}

function defultProbs(){
    return "u did not specified value";
}

let newObject = defaults(object,defultProbs);
console.log(newObject);
