"use strict";
// write a series of conditional test
// creating car variable
let car = 'Subaru';
// conditional test 1
console.log("Is car==='Subaru'? I predict true."); // === k sth 
console.log(car === 'Subaru');
//conditonal test 2
console.log("Is car=='Subaru'? I predict true."); // == k sth
console.log(car == 'Subaru');
// test 3 
console.log("Is car!='Honda'? I predict true."); // != not equal k sth
console.log(car != 'Honda');
//test 4
console.log("Is car!=='ford'? I predict true."); // !== not equal k sth
console.log(car !== 'ford');
// test 5
console.log("Is car.Upper case=='SUBARU'? I predict true."); // UPPER CASE MA CHNG KR DIA or check kia k barabar h ya nhi
console.log(car.toUpperCase() == 'SUBARU');
//test 6
console.log("Is car.Lower case=='SUBARU'? I predict false."); // q k subaru upper case ma h to false ho jye g yaha
console.log(car == 'SUBARU');
//test 7
console.log("Is car =='SUBARU'? I predict false.");
console.log(car == 'SUBARU');
//test 8 
console.log("Is car =='train'? I predict false.");
console.log(car == 'train');
// test 9
console.log("Is car =='bus'? I predict false.");
console.log(car == 'bus');
// test10
console.log("Is car !='Subaru'? I predict false.");
console.log(car != 'Subaru');
