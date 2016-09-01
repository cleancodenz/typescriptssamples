(function () {
    // this will output all 10s, as settimeout is run after for 
    // and with closure, the i is referenced, even though when it is run, 
    // i is already outside of scope
    for (var i = 0; i < 10; i++) {
        setTimeout(function () { console.log(i); }, 100 * i);
    }
    // every i has its own scope in the bock, practically a new variable
    // this will output 0 to 10 
    var _loop_1 = function(i_1) {
        setTimeout(function () { console.log(i_1); }, 100 * i_1);
    };
    for (var i_1 = 0; i_1 < 10; i_1++) {
        _loop_1(i_1);
    }
    //const 
    var numLivesForCat = 9;
    // Desctructing, ES6
    //The destructuring assignment syntax is a JavaScript expression 
    //that makes it possible to extract data from arrays or objects 
    //into distinct variables.
    /**
     * var a, b, rest;
    [a, b] = [1, 2];
    console.log(a); // 1
    console.log(b); // 2
    
    [a, b, ...rest] = [1, 2, 3, 4, 5];
    console.log(a); // 1
    console.log(b); // 2
    console.log(rest); // [3, 4, 5]
    
    ({a, b} = {a:1, b:2});
    console.log(a); // 1
    console.log(b); // 2
     *
     */
    var input = [1, 2];
    var first = input[0], second = input[1];
    console.log(first); // outputs 1
    console.log(second); // outputs 2
    // Object Desctructing
    var o = {
        a: "foo",
        b: 12,
        c: "bar"
    };
    //This creates new variables a and b from o.a and o.b. Notice that you can skip c if you don’t need it.
    var a = o.a, b = o.b;
    //Notice that we had to surround this statement with parentheses. JavaScript normally parses a { as the start of block.
    (_a = { a: "baz", b: 101 }, a = _a.a, b = _a.b, _a);
    console.log(a);
    console.log(b);
    console.log(o.a);
    console.log(o.b);
    var _a;
})();
//# sourceMappingURL=variablesdeclarations.js.map