/** when you want to create a symbol to be shared you
have to use the symbol.for() method instead of Symbol() method**/
// creating a symbol to be shared globally using the Symbol.for() method
let name = Symbol('uid'); // create a symbol that can be shared locally. uid is the string string Identifier

let objecta = {};// an empty objecta
objecta[name] = 'Cyrus Kiprop';
console.log(objecta[name]);
console.log(name);
/**Subsequent calls to Symbol.for() using the same key will return the same
symbol, as follows:**/
let name1 = Symbol.for("uid");
let object = {
[name1]: "12345"
};
console.log(object[name1]);
console.log(name);
let name2 = Symbol.for("uid");// this symbol passes in a similar identifier as the one passed in name1 symbol
// "12345"
// "Symbol(uid)"
console.log(name1 === name2);// returns trus because the two symbols share the same string identifier
console.log(object[name2]);
console.log(name2);
// true
// "12345"
// "Symbol(uid)"
//You can also shared string identifiers using the Symbol.keysfor() method for shared global symbols in the registry.
// EXAMPLE
var str = Symbol.for('uid');
console.log(Symbol.keyFor(str));
let str1 = Symbol.for('uid');
console.log(Symbol.keyFor(str1));
let  str2 = Symbol('uid');
//console.log(Symbol.keyFor('str2'));// returns str2 is not a simple.
