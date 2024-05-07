let guestList:string[]= ['Imran khan', 'Nawaz sharif', 'Asif ali zardari'];
//for(let i=0; i<guestList.length; i++){
   // console.log('Dear Mr. ' + guestList[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')

//}
let absentGuest:string='Imran khan';
let newGuest:string= 'Kamran Tessori';
guestList[0]=newGuest;

for(let i=0; i<guestList.length; i++){
    console.log('Dear Mr. ' + guestList[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')

};
console.log(`Mr.${absentGuest} is not coming to the party. `)
console.log('Good news! we find big table so we are inviting 3 more guests.');
guestList.unshift('Sir Zia Khan');
guestList.splice(2,0, 'Maryam Nawaz');
guestList.push('Bilawal Bhutto Zardari');

for(let i=0; i<guestList.length; i++){
    console.log('Dear Mr. ' + guestList[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')

};


