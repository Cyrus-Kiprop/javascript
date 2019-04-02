//there are three distinct ways of a creating an array.
//var arr45 = new Array(element0, element1, ... elementN);
//var arr454 = Array(element0, element1, ... elementN);
//var arr4w = [element0, element1, ... elementN];

// creating empty arrays using the three distinct array instantiation ways
let arr =  new Array('arrayLength');
let arr1 = Array('arrayLength');
//this also has the same effect.
let arr2 = [];
arr2.length = 34 ;
//arrayLength should be a number indicating the lenght of that array.

var arr13 = [42];      // Creates an array with only one element:
                     // the number 42.

var arr12 = Array(42); // Creates an array with no elements
                     // and arr.length set to 42; this is
                     // equivalent to:
var arr123 = [];
arr123.length = 42;
console.log(arr123.length);

//arrays can be property of an object.
var obj = {};
// ...
obj.prop = [element0, element1, ... elementN];

// OR
var obj = {prop: [element0, element1, ... elementN]};
