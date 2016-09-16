var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
        // this creates an empty object, even though it is declared as intesection type
        var result = {};
        // this loops through all properties for first, includes properties as functions
        for (var id in first) {
            result[id] = first[id];
        }
        // this loops through all properties for first, includes properties as functions
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
    function getName(n) {
        if (typeof n === "string") {
            return n;
        }
        else {
            return n();
        }
    }
    var people;
    var s = people.name;
    var s = people.next.name;
    var s = people.next.next.name;
    var s = people.next.next.next.name;
    var UIElement = (function () {
        function UIElement() {
        }
        UIElement.prototype.animate = function (dx, dy, easing) {
            if (easing === "ease-in") {
            }
            else if (easing === "ease-out") {
            }
            else if (easing === "ease-in-out") {
            }
            else {
            }
        };
        return UIElement;
    }());
    var button = new UIElement();
    button.animate(0, 0, "ease-in");
    // button.animate(0, 0, "uneasy"); // error: "uneasy" is not allowed here
    // Polymorphic this types
    //A polymorphic this type represents a type that is the subtype of the containing class or interface. This is called F-bounded polymorphism. This makes hierarchical fluent interfaces much easier to express,
    var BasicCalculator = (function () {
        function BasicCalculator(value) {
            if (value === void 0) { value = 0; }
            this.value = value;
        }
        BasicCalculator.prototype.currentValue = function () {
            return this.value;
        };
        BasicCalculator.prototype.add = function (operand) {
            this.value += operand;
            return this;
        };
        BasicCalculator.prototype.multiply = function (operand) {
            this.value *= operand;
            return this;
        };
        return BasicCalculator;
    }());
    var v = new BasicCalculator(2)
        .multiply(5)
        .add(1)
        .currentValue();
    var ScientificCalculator = (function (_super) {
        __extends(ScientificCalculator, _super);
        function ScientificCalculator(value) {
            if (value === void 0) { value = 0; }
            _super.call(this, value);
        }
        ScientificCalculator.prototype.sin = function () {
            this.value = Math.sin(this.value);
            return this;
        };
        return ScientificCalculator;
    }(BasicCalculator));
    var v2 = new ScientificCalculator(2)
        .multiply(5)
        .sin()
        .add(1)
        .currentValue();
    //Without this types, ScientificCalculator would not have been able to extend BasicCalculator and keep the fluent interface. multiply would have returned BasicCalculator, which doesn’t have the sin method. However, with this types, multiply returns this, which is ScientificCalculator here.
})();
//# sourceMappingURL=advancedTypes.js.map