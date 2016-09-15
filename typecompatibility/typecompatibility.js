(function () {
    var Person = (function () {
        function Person() {
        }
        return Person;
    }());
    var p;
    // OK, because of structural typing
    p = new Person();
    // Soundness
    //The basic rule for TypeScript’s structural type system is that
    // x is compatible with y if y has at least the same members as x
    var x;
    // y's inferred type is { name: string; location: string; }
    var y = { name: "Alice", location: "Seattle" };
    x = y;
    //The same rule for assignment is used when checking function call arguments
    function greet(n) {
        console.log("Hello, " + n.name);
    }
    greet(y); // OK
    //comparing function
    var x1 = function (a) { return 0; };
    var y1 = function (b, s) { return 0; };
    //To check if x is assignable to y, we first look at the parameter list. Each parameter in x must have a corresponding parameter in y with a compatible type.
    // but second parameter will be discarded
    y1 = x1; //OK
    //x1 = y1; // Error
    var items = [1, 2, 3];
    // Don't force these extra parameters
    items.forEach(function (item, index, array) { return console.log(item); });
    // Should be OK!
    items.forEach(function (item) { return console.log(item); });
    // for return types
    var x2 = function () { return ({ name: "Alice" }); };
    var y2 = function () { return ({ name: "Alice", location: "Seattle" }); };
    x2 = y2; // OK
    //y2 = x2; // Error because x() lacks a location property
    //Function Parameter Bivariance
    var EventType;
    (function (EventType) {
        EventType[EventType["Mouse"] = 0] = "Mouse";
        EventType[EventType["Keyboard"] = 1] = "Keyboard";
    })(EventType || (EventType = {}));
    function listenEvent(eventType, handler) {
        /* ... */
    }
    // Unsound, but useful and common
    listenEvent(EventType.Mouse, function (e) { return console.log(e.x + "," + e.y); });
    // Undesirable alternatives in presence of soundness
    listenEvent(EventType.Mouse, function (e) { return console.log(e.x + "," + e.y); });
    listenEvent(EventType.Mouse, (function (e) { return console.log(e.x + "," + e.y); }));
    // Still disallowed (clear error). Type safety enforced for wholly incompatible types
    //listenEvent(EventType.Mouse, (e: number) => console.log(e));
    //Optional Parameters and Rest Parameters
    function invokeLater(args, callback) {
        /* ... Invoke callback with 'args' ... */
    }
    // Unsound - invokeLater "might" provide any number of arguments
    invokeLater([1, 2], function (x, y) { return console.log(x + ", " + y); });
    // Confusing (x and y are actually required) and undiscoverable
    invokeLater([1, 2], function (x, y) { return console.log(x + ", " + y); });
    //Functions with overloads
    //Enums are compatible with numbers, and numbers are compatible with enums. Enum values from different enum types are considered incompatible
    var Status;
    (function (Status) {
        Status[Status["Ready"] = 0] = "Ready";
        Status[Status["Waiting"] = 1] = "Waiting";
    })(Status || (Status = {}));
    ;
    var Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Blue"] = 1] = "Blue";
        Color[Color["Green"] = 2] = "Green";
    })(Color || (Color = {}));
    ;
    var status = Status.Ready;
    //status = Color.Green;  //error
    //Classes work similarly to object literal types and interfaces with one exception: they have both a static and an instance type. When comparing two objects of a class type, only members of the instance are compared. Static members and constructors do not affect compatibility
    //private and protected members in a class affect their compatibility
    var Animal = (function () {
        function Animal(name, numFeet) {
        }
        return Animal;
    }());
    var Size = (function () {
        function Size(numFeet) {
        }
        return Size;
    }());
    var a;
    var s;
    a = s; //OK
    s = a; //OK
    var x3;
    var y3;
    //n the above, x and y are compatible because their structures do not use the type argument in a differentiating way
    x3 = y3; // okay, y matches structure of x
    var x4;
    var y4;
    //x4 = y4;  // error, x and y are not compatible
})();
//# sourceMappingURL=typecompatibility.js.map