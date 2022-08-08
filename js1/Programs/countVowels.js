// to count vowels present in a string

function countVowels(word){

    let vowelCount = 0;
    let index = 0;
    while(index < word.length){
        let letter = word[index];
        if( letter === "a" ||
            letter === "e" ||
            letter === "i" ||
            letter === "o" ||
            letter === "u" ){
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
