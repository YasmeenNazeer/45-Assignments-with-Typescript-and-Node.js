"use strict";
function make_Shirts(size = 'large', text = 'I love typescript') {
    console.log(`Creating a ${size} shirt with a message ${text}.`);
}
make_Shirts();
make_Shirts('mediumt');
make_Shirts('small', 'I love python');
