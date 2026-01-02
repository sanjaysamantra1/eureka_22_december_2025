let str = 'This is javascript class';

console.log(str.split('')); // ['T','h','i','s'...]
console.log(str.split(' ')); // ['This', 'is', 'javascript', 'class' ]
console.log(str.split('java')); // ['This is ', 'script class' ]
console.log(str.split('python')); // ['This is javascript class']
console.log(str.split('This')); // ['' , ' is javascript class']
console.log(str.split('class')); // ['This is javascript ' , '']

