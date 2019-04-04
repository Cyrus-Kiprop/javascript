var map = new Map([['name','kiprop'],['age',554],['car_type','toyota double cabiin']]);
map.forEach((keys, value,ownerMap ) => {
  console.log(keys + ' ' + value);
  console.log(Object.is(ownerMap, map));

});
