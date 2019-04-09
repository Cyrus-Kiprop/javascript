function fakeAjax (url,cb){
var fakeResponse = {
    'file1': 'this is the first file',
    "file2": 'this is the second file',
    "file3" : "this is the third file"
}
var randomDelay ;
console.log("Requesting", url);
setTimeout(function(){cb(fake_response[url]);},randomDelay);


}
function output(text){
    console.log(text);
}
function getFile(){
    fakeAjax(file, funciton(text){
        //what do we do here
        handleResponse(file,text);
    });
}
function handleResponse(filename,contents){
    if (! filename in responses) {
        response[filename] =contents;
    }
    var arr = ["file1","file2","file3"]
    for (const i of arr) {
        if (i in responses) {
            if (typeof response[i] === 'string') {
                output(responses[i]);
                response[i]= false;
            }
        }else {
            return 
        } 
    }
}
var resposes = {};
//alternatively
getFile('file1');
getFile('file2');
getFile('file3');
