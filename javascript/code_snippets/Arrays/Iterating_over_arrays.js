//using for loops
var colors = ['red', 'green', 'blue'];
for (var i = 0; i < colors.length; i++) {//loops through all the items in that particular array
  console.log(colors[i]);
}
//using the forEach() method built in javascript.
let array = [];
colors.forEach(function(color) {
  array.push(color);
});
console.log(array);
// the above forEach method can be further shortend using arrow functions.
array.forEach(color => {console.log(color);});// using the arrow funtion( very sweet)
