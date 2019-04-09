let object  = {};
// if you try to access aproperty name that deosnt exist a undefined error will be thrown
console.log(object.name); //outputs undefined. this is dangerous and problematic
// to fix this wa have to validate using the set trap method/**
//get trap syntax
let proxy = new Proxy(object,{ get(trapTarget, key, reciever){
    if (!(key in reciever)) {
      throw new TypeError("the property deosnt exist")  
    }
    return Reflect.get(trapTarget,key,reciever);
}
});
proxy.name = "cyrus";
console.log(proxy.name);
// the follwing property name doesnt exist and will throw a typeerror
console.log(proxy.anme);
