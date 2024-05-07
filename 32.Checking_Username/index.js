"use strict";
let current_Users = ['TaHa', 'DaNiyal', 'SalMan', 'Hamzah', 'John'];
let new_Users = ['Bilal', 'TaHa', 'Dawood', 'jameel', 'Hamzah'];
new_Users.forEach(newUsername => {
    let lowerCase = newUsername.toLowerCase();
    if (current_Users.map(c_user => c_user.toLowerCase()).includes(lowerCase)) {
        console.log(`The username ${newUsername} is not available. Please use a different username`);
    }
    else {
        console.log(`The username ${newUsername} is available.`);
    }
});
