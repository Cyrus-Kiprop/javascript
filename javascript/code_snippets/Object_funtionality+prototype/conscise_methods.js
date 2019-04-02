//consder this methods assigned to an object.
var object = {
  name : 'kiproop',
  sayName: function(){
    console.log(this.name);
  }
}
console.log(object);
// the Ecma 6 version
var object2 = {
  name: "kiprop",
  sayName(){
    console.log(this.name);
  }
}
console.log(object2);
