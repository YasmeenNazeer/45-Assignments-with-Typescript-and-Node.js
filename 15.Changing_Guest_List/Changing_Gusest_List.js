"use strict";
let guestList = ['Muhammad Yasir', 'Sameer Ali', 'Fayaz Ali', 'Hasnain Ali'];
for (let i = 0; i < guestList.length; i++) {
    console.log("Dear Mr. " + guestList[i] + ',\n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n');
}
let absentGuest = "Fayaz Ali";
let newGuest = "Nazeer Hussain";
guestList[2] = newGuest;
for (let i = 0; i < guestList.length; i++) {
    console.log("Dear Mr. " + guestList[i] + ',\n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n');
}
console.log(` Mr. ${absentGuest} is not coming in the party.`);
