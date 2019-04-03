let fname = Symbol('First Name');
let person = {
  [fname]: 'cyrus'
}
//settig the property to be read only
Object.defineProperty(person, fname, {writable : false});

let lname = Symbol('Last Name');

Object.defineProperties(person, {
    [lname] : {
      value : 'kiprop',
      writable : false
    }
});
