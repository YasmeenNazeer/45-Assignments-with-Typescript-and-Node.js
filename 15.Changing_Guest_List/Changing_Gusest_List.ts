let guestList:string[]= ['Muhammad Yasir','Sameer Ali','Fayaz Ali','Hasnain Ali'];


for(let i=0; i<guestList.length; i++){

console.log("Dear Mr. " + guestList[i] + ',\n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n');


}

let absentGuest:string= "Fayaz Ali";

let newGuest:string= "Nazeer Hussain";
guestList[2]= newGuest;

for(let i=0; i<guestList.length; i++){

    console.log("Dear Mr. " + guestList[i] + ',\n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n');
    
    
    }
    console.log(` Mr. ${absentGuest} is not coming in the party.`);
