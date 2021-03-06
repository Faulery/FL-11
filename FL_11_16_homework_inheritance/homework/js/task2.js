function create (proto, propertiesObject) {
  if (typeof proto !== 'object' && typeof proto !== 'function') {
    throw new TypeError('Object prototype may only be an Object: ' + proto);
  } else if (proto === null) {
    throw new Error("This browser's implementation of Object.create" +
      "is a shim and doesn't support 'null' as the first argument.");
  }

  if (typeof propertiesObject !== 'undefined') {
    throw new Error("This browser's implementation of Object.create is" +
      "a shim and doesn't support a second argument.");
  }

  function F() {

  }

  F.prototype = proto;

  return new F();
}

const obj1 = {prop: 5};
const obj2 = create(obj1);
console.log(Object.getPrototypeOf(obj2) === obj1);
console.log(obj2.prop);