// Task 1

const array = [1, 2, 3, 4, 56, 7, 8, 76, 5, 241, 5, 356, 567, 2];
maxElement = array => Math.max.apply(null, array);
console.log(maxElement(array));

// Task 2

copyArray = (array) => {
  let copiedArray = [];
  for (let i = 0; i < array.length; i++) {
    copiedArray.push(array[i]);
  }
  return copiedArray;
};
const copiedArray = copyArray(array);
console.log(array, copiedArray);
console.log(array === copiedArray);

// Task 3

addUID = object => {
  const uniqueID = Symbol('ID');
  return Object.assign({UID: uniqueID}, object);
};
console.log(addUID({name: 123}));

// Task 4

const oldObj = {name: 'Someone', details: {id: 1, age: 11, university: 'UNI'}};
regroupObject = object => {
  const {name: firstName, details: {id, age, university}} = object;
  return {university, user: {age, firstName, id}};
};
console.log(regroupObject(oldObj));

// Task 5

findUniqueElements = (...array) => Array.from(new Set(array));
console.log(findUniqueElements(1, 1, 23, 3, 4, 5, 6, 5, 4, 23, 2, 1, 1, 1, 1, 1));

// Task 6

hideNumbers = phone => phone.slice(-4).padStart(phone.length, '*');
console.log(hideNumbers('0123456789'));

// Task 7

add = (a, b) => {
  if (a !== undefined && b !== undefined) {
    return a + b;
  } else {
    return new Error('You missed parameter');
  }
};
console.log(add(1));

// Task 8

callResponse = url => {
  return fetch(url)
    .then((result) => {
        result.json()
          .then((response) => {
              let result = response.map(rep => rep.name);
              result.sort((a, b) => {
                if (a.name > b.name) {
                  return 1;
                }
                if (a.name < b.name) {
                  return -1;
                }
                return 0;
              });
              console.log(result);
            }
          )
      }
    )
    .catch(
      (error) => {
        console.log(`Something gone wrong: ${error}`);
      }
    );
};
console.log(callResponse('https://api.github.com/users/Faulery/repos'));

// Task 9

callAsyncResponse = async url => {
  try {
    const request = await fetch(url);
    const response = await request.json();
    let result = response.map(rep => rep.name);
    result.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    console.log(result);
  } catch (error) {
    console.log(`Something gone wrong: ${error}`);
  }
};
console.log(callAsyncResponse('https://api.github.com/users/Faulery/repos'));