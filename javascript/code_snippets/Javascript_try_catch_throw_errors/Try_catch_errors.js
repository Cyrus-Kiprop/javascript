/** The try statement lets you test a block of code for errors.

The catch statement lets you handle the error.

The throw statement lets you create custom errors.

The finally statement lets you execute code, after try and catch, regardless of the result.**/
// try and catch block syntax
try {
//  Block of code to try
}
catch(err) {
  //Block of code to handle errors
}
function reverseString(s) {
    try {
        let array = s.split("");
        array.reverse();
        s = array.join("");
    } catch (e) {
        console.log(e.message);
    } finally {
        console.log(s);
    }
}
reverseString(1234);
