function invert(object){
    let obj={};
    for(let key in object){
        obj[object[key]]=key;
    }
    return obj;
}
module.exports=invert;