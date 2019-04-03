var fname =  Symbol();// creating a symbol
let person = {}; //creating an undefined object

person[fname] = "cyrus";

console.log(person.fname);// undefined
console.log(person[fname]);
console.log(fname);
/** Because symbols are primitive values, you can use the typeof operator to deter-
mine whether a variable contains a symbol **/
console.log(typeof fname);// symbol
