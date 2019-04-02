function isEven(number) {
    if (number < 0) {
        return isEven(-number);// converts the number to a positive value and then check for it's eveness.
    } else if (number == 1) {
        return false;
    } else if  (number == 0) {
        return true;
    } else {
        return isEven(number - 2);// recursive function call that loops and substracts the number till it evaluate to zero or one and check for its evenenss
    }
}
console.log(isEven(50)); // true
console.log(isEven(75)); // false
console.log(isEven(-1)); // false
