function values(object){
    let array = [];
    for(let keys in object){
        array.push(object[keys]);
    }
    return array;
}
module.exports=values;