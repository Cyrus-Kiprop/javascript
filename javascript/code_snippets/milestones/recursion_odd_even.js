function findsolution(target){
  function find(current, history){
    if (current ==  target) {
      return target;
    }else if (current > history) {
      return null;
    }else {
      return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, '1');
}
pattern = findsolution(24);
console.log(pattern);
