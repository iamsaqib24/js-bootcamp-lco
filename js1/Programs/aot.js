// Example 1 : Area when base and height is known,

const base = prompt("Enter the base of a triangle : ");
const height = prompt("Enter the height of a triangle : ");

// const base = 4;
// const height = 3;


const area = (base * height) / 2;

console.log(`Area of triangle is : ${area}`);

// Example 2 : Area when all sides are known, using heron's formula.

const s1 = prompt("Enter side1 ");
const s2 = prompt("Enter side2 ");
const s3 = prompt("Enter side3 ");

const s = (s1 + s2 + s3) / 2;

const aot = Math.sqrt(s * (s - s1) * (s - s2) * (s - s3));

console.log(`Area of triangle is : ${aot}`);