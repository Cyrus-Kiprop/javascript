/**
 th ewell know method of iterating overs trings os the length property and the bracket notation

 **/
//example
let string = 'A 𠮷 B';
for (let index = 0; index < string.length; index++) {
    const element = string[index];
    console.log(element);// the output is always unexspected since the double byte is treated as   two separte code units
}
// to get rid of this the string iterators come into place.
//the tweak is to use the for of loop as tweak
//example
for (const iterator of string) {
    console.log(iterator);
    
}