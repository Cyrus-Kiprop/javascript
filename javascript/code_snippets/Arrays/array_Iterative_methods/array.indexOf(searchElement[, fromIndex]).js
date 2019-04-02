var a = ['a', 'b', 'a', 'b', 'a'];
console.log(a.indexOf('b')); // logs 1
// Now try again, starting from after the last match
console.log(a.indexOf('b', 2)); // 2 indicates the start index at which the elments should be serached
console.log(a.indexOf('z')); // logs -1, because 'z' was not found
