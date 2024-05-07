"use strict";
let magacian = ['Herry Potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore'];
function copyArray(arr) {
    return [...arr];
}
function make_Great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = 'The Great ' + magicianArray[i];
    }
}
function make_Magician(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
;
let coppyArray = copyArray(magacian);
make_Great(coppyArray);
console.log('\n\nThis is my original array');
make_Magician(magacian);
console.log('\n\nThis is my modified copy of array');
make_Magician(coppyArray);
