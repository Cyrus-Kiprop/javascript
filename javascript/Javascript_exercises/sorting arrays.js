let array = [2,2,345,5,7,6,4,77];
function getSeco_largest(arr1){
  let sorted = arr1.sort((a,b) => b-a);
  console.log(sorted);
  console.log(sorted[sorted.length - 2]);
}
getSeco_largest([2,2,345,5,7,6,4,77]);
const arr3 = [{name:'kiprop', age:42}, {name: 'cyrus', age : 23}];
//arr3.sort();
console.log(arr3.sort(function(a,b){return a.age-b.age}));
