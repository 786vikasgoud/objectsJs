function keys(object){
    let arrayOfKeys=[];
    for(let key in object){
        arrayOfKeys.push(key);
    }
    return arrayOfKeys;
}
module.exports=keys;