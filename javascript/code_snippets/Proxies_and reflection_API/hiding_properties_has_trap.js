let target = {
    value: 42
    }
    console.log("value" in target);// returns true 
    console.log("toString" in target);// returns true and yet it not a own prototype.

//avoiding this using the has trap
let proxy = new Property(target, {has(traptarget, key){
    if (key === "value") {
        return false;
    }else {
        return Reflect.has(trapTarget,key);
    }
}});

let proxy = new Proxy(target, {
    has(trapTarget, key) {
    if (key === "value") {
    return false;
    } else {
    return Reflect.has(trapTarget, key);
    }
    }
    });
    console.log("value" in proxy); // false
    console.log("name" in proxy);//true
    console.log("toString" in proxy);//trues
   