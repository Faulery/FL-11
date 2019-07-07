let a =+ prompt('Enter your a coordinate for triangle sides length', '');
let b =+ prompt('Enter your b coordinate for triangle sides length', '');
let c =+ prompt('Enter your c coordinate for triangle sides length', '');

if (a+b > c && a+c > b && b+c > a && (a > 0 && b > 0 && c > 0)) {
  if (a === b && a === c && b === c) {
    console.log('Equivalent triangle');
  } else if (a === b && b === c || a === c && a === b || b === c && c === a) {
    console.log('Isosceles triangle');
  } else {
    console.log('Normal triangle');
  }
} else {
  console.log('Triangle does not exist')
}