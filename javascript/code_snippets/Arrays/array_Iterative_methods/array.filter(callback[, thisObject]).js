var a1 = ['a', 10, 'b', 20, 'c', 30];
var a2 = [];
a2 = a1.filter(item => {
  return typeof item === 'string';
});
console.log(a2);
