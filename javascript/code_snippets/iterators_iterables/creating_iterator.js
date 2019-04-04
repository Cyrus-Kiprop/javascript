// iterators
function iterator(items){
  var i = 0;
return {
  next: function(){
    var done = (i >= items.length);
    var value = !done ? items[i++] : undefined;

    return {
      done,
      value
    };
  }
};
}
// the closure thing
var closure = iterator([1,434,43,4,3,25,5,6]);
console.log(closure.next());
console.log(closure.next());
