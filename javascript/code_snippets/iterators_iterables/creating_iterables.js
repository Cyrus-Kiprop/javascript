//creating iterables of user defined objects using the symbol.iterator function in a object
// consider the following example.
let array4 = [23,'kiprop', 'mixins','functional_proggramming', 'coders_lake', 'algog'];
let object ={
    array : [],
    *[Symbol.iterator](){
        for (const iterator of this.array) {
            yield iterator;
        }
    }
}
object.array.concat(array4);

for (const x of object) {
    console.log(x);
    
}