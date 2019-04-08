//  example
function *generator(){
    let one = yield 1;
    let two = yield one +2;
    let three = yield two + 3;
    yield three; 
}
let iterator = generator();
console.log(iterator.next(9));
console.log(iterator.next(4));// passing argemnets to the next() mehtod
console.log(iterator.next(5));
console.log(iterator.next());
console.log(iterator.next());