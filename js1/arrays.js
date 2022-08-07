
// Create the array and giving values to it.
var countries = ["India", "Singapore", "Dubai", "Canada", "USA"];

console.log(countries);
console.log("Index value of Dubai is : ", countries.indexOf("Dubai"));  //  Print "Index value of Dubai is : 2"

// Another way of creating the array using 'new' keyword.
var states = new Array("Punjab", "Delhi", "HP", "Rajasthan", "Karnataka");

console.log(states);

// Replacing the value of specific index.
states[4] = "Uttrakhand";
console.log(states);

// Deleting the element from the last.
states.pop();
console.log(states);

countries.pop();
console.log(countries);

// Removing the first element from array.
countries.shift();
console.log(countries);
var shifted = states.shift();
console.log(states);
console.log("Removed element was : ", shifted);

// Adding the first element in the array.
states.unshift("UP");
console.log(states);

// To find 'index' value of an element.
console.log(countries.indexOf("Canada"));
console.log(states.indexOf("UP"));

console.log(countries.indexOf("Japan")); // this will give output as '-1' which shows items not present in the array.