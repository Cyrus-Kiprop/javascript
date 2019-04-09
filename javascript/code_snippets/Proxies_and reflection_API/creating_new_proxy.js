//we use the proxy constructor to create a proxy. we  pass two arguments {handeler and target}
let target = {};
let proxy  = new Proxy(target, {});
proxy.name = "cyrus";
console.log(target.name);
console.log(proxy.name);
target.name = "Kiprop";
console.log(proxy.name);
console.log(target.name);


