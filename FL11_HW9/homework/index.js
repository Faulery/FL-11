let getNumbers = function (string) {
  let numbers = [];
  for (let i = 0; i < string.length; i++) {
    if (parseInt(string[i])) {
      numbers.push(string[i]);
    }
  }
  return numbers;
};
let findTypes = function () {
  let types = [];
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] in types) {
      types[typeof arguments[i]] += 1;
    } else {
      types[typeof arguments[i]] = 1;
    }
  }
  return types;
};
let executeForEach = function (array, func) {
  for (let i = 0; i < array.length; i++) {
    func(array[i]);
  }
};
let mapArray = function (array, func) {
  let transformed = [];
  executeForEach(array, function(el) {
    transformed.push(func(el));
  });
  return transformed;
};
let filterArray = function (array, func) {
  let filtered = [];
  executeForEach(array, function(el) {
      filtered.push(func(el));
  });
  return filtered;
};
let showFormattedDate = function (date) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  return `Date: ${months[month]} ${day} ${year}`;
};
let canConvertToDate = function (date) {
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  return day === parseInt(day) && month === parseInt(month) && year === parseInt(year);
};
let daysBetween = function (firstDate, secondDate) {
  const MS_IN_DAY = 8.64e+7;
  let first = firstDate.getTime();
  let second = secondDate.getTime();
  let difference = first - second;
  return Math.round(difference / MS_IN_DAY);
};
let getAmountOfAdultPeople = function (data) {
  const EIGHTEEN = 5.676e+11;
  let overEighteen = 0;
  for (let i = 0; i < data.length; i++) {
    let difference = new Date().getTime() - new Date(data[i].birthday).getTime();
    difference = new Date(difference);
    if (difference > EIGHTEEN) {
      overEighteen ++;
    }
  }
  return overEighteen;
};
let data = [
  {
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    'birthday': '2016-03-18T00:00:00',
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    'birthday': '1991-02-11T00:00:00',
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
  },
  {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    'birthday': '1984-04-17T00:00:00',
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    'birthday': '1994-04-17T00:00:00',
    'eyeColor': 'green',
    'name': 'George',
    'favoriteFruit': 'banana'
  }
];
let getKeys = function (keys) {
  let res = [];
  for (let prop in keys) {
    if (keys.hasOwnProperty(prop)) {
      res.push(prop);
    }
  }
  return res;
};
let getValues = function (values) {
  let res = [];
  for(let val in values) {
    if (values.hasOwnProperty(val)) {
      res.push(values[val]);
    }
  }
  return res;
};