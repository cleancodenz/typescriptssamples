(function () {
    // using let(ES6) instead of using, as this will create a real block level {} variable
    // so within the block it will be different variable if name is same
    // if you declare var, it will override  
    var a = 1;
    function four() {
        if (true) {
            var a = 4; // local variable, not overriding global
        }
        console.log("it should be 4:" + a);
    }
    four();
    console.log("it should be 1 : " + a);
    if (true) {
        var a = 3; // this is not block even though there is {}, so it is same variable 
    }
    console.log("it should be 3 : " + a);
    var b = 1;
    function five() {
        if (true) {
            var b_1 = 5; //block level, new variable
        }
        console.log("it should be 5:" + b);
    }
    five();
    console.log("it should be 1 : " + b);
    if (true) {
        var b_2 = 3; // this is  block, new variable within that block, different from var 
    }
    console.log("it should be 1 not 3:  " + b);
    // boolean
    var isDone = false;
    //number
    var decimal = 6;
    var hex = 0xf00d;
    var binary = 10;
    var octal = 484;
    //String
    var color = "blue";
    color = 'red';
    // template strings
    var fullName = 'Bob Bobbington';
    var age = 37;
    var sentence = "Hello, my name is " + fullName;
    console.log(sentence);
    //array
    var list = [1, 2, 3];
    var list2 = [1, 2, 3];
    // Tuple (kind of array with fixed number elements with fixed type)
    var x;
    x = ["hello", 10];
    console.log(x[0]); // string part
    console.log(x[1]); // int part
    // Enum
    var Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    ;
    var c = Color.Blue;
    //Any, unknown type
    var notSure = 4;
    //console.log(notSure.ifItExists());
    console.log(notSure.toFixed());
    var list3 = [1, true, "free"];
    // Type assertions, type casting
    var someValue = "this is a string";
    var strLength = someValue.length;
    var someValue1 = "this is a string";
    var strLength1 = someValue1.length;
})();
//# sourceMappingURL=basictype.js.map