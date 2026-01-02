// arr.splice(index , #Elements to remove, ...elements to insert)
// splice: 1. only delete   2. only insert     3. both delete and insert

let arr = [10, 20, 30, 40, 50];
console.log('Before Delete: ', arr);
arr.splice(1, 2);  // only delete
console.log('After Delete: ', arr);  // [ 10, 40, 50 ]
arr.splice(1, 0, 20, 30); // only add
console.log('After Added: ', arr);  // [ 10, 20, 30, 40, 50 ]
arr.splice(2, 2, 35, 45); // both delete and add
console.log(arr)

let cars = ['Tata', 'Honda', 'Maruti'];
let newCars = cars.toSpliced(1, 0, 'Toyota');
console.log(cars)
console.log(newCars)


let numArr = [10, 20, 30, 40, 50, 60, 70, 80]
console.log(numArr.slice(2, 5)); // [30, 40, 50]