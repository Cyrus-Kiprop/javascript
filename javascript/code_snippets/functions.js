let userNumber = Number(prompt("please enter a number"));
if (!Number_isNaN(userNumber)){// VALIIDAES WHETHER THE USER INPUT IS A NUMBER. IF THE LATTER IS NOT TRUE THE INPUT IS INGORED
    console.log ("the sqaure of your number is " + userNumber * userNumber );
}else{
    console.log("please enter a number and tyr again"); // the if statement gives an alternative incase the user enters a value that is not a nunmber

}
//IN JAVASCIPT ONE CAN USE MULTIPLE NESTED IF STATEMENT TO INFLUENCE THE OUTCOME OF CERTIAN FUNCTION OR EXAMPLE


//example 2 nested if else statement

let theNumber = (Number(prompt("enter a number"));// take  a value from the user
if (Number.isNaN(theNumber)){// checks whether that user value is a number then the rest of the code follows
    console.log("please ensure that you have entered a number")
} else if (theNumber < 100) {
    console.log( "that number is less than 100 ")
}
else if (100 <= theNumber <=1000 ){
    console("the  number is between the value 100 and 1000")
} else {
    console.log("the number is a large number probably greater than 1000")
}


//FUNCTIONS
const square = function(x){// this line declares a function named square that take in a value and binds it to x and the retrns the the square of that nuber
    return x * x
}

console.log(square(12));// this line invokes the function square by passing the value 12 s its parameter.
