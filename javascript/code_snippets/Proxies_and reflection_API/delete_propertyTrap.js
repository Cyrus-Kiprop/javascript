/**  in javascript attemting to delete a nonconfigurable object throws an error 
in non strcit mode it returns false.**/
let target = {
name: "target",
value: 42
};
Object.defineProperty(target, "name", { configurable: false });// sets th eproperty name to be non-xonfigurable.
console.log("value" in target); // true
let result1 = delete target.value;
console.log(result1); // true
console.log("value" in target); // false
// note: the following line throws an error in strict mode
let result2 = delete target.name;
console.log(result2);
// false
console.log("name" in target);
// true
// using the delete property 
let target2 = {
    name: "target",
    value: 42
    };
    let proxy =  new Proxy(target2,{deleteProperty(trapTarget,key){
        if (key === "value") {
            return false;
        }else {
            return Reflect.deleteProperty(trapTarget, key);
        }
    }
    });
    // attempt to delete proxy.value
console.log("value" in proxy); // true
let result1 = delete proxy.value;
console.log(result1); // false
console.log("value" in proxy); // true
// attempt to delete proxy.name
console.log("name" in proxy); // true
let result2 = delete proxy.name;
console.log(result2); // true
console.log("name" in proxy);