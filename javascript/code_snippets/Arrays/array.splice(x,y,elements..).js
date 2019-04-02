/**splice(index, count_to_remove, addElement1, addElement2, ...)
 removes elements from an array and (optionally) replaces them.
It returns the items which were removed from the array.**/
var myArray = new Array('1', '2', '3', '4', '5');
myArray.splice(1, 3, 'a', 'b', 'c', 'd');
console.log(myArray);
// myArray is now ["1", "a", "b", "c", "d", "5"]
// This code started at index one (or where the "2" was),
// removed 3 elements there, and then inserted all consecutive
// elements in its place.
