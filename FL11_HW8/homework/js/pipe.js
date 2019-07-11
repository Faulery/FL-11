let addOne = function (x) {
  return x;
};

let pipe = function (n) {
  return (addOne(n) * arguments.length);
};
console.log(pipe(10, addOne(), addOne(), addOne(), addOne()));