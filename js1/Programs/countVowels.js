// to count vowels present in a string

program using while loop
function countVowels(word){
    let vowelCount = 0;
    let index = 0;
    while(index < word.length){
        let letter = word[index];
        if ( letter === "a" ||
            letter === "e" ||
            letter === "i" ||
            letter === "o" ||
            letter === "u" ) {
                vowelCount += 1;
            }
            index++;
    }
    return vowelCount;
}

console.log(countVowels("saqib"));
console.log(countVowels("learning"));
console.log(countVowels("javascript"));
console.log(countVowels("bootcamp"));


// program using for loop and some pre-defined methods.

// function countVowels(word){
//     let vowelsCount = 0;
//     let string = word.toString();

//     for(let i = 0; i < string.length; i++){
//         if (string.charAt(i) === "a" ||
//             string.charAt(i) === "e" ||
//             string.charAt(i) === "i" ||
//             string.charAt(i) === "o" ||
//             string.charAt(i) === "u" ) {
//                 vowelsCount = vowelsCount + 1;
//             }
//     }
//     return vowelsCount;
// }

// console.log(countVowels("bootcamp"));
// console.log(countVowels("learning"));
// console.log(countVowels("javascript"));
