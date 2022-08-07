//  Objects in JavaScript
//  let's create an object with name 'myMobile'
//  and it store data in 'key:value' pairs

var myMobile = {
    company: "Apple",
    model: "iPhone Xr",
    color: "Black",
    storage: "128GB",
    chip: "A12 Bionic",
    purchasedYear: 2020,
    faceID: true,
};

console.log(myMobile.model);
console.log(myMobile["chip"]);

myMobile.storage = "64GB";  // assigning the new value to 'storage' key

console.log(myMobile.storage);

console.table(myMobile);    // printing in table format
