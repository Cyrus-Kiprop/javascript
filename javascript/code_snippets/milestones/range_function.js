//console.log(sum(range(2-20)));
//lets create a funtion that implements the range() method
function range(start, end) {
    var arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}
var array2 = [5,8,2,9,5,6,3,1];
console.log(range(1,10));
//successful implentation of the range funtion using for loops.
//a funtion that sums the numbers contained in an array.
function sum(array){
  let x = 0;
  for (var i = 0; i < array.length; i++) {
    x += array[i];
  }
  console.log(x);

}
sum(range(1,10));
