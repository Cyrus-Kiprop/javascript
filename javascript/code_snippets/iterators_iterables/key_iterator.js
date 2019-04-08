let set =  new Set([23,4,5.43,'Chiko', 'funcitonal_programming','destructoring']);
let colors = [ "red", "green", "blue" ];
let tracking = new Set([1234, 5678, 9012]);
let data = new Map();
data.set("title", "Understanding ECMAScript 6");// data to manipulate.
data.set("format", "ebook");
// the key iterator returns the 
for (const iterator of set.keys()) {
    console.log(iterator);
    
}
for (const iterator1 of colors.keys()) {
    console.log(iterator1);

}
for (const iterator2 of tracking.keys()) {
    console.log(iterator2);
    
}
for (variables of data.keys()) {
    console.log(variables);
    
}