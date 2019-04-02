/**var str = "Visit W3Schools";
var n = str.search(/w3schools/i);//using the search operator with regular expression
console.log(n);**/
//Using replace Method with strings and regiular expression
/** var str = "Visit Microsoft!";
var rep = str.replace("Microsoft", "W3schools");
console.log(rep);**/
//using the string.replace() with a regular_expression.
let str = "imagine i'm practicing regular_expression!";
let str2 = str.replace(/regular_expRession/i, 'reg_expression');// i stand for case insensitivity regular expression
console.log(str2);
//REGULAR EXPRESSION MODIFIERS./
//WE HAVE THE I G AND M MODIFERS./(THE I MODIFIER IS EXPALINED )
// THE G MODIFIER(STANDS GLOBAL SEARCH)
//globals search incorporated with case insensitive replace methods
let string1 = "i am the only one to just program only javascripts in regular expressions"
let string2 =string1.replace(/only/gi, 'wizard');// searches for all the values that match the keyword only and replafces it with wizard
console.log(string2);
// the third modifiers is the multiline modifiers wchich enables a search or relace to happern in multiple lineof code.
// consider the following string with multiple strings.
let string3 = `1st place: Winnie
2nd place: Piglet
33rd place: Eeyore`;// assigning multiple lines of strings to a variable
 let string4 = string3.match(/^\d+/gm)//searches for numbers glonally.
 console.log(string4);//the string match is used to match characters with the help of a reg-expressions.
 //matching using the dollar assigning
 let str12 = `1st place: Winnie
2nd place: Pigletp
33rd place: Eeyoree`;
let str11 = str12.match(/^\w+$/gim);
console.log(str11);
/**Complete the function in the editor below by returning a RegExp object, ,
that matches any string  that begins and ends with the same vowel.
Recall that the English vowels are a, e, i, o, and u.**/
let reg = /^([aeiou]).*\1$/gim;
let re = /^(Mr|Mrs|Ms|Dr|Er)(\.)([a-zA-Z])*$/gim;
