let set =  new Set([23,4,5.43,'Chiko', 'funcitonal_programming','destructoring']);
let colors = [ "red", "green", "blue" ];
let tracking = new Set([1234, 5678, 9012]);
let data = new Map();
data.set("title", "Understanding ECMAScript 6");
data.set("format", "ebook");
for (const iterator of set.values()) {
    console.log(iterator);
    
}
for (const iterator1 of colors.values()) {
    console.log(iterator1);
    
}
for (variable of tracking.values()) {
    console.log(variable);
    
}
for (iterator3 of data.values()) {
    console.log(iterator3);
}