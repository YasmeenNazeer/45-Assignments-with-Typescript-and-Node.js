
function storeCarInfo(manufacturer:string, modelnumber:string , ...extraOptipon: { [ key:string] :any } []):object{

    const carInfo= {
        manufacturer,
        modelnumber,
        ...Object.assign({}, ...extraOptipon)
    }
    return carInfo;
}
let result = storeCarInfo('Honda', ' civic' , {color: 'Black'}, {features:['Navigation', ' Power window']});
console.log(result);
