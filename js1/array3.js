
// fill() & filter() methods
// slice() & splice() methods

// 'fill()' method changes all elements in the array to a static value.
var testArray = [1,2,3,4,5,6,7,8,9,10]; // array declared and initialized with some values.
console.log(testArray.fill(0, 1, 5));   // it can have 3 parameters-(value, start_index, end_index). Note: start is inclusive & end is exclusive.

// filter() method creates a new array with all elements that pass test by the provided function.
// in filter() method, you need to pass callback function.
const myNumbers = [12,24,36,48,55,66,77,88,99];
const result = myNumbers.filter(num => num >= 55);  // here, it will filter the values which is greater or equal to 55.
console.log(result); // it will print output as 55,66,77,88,99.

const words = ["Saqib", "Rambo", "Raavi", "Tajinder", "Natasha"];
const result1 = words.filter(word => (word.length > 5)); // here, it will filter the word whose length is greater than 5.
console.log(result1); // it will print output as 'Tajinder', 'Natasha'.


// slice() method is used to cut out the element from the array. and it does not affect the original array.
var users = ["Tom", "Tim", "Cook", "Job", "Steve"];
console.log(users);
console.log(users.slice(1,3)); // it will cut from the start and end. 
console.log(users); // after executing this line you will know 'slice()' method does not affect the original array.

// splice() methods is used to add, update and remove the elements from the array.
// splice(start) :- index from which it will start its operation.
// splice(start, delete_count) :- denotes the number of values to be deleted from the start.
// splice(start, delete_count, "newElement", "newElement_1") :- "newElements" denotes the values that would be added after start.
var fruits = ["Mango", "Banana", "Papaya", "Grapes", "Strawberry", "Kiwi"];
console.log(fruits);
console.log(fruits.splice(2, 3, "Peaches", "Guava"));
console.log(fruits);