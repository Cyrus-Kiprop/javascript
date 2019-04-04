//creation of  a map bounded to the variable map
let map = new Map();
//adding item s to the map using the set methods
map.set('name', 'Cyrus kiprop');// the first value is taken as tthe key while the second ne becomes the value
map.set('age',24);
console.log(map);
//using ojects as keys
let map2 = new Map();
key = {};
keys = {};

map2.set(key);
map2.set(keys);
console.log(map2.size);

// consider the following example
// the has() and set and get() methods
map.get('name');
console.log(map.has('name'));
console.log(map.get('age'));
console.log(map.delete('name'));
console.log(map.clear());
console.log(map.size);
