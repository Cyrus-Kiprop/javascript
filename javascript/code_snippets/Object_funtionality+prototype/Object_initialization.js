function object_ini(name, age){
  return {
    name:name,//we have duplication of both p_name and values..that should be a  voided at all cost.
    age:age
  }
}
console.log(object_ini('kiprop Cyrus kiprop', 24));
//consider this example.
function object1(name,age){// This is the property initializer shorthand.
  return {
    name,// this eliminates the duplication that exists between the property values and property names
    age
  }
}
var lr = {name: 'kiprop', age : 89};


console.log(object1('kiprop', 34));
console.log(Object.getOwnPropertyDescriptor(lr, "name"));
console.log(Object.getOwnPropertyNames(lr));
console.log(lr.constructor);
console.log(Object.keys(lr));
