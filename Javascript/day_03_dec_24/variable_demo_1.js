var a = 10;
let b = 20;
const c = 30;
console.log(`a:${a}  b:${b}  c:${c}`);

a = 15;
b = 25;
console.log(`After change,  a:${a}  b:${b}  c:${c}`);

c = 35; // TypeError: Assignment to constant variable.
console.log(`After change,  a:${a}  b:${b}  c:${c}`);