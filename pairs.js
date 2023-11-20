function pairs(object){
    let array = [];
    for(let key in object){
        let arr=[];
        arr.push(key);
        arr.push(object[key]);
        array.push(arr);
    }
    return array;
}
module.exports=pairs;