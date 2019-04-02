/** We want to write a program that prints two numbers: the numbers of cows
and chickens on a farm, with the words Cows and Chickens after them and zeros
padded before both numbers so that they are always three digits long.**/
//007 Cows
//011 Chickens//
function printFarmInventory(cows, chickens) {
    let cowString = String(cows);// the sring()method coverts the var cows into strings
    while (cowString.length < 3) {
    cowString = "0" + cowString; //loop that pads the vaue of cows with zeroes if their lenght is less than 3
    }
    console.log(`${cowString} Cows`);
    let chickenString = String(chickens);
    while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`);
    }
    printFarmInventory(7, 11);
    // the above funtioni s ambigiuos and can be written in a more simpler manner.
    //attempt one
    function printZeroPaddedWithLabel(number, label) {
        let numberString = String(number);
        while (numberString.length < 3) {
        numberString = "0" + numberString;
        }
        console.log(`${numberString} ${label}`);
        }
        function printFarmInventory(cows, chickens, pigs) {
        printZeroPaddedWithLabel(cows, "Cows");
        printZeroPaddedWithLabel(chickens, "Chickens");
        printZeroPaddedWithLabel(pigs, "Pigs");
        }
        printFarmInventory(7, 11, 3);
    // aattempt two
    // this can be written in a much simpler manner.
    function zeroPad(number, width) {
let string = String(number);
while (string.length < width) {
string = "0" + string;
}
return string;
}
function printFarmInventory(cows, chickens, pigs) {
console.log(`${zeroPad(cows, 3)} Cows`);
console.log(`${zeroPad(chickens, 3)} Chickens`);
console.log(`${zeroPad(pigs, 3)} Pigs`);
}
printFarmInventory(7, 16, 3);