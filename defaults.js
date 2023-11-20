function defaults(object,logic){
    for(let keys in object){
        if(object[keys]===undefined){
            object[keys] = logic();
        }
    }
    return object;
}
module.exports=defaults;