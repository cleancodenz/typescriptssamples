(function () {
    // Where for padding only two types are accepted
    function padLeft(value, padding) {
        if (typeof padding === "number") {
            return Array(padding + 1).join(" ") + value;
        }
        if (typeof padding === "string") {
            return padding + value;
        }
        throw new Error("Expected string or number, got '" + padding + "'.");
    }
    console.log(padLeft("Hello world", 4));
    //let indentedString = padLeft("Hello world", true); // passes at compile time, fails at runtime.
    // instead of any we use a union type
    function padLeft2(value, padding) {
        if (typeof padding === "number") {
            return Array(padding + 1).join(" ") + value;
        }
        if (typeof padding === "string") {
            return padding + value;
        }
        throw new Error("Expected string or number, got '" + padding + "'.");
    }
    var FishImpl = (function () {
        function FishImpl() {
        }
        FishImpl.prototype.swim = function () {
            console.log("swimming");
        };
        FishImpl.prototype.layEggs = function () {
            console.log("laying eggs");
        };
        return FishImpl;
    }());
    function getSmallPet() {
        // ...
        return new FishImpl();
    }
    var pet = getSmallPet();
    pet.layEggs(); // okay
    //pet.swim();    // compile errors
    // type assertions
    //Union types are useful for modeling situations when values can overlap in the types they can take on. What happens when we need to know specifically whether we have a Fish
    if (pet.swim) {
        pet.swim();
    }
    else {
        pet.fly();
    }
    //Notice that we had to use type assertions several times
    //A type guard is some expression that performs a runtime check that guarantees the type in some scope
    //type predicate
    function isFish(pet) {
        return pet.swim !== undefined;
    }
    //pet is Fish is our type predicate in this example
    // Both calls to 'swim' and 'fly' are now okay.
    if (isFish(pet)) {
        pet.swim();
    }
    else {
        pet.fly();
    }
    // using typeof in type guards to rewrite paddleft 
    function isNumber(x) {
        return typeof x === "number";
    }
    function isString(x) {
        return typeof x === "string";
    }
    function padLeft3(value, padding) {
        if (isNumber(padding)) {
            return Array(padding + 1).join(" ") + value;
        }
        if (isString(padding)) {
            return padding + value;
        }
        throw new Error("Expected string or number, got '" + padding + "'.");
    }
    var SpaceRepeatingPadder = (function () {
        function SpaceRepeatingPadder(numSpaces) {
            this.numSpaces = numSpaces;
        }
        SpaceRepeatingPadder.prototype.getPaddingString = function () {
            return Array(this.numSpaces + 1).join(" ");
        };
        return SpaceRepeatingPadder;
    }());
    var StringPadder = (function () {
        function StringPadder(value) {
            this.value = value;
        }
        StringPadder.prototype.getPaddingString = function () {
            return this.value;
        };
        return StringPadder;
    }());
    function getRandomPadder() {
        return Math.random() < 0.5 ?
            new SpaceRepeatingPadder(4) :
            new StringPadder("  ");
    }
    // Type is 'SpaceRepeatingPadder | StringPadder'
    var padder = getRandomPadder();
    if (padder instanceof SpaceRepeatingPadder) {
        padder; // type narrowed to 'SpaceRepeatingPadder'
    }
    if (padder instanceof StringPadder) {
        padder; // type narrowed to 'StringPadder'
    }
    // intersection types 
    //Intersection types are closely related to union types, but they are used very differently. An intersection type
    //That means an object of this type will have all members of both types
    function extend(first, second) {
        var result = {};
        for (var id in first) {
            result[id] = first[id];
        }
        for (var id in second) {
            if (!result.hasOwnProperty(id)) {
                result[id] = second[id];
            }
        }
        return result;
    }
    var Person = (function () {
        function Person(name) {
            this.name = name;
        }
        return Person;
    }());
    var ConsoleLogger = (function () {
        function ConsoleLogger() {
        }
        ConsoleLogger.prototype.log = function () {
            // ...
        };
        return ConsoleLogger;
    }());
    var jim = extend(new Person("Jim"), new ConsoleLogger());
    var n = jim.name;
    jim.log();
})();
//# sourceMappingURL=advancedTypes.js.map