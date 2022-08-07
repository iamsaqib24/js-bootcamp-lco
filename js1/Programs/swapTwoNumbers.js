// WAP to Swap Two Numbers

// Example 1: Using temporary variable

// taking input from the users
let a = prompt("Enter the value of a : ");
let b = prompt("Enter the value of b : ");

let temp;   // creating the temp variable

// swapping variables
temp = a;
a = b;
b = temp;

console.log(`Value of a after swapping is : ${a}`);
console.log(`Value of b after swapping is : ${b}`);


// Example 2: Using Arithmetic Operators

//take input from the users
let a = parseInt(prompt('Enter the first variable: '));
let b = parseInt(prompt('Enter the second variable: '));

// addition and subtraction operator
a = a + b;
b = a - b;
a = a - b;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);