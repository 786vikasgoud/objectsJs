let mapObject=require("../mapObject.js");
let testObject=require("../main.js");
function cb(value){
    return value+25;
}
let mapObjectValues = mapObject(testObject,cb);
console.log(mapObjectValues);