// creatin generator object method using the emcma 5 object literal style
//example
let array4 = [23,'kiprop', 'mixins','functional_proggramming', 'coders_lake', 'algog'];
// consider looping the above array using the iterator and generator methods
let o = {
    constant_generator: function*(array){
        for (let index = 0; index < array.length; index++) {
            yield array[index];
            
        }

    }
};
let func_caller = o.constant_generator(array4);
console.log(func_caller.next());
console.log(func_caller.next());
console.log(func_caller.next());
console.log(func_caller.next());
console.log(func_caller.next());
console.log(func_caller.next());
console.log(func_caller.next());
// using ecma 6 more stripped version of ecna 5

let obj = {
    *concat(value){
        for (let str = 0; str < value.length; str++) {
            yield value[str];
            
        }
    }
};
let caller2 = obj.concat(array4);
console.log(caller2.next());
console.log(caller2.next());
console.log(caller2.next());
console.log(caller2.next());
console.log(caller2.next());
console.log(caller2.next());
console.log(caller2.next());
console.log(caller2.next());
