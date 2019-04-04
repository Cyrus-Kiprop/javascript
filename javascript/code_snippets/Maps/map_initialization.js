// maps can be initialised by passing an array using the map constructor
// consider the following example
var map = new Map([['name','kiprop'],['age',554],['car_type','toyota double cabiin']]);// instantiating a map by passing an array to the constructor
console.log(map.has('name'));
console.log(map.get('car_type'));
map.delete('age');
console.log(map.get('age'));
console.log(map.size);
