var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function () {
    function identity(arg) {
        return arg;
    }
    function identity1(arg) {
        return arg;
    }
    function identity2(arg) {
        return arg;
    }
    var output = identity2("myString"); // type of output will be 'string'
    // using type inference rather than <>
    //the compiler just looked at the value "myString", and set T to its typ
    var output2 = identity2("myString");
    function loggingIdentity(arg) {
        console.log(arg.length); // Array has a .length, so no more error
        return arg;
    }
    function loggingIdentity1(arg) {
        console.log(arg.length); // Array has a .length, so no more error
        return arg;
    }
    // generics in functions
    var myIdentity = identity2;
    var myIdentity1 = identity2;
    function identity3(arg) {
        return arg;
    }
    var myIdentity2 = identity;
    // Generic Classes, class with add method not implemented?
    // Generic only works with instance side of Class, not static side
    var GenericNumber = (function () {
        function GenericNumber() {
        }
        return GenericNumber;
    }());
    var myGenericNumber = new GenericNumber();
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = function (x, y) { return x + y; };
    console.log(myGenericNumber.add(1, 2));
    function loggingIdentity2(arg) {
        console.log(arg.length); // Now we know it has a .length property, so no more error
        return arg;
    }
    loggingIdentity2({ length: 10, value: 3 });
    // Using type parameters in Generic constraints
    function copyFields(target, source) {
        for (var id in source) {
            target[id] = source[id];
        }
        return target;
    }
    var x = { a: 1, b: 2, c: 3, d: 4 };
    copyFields(x, { b: 10, d: 20 }); // okay
    // copyFields(x, { Q: 90 });  // error: property 'Q' isn't declared in 'x'.
    //Using Class Types in Generics
    // when creating factories using generics, it is necessary to refer to class types by their constructor functions
    function create(c) {
        return new c();
    }
    //A more advanced example uses the prototype property to infer and constrain relationships between the constructor function and the instance side of class types.
    var BeeKeeper = (function () {
        function BeeKeeper() {
            this.hasMask = false;
        }
        return BeeKeeper;
    }());
    var beekeeper = create(BeeKeeper);
    beekeeper.hasMask = true;
    var ZooKeeper = (function () {
        function ZooKeeper() {
        }
        return ZooKeeper;
    }());
    var Animal = (function () {
        function Animal() {
        }
        return Animal;
    }());
    var Bee = (function (_super) {
        __extends(Bee, _super);
        function Bee() {
            _super.apply(this, arguments);
        }
        return Bee;
    }(Animal));
    var Lion = (function (_super) {
        __extends(Lion, _super);
        function Lion() {
            _super.apply(this, arguments);
            this.keeper = {
                nametag: 'Icy'
            }; // this is on Lion.prototype
        }
        return Lion;
    }(Animal));
    function findKeeper(a) {
        // this gives us constructor function   
        return a.prototype.keeper;
    }
    // Lion passed, not instance, a.prototype.keeper has not been defined
    // not a good example, but example of type inference
    var keeper = findKeeper(Lion);
    keeper.nametag = "lion keeper2"; // typechecks!
})();
//# sourceMappingURL=generics.js.map