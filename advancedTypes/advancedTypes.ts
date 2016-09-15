(function () {
    // Where for padding only two types are accepted
    function padLeft(value: string, padding: any) {
        if (typeof padding === "number") {
            return Array(padding + 1).join(" ") + value;
        }
        if (typeof padding === "string") {
            return padding + value;
        }
        throw new Error(`Expected string or number, got '${padding}'.`);
    }

    console.log(padLeft("Hello world", 4));

    //let indentedString = padLeft("Hello world", true); // passes at compile time, fails at runtime.
    // instead of any we use a union type
    function padLeft2(value: string, padding: string | number) {
        if (typeof padding === "number") {
            return Array(padding + 1).join(" ") + value;
        }
        if (typeof padding === "string") {
            return padding + value;
        }
        throw new Error(`Expected string or number, got '${padding}'.`);
    }

    //let indentedString = padLeft2("Hello world", true); // not compilable

    //If we have a value that has a union type, we can only access members that are common to all types in the union.
    interface Bird {
        fly();
        layEggs();
    }

    interface Fish {
        swim();
        layEggs();
    }

    class FishImpl implements Fish {
        swim() {
            console.log("swimming");
        }
        layEggs() {
            console.log("laying eggs");
        }
    }

    function getSmallPet(): Fish | Bird {
        // ...
        return new FishImpl();
    }

    let pet = getSmallPet();
    pet.layEggs(); // okay
    //pet.swim();    // compile errors

    // type assertions
    //Union types are useful for modeling situations when values can overlap in the types they can take on. What happens when we need to know specifically whether we have a Fish
    if ((<Fish>pet).swim) {
        (<Fish>pet).swim();
    }
    else {
        (<Bird>pet).fly();
    }

    //Notice that we had to use type assertions several times
    //A type guard is some expression that performs a runtime check that guarantees the type in some scope
    //type predicate
    function isFish(pet: Fish | Bird): pet is Fish {
        return (<Fish>pet).swim !== undefined;
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
    function isNumber(x: any): x is number {
        return typeof x === "number";
    }

    function isString(x: any): x is string {
        return typeof x === "string";
    }
    function padLeft3(value: string, padding: string | number) {
        if (isNumber(padding)) {
            return Array(padding + 1).join(" ") + value;
        }
        if (isString(padding)) {
            return padding + value;
        }
        throw new Error(`Expected string or number, got '${padding}'.`);
    }

    // instance of , using constructor function
    //the right side of the instanceof needs to be a constructor function,
    interface Padder {
        getPaddingString(): string
    }

    class SpaceRepeatingPadder implements Padder {
        constructor(private numSpaces: number) { }
        getPaddingString() {
            return Array(this.numSpaces + 1).join(" ");
        }
    }

    class StringPadder implements Padder {
        constructor(private value: string) { }
        getPaddingString() {
            return this.value;
        }
    }

    function getRandomPadder() {
        return Math.random() < 0.5 ?
            new SpaceRepeatingPadder(4) :
            new StringPadder("  ");
    }

    // Type is 'SpaceRepeatingPadder | StringPadder'
    let padder: Padder = getRandomPadder();

    if (padder instanceof SpaceRepeatingPadder) {
        padder; // type narrowed to 'SpaceRepeatingPadder'
    }
    if (padder instanceof StringPadder) {
        padder; // type narrowed to 'StringPadder'
    }

    // intersection types 
    //Intersection types are closely related to union types, but they are used very differently. An intersection type
    //That means an object of this type will have all members of both types
    function extend<T, U>(first: T, second: U): T & U {
        // this creates an empty object, even though it is declared as intesection type
        let result = <T & U>{};
        // this loops through all properties for first, includes properties as functions
        for (let id in first) {
            (<any>result)[id] = (<any>first)[id];
        }
        // this loops through all properties for first, includes properties as functions
        for (let id in second) {
            if (!result.hasOwnProperty(id)) {
                (<any>result)[id] = (<any>second)[id];
            }
        }
        return result;
    }

    class Person {
        constructor(public name: string) { }
    }
    interface Loggable {
        log(): void;
    }
    class ConsoleLogger implements Loggable {
        log() {
            // ...
        }
    }
    var jim = extend(new Person("Jim"), new ConsoleLogger());
    var n = jim.name;
    jim.log();

    // type aliases
    //Type aliases are sometimes similar to interfaces, but can name primitives, unions, tuples, and any other types that you’d otherwise have to write by hand
    //Aliasing doesn’t actually create a new type - it creates a new name to refer to that type. Aliasing a primitive is not terribly useful, though it can be used as a form of documentation

    type Name = string;
    type NameResolver = () => string;
    type NameOrResolver = Name | NameResolver;
    function getName(n: NameOrResolver): Name {
        if (typeof n === "string") {
            return n;
        }
        else {
            return n();
        }
    }

    //Just like interfaces, type aliases can also be generic
    type Container<T> = { value: T };

    type Tree<T> = {
        value: T;
        left: Tree<T>;
        right: Tree<T>;
    }

    type LinkedList<T> = T & { next: LinkedList<T> };

    interface Person1 {
        name: string;
    }

    var people: LinkedList<Person1>;
    var s = people.name;
    var s = people.next.name;
    var s = people.next.next.name;
    var s = people.next.next.next.name;

    // interface vc type aliases
    //As we mentioned, type aliases can act sort of like interfaces; however, there are some subtle differences.
    //One important difference is that type aliases cannot be extended or implemented from

    //On the other hand, if you can’t express some shape with an interface and you need to use a union or tuple type, type aliases are usually the way to go

    // string literal types
    type Easing = "ease-in" | "ease-out" | "ease-in-out";
    class UIElement {
        animate(dx: number, dy: number, easing: Easing) {
            if (easing === "ease-in") {
                // ...
            }
            else if (easing === "ease-out") {
            }
            else if (easing === "ease-in-out") {
            }
            else {
                // error! should not pass null or undefined.
            }
        }
    }

    let button = new UIElement();
    button.animate(0, 0, "ease-in");
    // button.animate(0, 0, "uneasy"); // error: "uneasy" is not allowed here

    // Polymorphic this types
    //A polymorphic this type represents a type that is the subtype of the containing class or interface. This is called F-bounded polymorphism. This makes hierarchical fluent interfaces much easier to express,
    class BasicCalculator {
        public constructor(protected value: number = 0) { }
        public currentValue(): number {
            return this.value;
        }
        public add(operand: number): this {
            this.value += operand;
            return this;
        }
        public multiply(operand: number): this {
            this.value *= operand;
            return this;
        }
        // ... other operations go here ...
    }

    let v = new BasicCalculator(2)
        .multiply(5)
        .add(1)
        .currentValue();

    class ScientificCalculator extends BasicCalculator {
        public constructor(value = 0) {
            super(value);
        }
        public sin() {
            this.value = Math.sin(this.value);
            return this;
        }
        // ... other operations go here ...
    }

    let v2 = new ScientificCalculator(2)
        .multiply(5)
        .sin()
        .add(1)
        .currentValue();
    //Without this types, ScientificCalculator would not have been able to extend BasicCalculator and keep the fluent interface. multiply would have returned BasicCalculator, which doesn’t have the sin method. However, with this types, multiply returns this, which is ScientificCalculator here.
    
})()