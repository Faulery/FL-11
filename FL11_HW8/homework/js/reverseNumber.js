let reverseNumber = function (number) {
  let lastN, result = 0;
  while(number){ // Do it again with the rest
    lastN = number % 10; // The division of any number into 10 with the remainder will return the last number
    result = (result * 10) + lastN; // Put our last number into result
    number = number/10|0; //The division into 10 without the remainder will remove the last number from the rest
  }
  return result;
};
console.log(reverseNumber(1234));