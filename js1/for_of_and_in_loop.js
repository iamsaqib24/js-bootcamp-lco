//  for...of loop
//  for...in loop

//  for...of loop -> majorly used for array.
const names = ["YouTube", "Facebook", "Instagram", "Netflix", "Amazon"];

for (const n of names){
    console.log(n); // logs each elements of the array
}


//  for...in loop -> majorly used for object.
const symbols = {
    yt: "YouTube",
    fb: "Facebook",
    ig: "Instagram",
    js: "JavaScript"
};

for (const i in symbols){
    console.log(`keys is : ${i} and value is : ${symbols[i]}`);
}