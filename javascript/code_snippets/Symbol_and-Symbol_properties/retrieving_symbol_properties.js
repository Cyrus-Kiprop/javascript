// retrieving objects in a symbol
const object1 = {};
const a = Symbol('a');
const b = Symbol.for('b');

object1[a] = 'localSymbol';
object1[b] = 'globalSymbol';

const objectSymbols = Object.getOwnPropertySymbols(object1);
console.log(objectSymbols);
console.log(objectSymbols.length);
// expected output: 2
var obj = {};
var c = Symbol('a');
var d = Symbol.for('b');

obj[c] = 'localSymbol';
obj[d] = 'globalSymbol';

var objectSymbols1 = Object.getOwnPropertySymbols(obj);
console.log(Object.keys(obj));// this rerutn an empty array
console.log(Object.getOwnPropertyNames(obj));// this returns an empty array.

console.log(objectSymbols1.length); // 2
console.log(objectSymbols1);        // [Symbol(a), Symbol(b)]
console.log(objectSymbols1[0]);     // Symbol(a)
