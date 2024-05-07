"use strict";
let magacian = ['Herry Potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore'];
function make_Great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magacian[i] = 'The great ' + magicianArray[i];
    }
}
function make_Magician(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
;
make_Great(magacian);
make_Magician(magacian);
