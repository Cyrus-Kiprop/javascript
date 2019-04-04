// to remove or clear every values in a set this two methods are provided
//set.delete(value);
//set.clear();
//example.
let set = new Set();
set.add(1);
set.add('twelve');
set.add([1,2,3,4,5,5,5,'w',23]);
console.log(set.size);
set.delete('twelve');
console.log(set.size);
set.clear();// removes everything from the set
console.log(set.size);


key = {};
set.add(key);
console.log(set.size);
// 1
// eliminate original reference
key = null;
console.log(set.size);
// 1
// get the original reference back
key = [...set][0];
