"use strict";
function storeCarInfo(manufacturer, modelnumber, ...extraOptipon) {
    const carInfo = Object.assign({ manufacturer,
        modelnumber }, Object.assign({}, ...extraOptipon));
    return carInfo;
}
let result = storeCarInfo('Honda', ' civic', { color: 'Black' }, { features: ['Navigation', ' Power window'] });
console.log(result);
