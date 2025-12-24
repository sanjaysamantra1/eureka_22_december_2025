const courseName = 'Angular';
console.log(courseName);
// courseName = 'React';  // TypeError: Assignment to constant variable.

const arr = [ 10, 20 ];
arr[0] = 15; // update the value - yes
delete arr[1]; // delete - yes
arr.push(30);  // push - yes
console.log(arr); // [ 15, undefined, 30 ]
// Note : declaraing an array with const will not make the array immutable
// arr = [100,200]; // assigning a new array altogether is not allowed

const user = {name:'alice',add:'bangalore'};
user.name = 'bob';
delete user.add;
user.age = 25;
console.log(user); // { name: 'bob', age: 25 }