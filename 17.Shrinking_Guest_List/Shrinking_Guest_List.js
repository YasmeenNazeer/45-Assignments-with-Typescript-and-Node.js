"use strict";
let guestList = ['Imran khan', 'Nawaz sharif', 'Asif ali zardari'];
//for(let i=0; i<guestList.length; i++){
// console.log('Dear Mr. ' + guestList[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
//}
let absentGuest = 'Imran khan';
let newGuest = 'Kamran Tessori';
guestList[0] = newGuest;
//for(let i=0; i<guestList.length; i++){
//console.log('Dear Mr. ' + guestList[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
//};
console.log(`Mr.${absentGuest} is not coming to the party. `);
console.log('Good news! we find big table so we are inviting 3 more guests.');
guestList.unshift('Sir Zia Khan');
guestList.splice(2, 0, 'Maryam Nawaz');
guestList.push('Bilawal Bhutto Zardari');
for (let i = 0; i < guestList.length; i++) {
    console.log('Dear Mr. ' + guestList[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
;
console.log('\nSorry we can not arrange big table, so only two peoples will be invited.');
while (guestList.length > 2) {
    let remove_guest = guestList.pop();
    console.log(`Sorry Mr.${remove_guest} you are not invited for dinner. `);
}
for (let i = 0; i < guestList.length; i++) {
    console.log('Dear Mr. ' + guestList[i] + ',\n\nYou are still invited.\n\nThank You!\n\n');
}
;
guestList.splice(0, 2);
console.log(guestList);
