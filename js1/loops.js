//  For loop
//  While loop
//  Do while loop

const states = new Array(
    "Punjab",
    "Rajasthan",
    "HP",
    123,
    "UP",
    "Maharashtra",
);

//  For loop 
for (let index = 0; index < states.length; index++) {
    if(typeof states[index] !== "string") continue;
    console.log(states[index]);
}

//  While loop
// let i = 0;
// while( i < states.length ){
//     console.log(states[i]);
//     i++;
// }

//  Do while loop
// let n = 0;
// do {
//     console.log(states[n]);
//     n++;
// }while ( n < states.length)