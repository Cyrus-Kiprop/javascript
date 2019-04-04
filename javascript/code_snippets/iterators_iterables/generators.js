// the creation of a generator is accomplished by adding an astericks after the function keyword
//example

function *generator(){// this indicates that this is a generator functions.
    yield 1;
    yield 2;
    yield 3;
};
// generators are called like regular functions except
// example
let iterator_gen = generator();
console.log(iterator_gen.next());
console.log(iterator_gen.next());
console.log(iterator_gen.next());
console.log(iterator_gen.next());
 //this is a more shortened version of the creation of a generator forom scratch.

// using yield inside a forloop
function *generator2(array){
    for (let index = 0; index < array.length; index++) {
        yield array[index];  
    }
}
const func_call = generator([23,'kiprop', 'mixins','functional_proggramming', 'coders_lake', 'algog']);
console.log(func_call.next());
console.log(func_call.next());
console.log(func_call.next());
console.log(func_call.next());
console.log(func_call.next());
console.log(func_call.next());
console.log(func_call.next());

//well done

// generator function expressions
//example
let array4 = [23,'kiprop', 'mixins','functional_proggramming', 'coders_lake', 'algog'];
let this_generator = function *(values){
    for (var str = 0; str < values.length; str++) {
        yield values[str];
        
    }
}
let gen_caller = this_generator(array4);
console.log(gen_caller.next());
console.log(gen_caller.next());
console.log(gen_caller.next());
console.log(gen_caller.next());
console.log(gen_caller.next());
console.log(gen_caller.next());
console.log(gen_caller.next());

