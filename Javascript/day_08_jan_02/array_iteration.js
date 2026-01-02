let cars = ['Tata', 'Honda', 'Maruti', 'Toyota'];

// 1. for loop
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
console.log('=============================')

// 2. for-in
for (i in cars) { // cars is array , i represents index
    console.log(cars[i]);
}
console.log('=============================')


// 3. for-of
for (car of cars) {
    console.log(car)
}
console.log('=============================')

// 4. forEach()
cars.forEach((val,ind,arr) => {
    console.log(val,ind,arr)
})