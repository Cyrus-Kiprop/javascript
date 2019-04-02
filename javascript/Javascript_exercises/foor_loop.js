function factorialize(num) {

  var result = num;
  if(num ===0 || num===1){

    return 1;
  }

  while(num > 1){
    num--;
    result =num*result;
  }
  return result;
}

factorialize(5);
