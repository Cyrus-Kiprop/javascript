//Bracket notaion allows for string computation and evaluation
var person = {},
lastName = "last name";
person["first name"] = "Nicholas";
person[lastName] = "Zakas";
console.log(person["first name"]);
console.log(person[lastName]);
// "Nicholas"
/**In ECMAScript 6, computed property names are part of the object
literal syntax, and they use the same square bracket notation that has
been used to reference computed property names in object instances**/
//example
var lastname = "kiprop";
var object = {
  fistname:'Cyrus',
  [lastname]:'Nicholas'
}
console.log(object[lastname]);// the bracket syntax allows for computaion of string literals
// the dot.notation does not allow computation and always returns undefined value

/**The square brackets inside the object literal indicate that the property
name is computed, so its contents are evaluated as a string. That means you
can also include expressions, such as the following:**/
var suffix = " name";
var person = {
["first" + suffix]: "Nicholas",
["last" + suffix]: "Zakas"
};
console.log(person["first name"]);
console.log(person["last name"]);
// "Nicholas"
// "Zakas"
