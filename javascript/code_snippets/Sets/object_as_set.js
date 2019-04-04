// implementation of sets in the previous ecma 5 and  below
var set =  Object.create(null);
set.foo = true;
// retrieving
var value1 =  set.foo;
console.log(value1);
// implementation of maps in the previous ecma 5 and  below
var map = Object.create(null);
map.foo =  "bar";
var value2 = map.foo;
console.log(value2);

/** the onsly difference between a set and a map object property is the value the each store.
Unlike sets,
maps are mostly used to retrieve information rather than just to check for
the key’s existence.**/
