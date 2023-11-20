function mapObject(object,logic){
    for(let key in object){
        let result = logic(object[key]);
        object[key]=result;
    }
    return object;
}
module.exports=mapObject;