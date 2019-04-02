// the rest parameter take an n number of arguments.
let numbers = [5, 1, 7];
function max(...numbers) {// a function that takes n number of arguments and returns the mximum number
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
console.log(max(1,3423,3,24));// outputs max value

console.log(max(12,234,45,...numbers, 21,211,21121));/**This “spreads” out the array into the function call, passing its elements as
separate arguments. It is possible to include an array like that along with other
arguments, as in max(9, ...numbers, 2) .**/
//also the squre bracket array notation also allows spreading of characters inot functions toLocaleLowerCase
/**Square bracket array notation similarly allows the triple-dot operator to
spread another array into the new array.**/
let array = ['lilian','Roba','Cyrus'];
let array1 = ['wise',...array, 'understand'];// the content of array is spreaded into array2
console.log(array1);
