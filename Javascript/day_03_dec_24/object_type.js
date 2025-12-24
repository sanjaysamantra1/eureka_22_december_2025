let a = {};
let b = [];

console.log(`a is of type ${typeof a}`); // object
console.log(`b is of type ${typeof b}`); // object

console.log(Array.isArray(a)); // false
console.log(Array.isArray(b)); // true