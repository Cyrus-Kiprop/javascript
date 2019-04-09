let target = {
    name : "target"
};

let proxy = new Proxy(target, {set(trapTarget,key,value,reciever){
    if (!trapTarget.hasOwnProperty(key)) {
        if (isNaN(value)) {
            throw new TypeError("the property name must be a number");
        }  
    }
    return Reflect.set(trapTarget,key,value,reciever);
}
});

// adding new property that are numbers
proxy.count = 455;
console.log(target.count);
console.log(proxy.count);
// you can change the property name of the property name of the target.
proxy.name = "carolyne";
console.log(target.name);

proxy.anotherName = 9090;

