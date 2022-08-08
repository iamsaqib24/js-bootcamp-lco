// WAF that takes arrays of numbers and return new array where every element of original array is multiplied by 2.

function doubler(numbers) {
    let newArray = [];

    for(let i = 0; i < numbers.length; i++) {
        newArray.push(numbers[i] * 2);
    }
    return newArray;
}

console.log(newArray([2,3,4,5,6]));
console.log(newArray([1,5,6,7]));
