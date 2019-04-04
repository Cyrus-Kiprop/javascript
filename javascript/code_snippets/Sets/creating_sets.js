let set1 =  new Set();//  using the set constructor to create a  new set.
set1.add('5');
set1.add('kiprop');
set1.add(24);
console.log(set1.size);// displays the number of items in the set1

// sets dont ussually coerce data
// EXAMPLE
let set2 = new Set();
let obj1 = {};
let obj2 = {};
set2.add(obj1);
set2.add(obj2);
console.log(set2.size);// in sets there is no cohercion at all

let set = new Set();
set.add(5);
set.add("5");
set.add(5); // duplicate - this is ignored
console.log(set.size);// in sets there are no duplications and cohercions since the values arent converted to strings
// 2
//consider this set constructor initialised with an array with duplicate values.
let set3 =  new Set([1,3,2,4,5,6,6,6,7]); //the set contains 10 elements but only 7 are used in the set
console.log(set3.size);
