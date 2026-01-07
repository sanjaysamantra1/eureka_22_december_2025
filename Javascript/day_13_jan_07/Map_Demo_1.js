// Map is a class
// To store data in key:value pair
// map is better than object

let str = 'entertainment';

// using object
let charObj = {}
for (char of str) {
    if (charObj[char]) {
        charObj[char] = charObj[char] + 1;
    } else {
        charObj[char] = 1;
    }
}
console.log(charObj)


// using map
let charMap = new Map();
for (char of str) {
    if (charMap.has(char)) {
        charMap.set(char, charMap.get(char) + 1)
    } else {
        charMap.set(char, 1);
    }
}
console.log(charMap)