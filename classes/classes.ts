// abstract class example
// difference from interface is abstract class can have implementation

abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
        console.log("Department name: " + this.name);
    }

    abstract printMeeting(): void; // must be implemented in derived classes
}

(function () {
    class Greeter {
        greeting: string;
        constructor(message: string) {
            this.greeting = message;
        }

        greet() {
            return "Hello, " + this.greeting;
        }
    }

    let greeter = new Greeter("world");

    //inheritance
    // default modifier is public
    class Animal {
        name: string;
        constructor(theName: string) {
            this.name = theName;
        }
        move(distanceInMeters: number = 0) {
            console.log(`${this.name} moved ${distanceInMeters}m.`);
        }
    }

    class Snake extends Animal {
        constructor(name: string) {
            // must contain super()
            super(name);
        }
        move(distanceInMeters = 5) {
            console.log("Slithering...");
            super.move(distanceInMeters);
        }
    }

    class Horse extends Animal {
        constructor(name: string) {
            super(name);
        }
        move(distanceInMeters = 45) {
            console.log("Galloping...");
            super.move(distanceInMeters);
        }
    }

    let sam = new Snake("Sammy the Python");
    let tom: Animal = new Horse("Tommy the Palomino");
    sam.move();
    tom.move(34);

    // typescript is structure type system, for two types considered to be compatiable
    // private, protected and public members must all match
    class Animal1 {
        private name: string;
        constructor(theName: string) { this.name = theName; }
    }
    // parameter properties
    class Animal3 {
        constructor(private name: string) { }
    }


    class Rhino extends Animal1 {
        constructor() {
            // this.name not accessible from extensions 
            super("Rhino");
        }
    }

    class Animal2 {
        name: string;
        constructor(theName: string) {
            this.name = theName;
        }
        move(distanceInMeters: number = 0) {
            console.log(`${this.name} moved ${distanceInMeters}m.`);
        }
    }

    class Employee {
        private name: string;
        constructor(theName: string) { this.name = theName; }
    }

    let animal = new Animal1("Goat");
    let rhino = new Rhino();
    let animal2 = new Animal2("Dog");
    let employee = new Employee("Bob");

    animal = rhino;

    tom = animal2; // all public memebers match, and no private
    //animal = employee; // having same private field, but not from same declaration

    // Protected difference from private is proctected can 
    class Person {
        protected name: string;
        constructor(name: string) { this.name = name; }
    }

    let passcode = "secret passcode";

    class Employee1 extends Person {
        private department: string;

        constructor(name: string, department: string) {
            super(name);
            this.department = department;
        }

        public getElevatorPitch() {
            // this.name is accessible as it is protected
            return `Hello, my name is ${this.name} and I work in ${this.department}.`;
        }

        // get set example
        private _fullName: string;

        get fullName(): string {
            return this._fullName;
        }

        set fullName(newName: string) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        }
    }
    let employee1 = new Employee1("John", "D1");
    employee1.fullName = "Bob Smith";
    if (employee1.fullName) {
        console.log(employee1.fullName);
    }

    // static example
    class Grid {
        static origin = { x: 0, y: 0 };
        calculateDistanceFromOrigin(point: { x: number; y: number; }) {
            let xDist = point.x - Grid.origin.x;
            let yDist = point.y - Grid.origin.y;
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
        }
        constructor(public scale: number) {

        }
    }

    let grid1 = new Grid(1.0); //scale
    let grid2 = new Grid(5.0);

    console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
    console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));

    // abstract class example
    // difference from interface is abstract class can have implementation
    // but it looks it is not working in self executing funciton
    /**
    abstract class Department {

        constructor(public name: string) {
        }

        printName(): void {
            console.log("Department name: " + this.name);
        }

        abstract printMeeting(): void; // must be implemented in derived classes
    }**/

    class AccountingDepartment extends Department {

        constructor() {
            super("Accounting and Auditing"); // constructors in derived classes must call super()
        }

        printMeeting(): void {
            console.log("The Accounting Department meets each Monday at 10am.");
        }

        generateReports(): void {
            console.log("Generating accounting reports...");
        }
    }

    let department: Department; // ok to create a reference to an abstract type
    // department = new Department(); // error: cannot create an instance of an abstract class
    department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
    department.printName();
    department.printMeeting();
    //  department.generateReports(); // error: method doesn't exist on declared abstract type

    // constructor functions
    class Greeter1 {
        greeting: string;
        constructor(message: string) {
            this.greeting = message;
        }
        greet() {
            return "Hello, " + this.greeting;
        }
    }

    // we are using Greeter as instance type,
    // we are also creating a constructor function named Greeter1() which is called
    // when we call new Greeter1
    // it is same as following javascript which is generated from class typescript
    // Conclusion:
    // A class declaration creates two things: a type representing instances(this is like an interface)
    // and a constructor function 
    let greeter1: Greeter1;
    greeter1 = new Greeter1("world");
    console.log(greeter1.greet());

    let Greeter2 = (function () {
        function Greeter2(message) {
            this.greeting = message;
        }
        Greeter2.prototype.greet = function () {
            return "Hello, " + this.greeting;
        };
        return Greeter2;
    })()

    let greeter2;
    greeter2 = new Greeter2("world");
    console.log(greeter2.greet());

    //static part of a class

    class Greeter3 {
        static standardGreeting = "Hello, there";
        greeting: string;
        greet() {
            if (this.greeting) {
                return "Hello, " + this.greeting;
            }
            else {
                return Greeter3.standardGreeting;
            }
        }
    }

    let greeter3: Greeter3;
    greeter3 = new Greeter3();
    console.log(greeter3.greet());

    // this is creating another class, 
    //type of Greeter3 , new type is of type  Greeter3
    //  = Greeter3, this is contructor function, called with new keyword
    // it will contain satic part along with the instance part
    let greeterMaker: typeof Greeter3 = Greeter3;
    greeterMaker.standardGreeting = "Hey there!";

    let greeter4: Greeter3 = new greeterMaker();
    console.log(greeter4.greet());

    // As a class is type which is an interface, you can use it as a interface
    class Point {
        x: number;
        y: number;
    }

    interface Point3d extends Point {
        z: number;
    }

    let point3d: Point3d = { x: 1, y: 2, z: 3 };
})()