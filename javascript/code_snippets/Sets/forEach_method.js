// the set constructor takes in an array
let set =  new Set([1,3,2,4,5,6,6,6,7]);
set.forEach(keys => {
  console.log(` ${keys} `);
});
// version 2
set.forEach((key, value, ownerset) => {
  console.log(key + ' ' + value +' ' + ownerset);
  console.log(ownerset === set);// check the belongingity of the set values
});

let processor = {
  output(value){
    console.log(value);
  },
  process(dataset){
    dataset.forEach(value => {
      this.output(value);
    });
  }
};
processor.process(set);
// without usin the arrow funtions.
let thisobject = {
  output1(value1){
    console.log(value1);
  },
  elements(data_set){
    data_set.forEach(function(value1){// the for each statement takes in two parameters in this case.
      this.output1(value1);
    }, this
    );
  }
};
thisobject.elements(set);
// the following is the output
/**
1 1 [object Set]
true
3 3 [object Set]
true
2 2 [object Set]
true
4 4 [object Set]
true
5 5 [object Set]
true
6 6 [object Set]
true
7 7 [object Set]
true**/
