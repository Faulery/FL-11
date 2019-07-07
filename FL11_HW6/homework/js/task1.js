let a1 =+ prompt('Enter your aX coordinate');
let a2 =+ prompt('Enter your aY coordinate');
let b1 =+ prompt('Enter your bX coordinate');
let b2 =+ prompt('Enter your bY coordinate');
let c1 =+ prompt('Enter your cX coordinate');
let c2 =+ prompt('Enter your cY coordinate');
const HALF = 2;

console.log('You have chosen 6 coordinates: ' + a1, a2, b1, b2, c1, c2);

let cX = (a1 + b1) / HALF;
let cY = (a2 + b2) / HALF;

let result = c1 === cX && c2 === cY;
console.log(result);