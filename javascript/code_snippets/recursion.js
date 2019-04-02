// a program to calculate the power  of
function power(base, exponent){
  if (exponent === 0) {
    return 1;
  }
  else {
    return base * power(base, exponent - 1);
  }
}
console.log(power(6, 2));


function reverse(str){
  if (str.length <= 1){
    return str;
  }
  else {
    return reverse(str.substr(1)) + str[0];
  }
} reverse("bar");
let str1 = '#######';
function triangle(str1){
  if (str1 <= 1) {
    return null;
  }else {
    console.log();
  }
}
