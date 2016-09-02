(function () {


    function printLabel(labelObject: { label: string }) {
        console.log(labelObject.label);
    }

    let myObject = { size: 10, label: "Size 10 Object" };

    printLabel(myObject);

    interface LabelledValue {
        label: string;
    }

    function printLabel1(labelObject: LabelledValue) {
        console.log(labelObject.label);
    }
    printLabel1(myObject);

    //Optional Properties, this does not enforce property checking explicitly
    interface SquareConfig {
        color?: string;
        width?: number;
    }

    // returning type example as well
    function createSquare(config: SquareConfig): { color: string; area: number } {
        let newSquare = { color: "white", area: 100 };
        if (config.color) {
            newSquare.color = config.color;
        }
        if (config.width) {
            newSquare.area = config.width * config.width;
        }
        return newSquare;
    }

    let mySquare = createSquare({ color: "black" });

    // function types
    interface SearchFunc {
        (source: string, subString: string): boolean;
    }

    let mySearch, mySearch1: SearchFunc;
    // names of parameters do not need to match
    mySearch = function (source: string, subString: string) {
        let result = source.search(subString);
        if (result == -1) {
            return false;
        }
        else {
            return true;
        }
    }

    mySearch1 = function (src, sub) {
        let result = src.search(sub);
        if (result == -1) {
            return false;
        }
        else {
            return true;
        }
    }

    //Indexable types
    /**
     * There are two types of supported index signatures: string and number. It is possible to support both types of indexers, but the type returned from a numeric indexer must be a subtype of the type returned from the string indexer. This is because when indexing with a number, JavaScript will actually convert that to a string before indexing into an object. That means that indexing with 100 (a number) is the same thing as indexing with "100" (a string), so the two need to be consistent.
     * 
     * **/
    interface StringArray {
        [index: number]: string;

    }

    let myArray: StringArray;

    myArray = ["Bob", "Fred"];
    let myStr: string = myArray[0];


    class Animal {
        name: string;
    }

    class Dog extends Animal {
        breed: string;
    }

    // Error: indexing with a 'string' will sometimes get you a Dog!
    //While string index signatures are a powerful way to describe the “dictionary” pattern,
    // they also enforce that all properties match their return type

    interface NotOkay {
        // [x:number]: Animal;
        [x: string]: Dog
    }
    // for [index:number] it is asking for a array
    // for [index:string] it is asking for associative array
    interface NumberDictionary {
        [index: string]: number;
        length: number;    // ok, length is a number
        //name: string;      // error, the type of 'name' is not a subtype of the indexer
    }

    //Class types 
    // implementing an interface
    interface ClockInterface {
        currentTime: Date;
        setTime(d: Date);
    }


    class Clock implements ClockInterface {
        currentTime: Date;
        setTime(d: Date) {
            this.currentTime = d;
        }

        constructor(h: number, m: number) {

        }

    }

    // Hybrid types, that acts as both function and an object
    interface Counter {
        (start: number): string; // this is function interface
        interval: number; // the following two are class interfaces
        reset(): void;
    }

    // this is hard to understand, constructor function
    // the difference is : it is not using implements nor extends
    // it is using :  
    // What it needs to be done in this case:
    //   must return an instance with type as Counter which itself is a function and object too
    function getCounter(): Counter {
        // must type cast it to Counter which is a function with dedicated intrface
        let counter = <Counter>function (start: number) {
            console.log('in the counter function');
            return 'done';
        };
     
        counter.interval = 123;
        counter.reset = function () { console.log('in the reset function'); };
        return counter;
    }

    let c: Counter = getCounter(); 
    c(10); // use it as function
    c.reset(); // use it as an object
    c.interval = 5.0;

    //Interfaces Extending Classes
    /**
     * When an interface type extends a class type it inherits the members of the class but not their implementations. It is as if the interface had declared all of the members of the class without providing an implementation. Interfaces inherit even the private and protected members of a base class. This means that when you create an interface that extends a class with private or protected members, that interface type can only be implemented by that class or a subclass of it.

    This is useful when you have a large inheritance hierarchy, but want to specify that your code works with only subclasses that have certain properties. The subclasses don’t have to be related besides inheriting from the base class

     * **/
    // do not understand this
    class Control {
        private state: any;
    }

    interface SelectableControl extends Control {
        select(): void;
    }

    // this actually implments 
    class Button extends Control {
        select() { }
    }

    class TextBox extends Control {
        select() { }
    }

    class Image extends Control {
    }

    class Location {
        select() { }
    }

})()