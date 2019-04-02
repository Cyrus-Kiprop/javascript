// a function that takes two arguments and  returns the minimum of two arguents
function return_min(x,y){
  console.log(Math.min(x,y));
} 
return_min(12,267);


function countBs(str, letter) 
{
 var letter_Count = 0;
 for (var letter_position = 0; letter_position < str.length; letter_position++) 
 {
    if (str.charAt(letter_position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}
console.log(countBs("lakehuBAcademybbBB", "B"));
