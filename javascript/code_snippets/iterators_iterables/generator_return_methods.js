function *createIterator() {
    yield 1;
    return('acha upus return method exits a fucntion vaane');
    yield 2;// this block starting form here is an unreachable since the done property is set true
    yield 3;
    }
    let iterator = createIterator();
    console.log(iterator.next());
    console.log(iterator.next());