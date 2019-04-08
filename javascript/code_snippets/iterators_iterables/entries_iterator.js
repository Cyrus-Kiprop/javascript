//returns an iterator whose values are two value Pairs
let set =  new Set([23,4,5.43,'Chiko', 'funcitonal_programming','destructoring']);
let colors = [ "red", "green", "blue" ];
let tracking = new Set([1234, 5678, 9012]);
let data = new Map();
data.set("title", "Understanding ECMAScript 6");
data.set("format", "ebook");

for (item of colors.entries()) {
    console.log(item);
}
for (items of tracking.entries()) {
    console.log(items);
}

for (item1 of set.entries()) {
    console.log(item1);
}

for (item3 of data.entries()) {
    console.log(item3);  
}