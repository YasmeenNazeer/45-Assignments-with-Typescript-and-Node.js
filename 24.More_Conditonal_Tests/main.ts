// equality and unequality test  1
console.log("Equality test with strings: " ,  'Apple'=== 'Apple');

// equality and unequality test  2
console.log("Inquality test with strings: " ,  ('Apple' as string)!= 'Orange'); //will print true 

// test using lower case function
console.log("Test using Lower Case function: ", 'HELLO'.toLowerCase()=== 'hello' ); // will print true

// numerical test using equality 
console.log("Equality test with numbers: " ,  7===7);
// numerical test using inwquakity
console.log("Inequlaity test with numbers: " , ( 7 as number)!=9);

// greater then test
console.log("Greater then test: " , 9>7);
// less then test
console.log("Less the test: " , 10 < 12);

// greater then test with equality and inequality
console.log("Greater then and equal to test: " , 10>= 10);
console.log("Greater then and equal to test: " , 11>= 10);
// less then equal to
console.log("Less then and equal to: " , 6 <= 6);
console.log("Less then and equal to: " , 4 <= 6);
// test using "and" and "or" operator.
console.log("And operator test: " , 5===5 && 15>10);
console.log("Or operator test: " , 2>1 || 1>2);
// test wether an item is in array
const fruits:string[]= ['Mango', 'Apple', 'Bananana']
console.log("Test 'Mango' in the array: " , fruits.includes('Mango'));
// test wether an item is not in an array
console.log("Test 'Orange' in the array: " , fruits.includes('Orange'));  // will print false
console.log("Test 'Orange' in the array: " , !fruits.includes('Orange'));  // will print true
