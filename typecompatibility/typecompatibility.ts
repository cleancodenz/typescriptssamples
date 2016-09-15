(function () {
    // structural subtyping, in contrast with nominal typing
    interface Named {
        name: string;
    }

    class Person {
        name: string;
    }

    let p: Named;
    // OK, because of structural typing
    p = new Person();
    // Soundness


    //The basic rule for TypeScript’s structural type system is that
    // x is compatible with y if y has at least the same members as x

    let x: Named;
    // y's inferred type is { name: string; location: string; }
    let y = { name: "Alice", location: "Seattle" };
    x = y;

    //The same rule for assignment is used when checking function call arguments
    function greet(n: Named) {
        console.log("Hello, " + n.name);
    }
    greet(y); // OK

    //comparing function
    let x1 = (a: number) => 0;
    let y1 = (b: number, s: string) => 0;

    //To check if x is assignable to y, we first look at the parameter list. Each parameter in x must have a corresponding parameter in y with a compatible type.
    // but second parameter will be discarded
    y1 = x1; //OK

    //x1 = y1; // Error

    let items = [1, 2, 3];

    // Don't force these extra parameters
    items.forEach((item, index, array) => console.log(item));

    // Should be OK!
    items.forEach(item => console.log(item));

    // for return types
    let x2 = () => ({ name: "Alice" });
    let y2 = () => ({ name: "Alice", location: "Seattle" });

    x2 = y2; // OK
    //y2 = x2; // Error because x() lacks a location property

    //Function Parameter Bivariance

    enum EventType { Mouse, Keyboard }

    interface Event { timestamp: number; }
    interface MouseEvent extends Event { x: number; y: number }
    interface KeyEvent extends Event { keyCode: number }

    function listenEvent(eventType: EventType, handler: (n: Event) => void) {
        /* ... */
    }

    // Unsound, but useful and common
    listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.x + "," + e.y));

    // Undesirable alternatives in presence of soundness
    listenEvent(EventType.Mouse, (e: Event) => console.log((<MouseEvent>e).x + "," + (<MouseEvent>e).y));
    listenEvent(EventType.Mouse, <(e: Event) => void>((e: MouseEvent) => console.log(e.x + "," + e.y)));

    // Still disallowed (clear error). Type safety enforced for wholly incompatible types
    //listenEvent(EventType.Mouse, (e: number) => console.log(e));

    //Optional Parameters and Rest Parameters
    function invokeLater(args: any[], callback: (...args: any[]) => void) {
        /* ... Invoke callback with 'args' ... */
    }

    // Unsound - invokeLater "might" provide any number of arguments
    invokeLater([1, 2], (x, y) => console.log(x + ", " + y));

    // Confusing (x and y are actually required) and undiscoverable
    invokeLater([1, 2], (x?, y?) => console.log(x + ", " + y));

    //Functions with overloads
    //Enums are compatible with numbers, and numbers are compatible with enums. Enum values from different enum types are considered incompatible

    enum Status { Ready, Waiting };
    enum Color { Red, Blue, Green };

    let status = Status.Ready;
    //status = Color.Green;  //error

    //Classes work similarly to object literal types and interfaces with one exception: they have both a static and an instance type. When comparing two objects of a class type, only members of the instance are compared. Static members and constructors do not affect compatibility

    //private and protected members in a class affect their compatibility
    class Animal {
        feet: number;
        constructor(name: string, numFeet: number) { }
    }

    class Size {
        feet: number;
        constructor(numFeet: number) { }
    }

    let a: Animal;
    let s: Size;

    a = s;  //OK
    s = a;  //OK

    // Generics
    interface Empty<T> {
    }
    let x3: Empty<number>;
    let y3: Empty<string>;

    //n the above, x and y are compatible because their structures do not use the type argument in a differentiating way

    x3 = y3;  // okay, y matches structure of x

    interface NotEmpty<T> {
        data: T;
    }
    let x4: NotEmpty<number>;
    let y4: NotEmpty<string>;

    //x4 = y4;  // error, x and y are not compatible

})()