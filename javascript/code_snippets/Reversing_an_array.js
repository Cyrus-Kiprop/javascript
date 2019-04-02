//reversing the values of a character without using the reverse method
//let declare two variables at first
var array1 = ["yes", "no", "maybe", "always", "sometimes", "never", "if"];
var array2 = [5,8,2,9,5,6,3,1];
//lets declare an empty array that will hold the reversed values of the previous arrays
var newArray = [];
//lets decalare a variable that will indicate the indicate the last index of an array.

function reverseArray(arr){
  var i = arr.length - 1;
  for (var i = arr.length; i >= 0; i--) {
    newArray.push(arr[i]);// pushes the last value of the arr into the newarray.
  }
  console.log(newArray);//prints to the stdout the values of the newArray.
}
reverseArray(array1);
