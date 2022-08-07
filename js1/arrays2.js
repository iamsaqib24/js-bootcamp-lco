
// First way or the easiest way
var isEven = (element) => {
//     if(element % 2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
    return element%2 === 0;
}
console.log(isEven(5));     // print 'true' bcz '4' is even which we have passed.

// Another way of doing the same task using inbuilt 'every' method.
var result = [2, 3, 6, 8].every(isEven);    // this will check every element like for loop.
console.log(result);    // print 'false' as output bcz '3' is not even.

var result1 = [2, 4, 6, 8].every(isEven);   // this will check every element like for loop.
console.log(result1);   // print 'true' as output.

// Another way of doing the same without declare the function as above but using 'callback arrow function'.
var result2 = [2, 4, 6, 8, 43].every((e1) => (e1 % 2 === 0));
console.log(result2);   // print 'false' as output bcz '43' is not even.