// this is basically the combination of ot more than two genrators usin a special yield preceeded by an astericks
//consider two generator funcitons

 /** 
function *createNumberIterator() {
    yield 1;
    yield 2;
    }
    function *createColorIterator() {
    yield "red";
    yield "green";
    }

    // here comes the delegations of generators using the specia yield 
    function *combine_generators(){
        yield *createNumberIterator();
        yield *createColorIterator();
    }
    let caller = combine_generators();
    console.log(caller.next());
    console.log(caller.next());
    console.log(caller.next());
    console.log(caller.next());
    console.log(caller.next());
    console.log(caller.next());
    console.log(caller.next());
    **/
    // another complex example
    function *gen(){
        yield 'one';
        yield 'three';
        return 3;
    }

    function *gen2(value){
        for (let index = 0; index < value; index++) {
            yield  'repeat';
            
        }
    }

    function *gen3(){
       let x = yield *gen();
        yield *gen2(x);
    }

    var caller1 = gen3();
    console.log(caller1.next());
    console.log(caller1.next());
    console.log(caller1.next());
    console.log(caller1.next());
    console.log(caller1.next());
    console.log(caller1.next());
    console.log(caller1.next());
    console.log(caller1.next());
    