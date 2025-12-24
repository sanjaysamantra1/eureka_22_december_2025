// Primitives are compared by value
console.log(10 == 10); // true
console.log('javascript' == 'javascript'); // true
console.log(true == true); // true

// Non-primitives are compared by address
console.log("===================")
console.log([10, 20] == [10, 20]); // false
console.log([] == []); // false
console.log({} == {}); // false
console.log({ a: 10, b: 20 } == { a: 10, b: 20 }); // false

console.log("===================")
// lets compare null value with null value
console.log(null == null); //true