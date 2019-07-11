let getMin = function (a, b, c) {
  let min;
  if (a < b && a < c) {
    min = a;
  }
  if (b < a && b < c) {
    min = b;
  }
  if (c < a && c < b ){
    min = c;
  }
  return min;
};
console.log(getMin(2, -15, -20));