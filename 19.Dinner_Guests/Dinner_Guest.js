//let guestList:string[]= ['Imran khan', 'Nawaz sharif', 'Asif ali zardari'];
//for(let i=0; i<guestList.length; i++){
// console.log('Dear Mr. ' + guestList[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
//}
//let absentGuest:string='Imran khan';
//let newGuest:string= 'Kamran Tessori';
//guestList[0]=newGuest;
//for(let i=0; i<guestList.length; i++){
//console.log('Dear Mr. ' + guestList[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
//};
// console.log(`Mr.${absentGuest} is not coming to the party. `)
// console.log('Good news! we find big table so we are inviting 3 more guests.');
//guestList.unshift('Sir Zia Khan');
//guestList.splice(2,0, 'Maryam Nawaz');
//guestList.push('Bilawal Bhutto Zardari');
// for(let i=0; i<guestList.length; i++){
//     console.log('Dear Mr. ' + guestList[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// };
//sorry message to guests for not inviting.
//console.log('\nSorry we can not arrange big table, so only two peoples will be invited.');
//mana yahan pa guest remove kia han.
//while(guestList.length >2);
//{
// let remove_guest= guestList.pop();
//console.log(`Sorry Mr.${remove_guest} you are not invited for dinner. `);
//}
//hamare bache hue 2 invivted guest
// for(let i=0; i<guestList.length; i++){
//     console.log('Dear Mr. ' + guestList[i] + ',\n\nYou are still invited.\n\nThank You!\n\n')
// };
//mana sare guest array sa remove kar dia ha
//guestList.splice(0,2);
//console.log(guestList);
// exercise 19
//print a message indicating the number of people you are inviting to dinner
//console.log(`Total number of Guests are ${guestList.length}`);
let guest_List = ['yasmeen', 'fiza', 'hasnain', 'sameer', 'yasir'];
let absent_Guest = "yasir";
let new_Guest = "fayaz";
guest_List[4] = new_Guest;
guest_List.unshift("hira", "sara", "farha");
while (guest_List.length) {
    let remove_guest = guest_List.pop();
}
guest_List.splice(0, 2);
console.log(guest_List);
console.log(`Total number of guests are ${guest_List.length}`);
export {};
