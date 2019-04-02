// the two function JSON.parse and JSON.stringify.
//JSON.stringify ~this function takes a value and returns a JSON-encoded strings
//JSON.parse ~this fucntion takes in the JSON-encoded string and converts it back to the value it encodes.
//exmple
let string = JSON.stringify({squirrel: false,
events: ["weekend"]});
console.log(string);
// → {"squirrel":false,"events":["weekend"]}
console.log(JSON.parse(string).events);
