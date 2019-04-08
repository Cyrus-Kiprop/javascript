function *createIterator() {
    let first = yield 1;
    let second = yield first + 2;
    yield second + 3;
    }
    // yield 4 + 2, then throw
    // never is executed
    let iterator = createIterator();
    // passing errors with the help of throw method
    console.log(iterator.next());
    console.log(iterator.next(4));
    //console.log(iterator.throw(new Error("acha upuz na uprogrmmes")));// am trying to throw this error but the program wont eecute
// rewriting the fucntion using the try and catch methods to hadle the error
function *iterator1(){
    let first1 = yield 1;
    try {
        let second1 = yield first1 + 2;
    } catch (error) {
        second1 = 6// assigns six whenever the error is thrown
    }
    yield second1 + 3;
    }

    let caller = iterator1();
    console.log(caller.next());
    console.log(caller.next(4));
    console.log(caller.throw(new Error("acha upuz na uprogrmmes")));
    