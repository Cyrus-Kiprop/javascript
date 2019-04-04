// creating a weak set...using the weak set constructor.
let set = new WeakSet();
key = {};
key2 = {};
set.add(key);
set.add(key2);// adding elemnts to out new weak set
log set.has(key);
key = null// this initially removes the key and its reference in the weak list.
// weak sets share a few properties with the set but npt all
