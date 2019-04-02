//oins all elements of an array into a string with a specified delimiter.
var elements = ['Fire', 'Wind', 'Rain'];

console.log(elements.join());
// expected output: "Fire,Wind,Rain"

console.log(elements.join(''));
// expected output: "FireWindRain"

console.log(elements.join('-'));
// expected output: "Fire-Wind-Rain"
