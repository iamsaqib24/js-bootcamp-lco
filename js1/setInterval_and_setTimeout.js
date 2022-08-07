//  setTimeout() & setInterval()
//  Both setTimeout() and setInterval() are built-in methods of the global object on the Document Object Model to schedule tasks at a set time.

//  setTimeout() calls a passed-in function once after a specified delay.
//  using callback function
// setTimeout(() => {
//     console.log("Hello Saqib");
// }, 6000);

// function myName() {
//     console.log("Saqib");
// }
// setTimeout(myName, 2500);

//  setInterval() method calls a function at specified intervals (in milliseconds).
//  setInterval() method continues calling the function until clearInterval() is called, or the window is closed.
let i = 1;
setInterval(() => {
    if(i < 5){
    i++;
    console.log(i);
    }
}, 1500);