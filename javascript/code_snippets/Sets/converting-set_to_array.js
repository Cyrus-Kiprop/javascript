//
let set = new Set([21,23,4,3,4,5,23,3,5,6,5,5,5]);
array = [...set] // using the spread utility
console.log(array);// th elogged does not contain duplicates.
 // the above feature can be used to elimate the duplications found in arrays
 //consider the following code snippet

 function remove_duplicate(data_array){
   let array2 = [... new Set(data_array)];// boom the holy grail of the function--- very sweet
   console.log(array2);
 }
remove_duplicate(set);
