"use strict";
const user_Name = ['Admin', 'Bugs bunny', 'Daffy Duck', 'Sylvester', 'Tweety'];
user_Name.forEach(userName => {
    if (userName === 'Admin') {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${userName}, thank you for logging in Again.`);
    }
});
