// abstract class example
// difference from interface is abstract class can have implementation
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Department = (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Department name: " + this.name);
    };
    return Department;
}());
(function () {
    var Greeter = (function () {
        function Greeter(message) {
            this.greeting = message;
        }
        Greeter.prototype.greet = function () {
            return "Hello, " + this.greeting;
        };
        return Greeter;
    }());
    var greeter = new Greeter("world");
    //inheritance
    // default modifier is public
    var Animal = (function () {
        function Animal(theName) {
            this.name = theName;
        }
        Animal.prototype.move = function (distanceInMeters) {
            if (distanceInMeters === void 0) { distanceInMeters = 0; }
            console.log(this.name + " moved " + distanceInMeters + "m.");
        };
        return Animal;
    }());
    var Snake = (function (_super) {
        __extends(Snake, _super);
        function Snake(name) {
            // must contain super()
            _super.call(this, name);
        }
        Snake.prototype.move = function (distanceInMeters) {
            if (distanceInMeters === void 0) { distanceInMeters = 5; }
            console.log("Slithering...");
            _super.prototype.move.call(this, distanceInMeters);
        };
        return Snake;
    }(Animal));
    var Horse = (function (_super) {
        __extends(Horse, _super);
        function Horse(name) {
            _super.call(this, name);
        }
        Horse.prototype.move = function (distanceInMeters) {
            if (distanceInMeters === void 0) { distanceInMeters = 45; }
            console.log("Galloping...");
            _super.prototype.move.call(this, distanceInMeters);
        };
        return Horse;
    }(Animal));
    var sam = new Snake("Sammy the Python");
    var tom = new Horse("Tommy the Palomino");
    sam.move();
    tom.move(34);
    // typescript is structure type system, for two types considered to be compatiable
    // private, protected and public members must all match
    var Animal1 = (function () {
        function Animal1(theName) {
            this.name = theName;
        }
        return Animal1;
    }());
    // parameter properties
    var Animal3 = (function () {
        function Animal3(name) {
            this.name = name;
        }
        return Animal3;
    }());
    var Rhino = (function (_super) {
        __extends(Rhino, _super);
        function Rhino() {
            // this.name not accessible from extensions 
            _super.call(this, "Rhino");
        }
        return Rhino;
    }(Animal1));
    var Animal2 = (function () {
        function Animal2(theName) {
            this.name = theName;
        }
        Animal2.prototype.move = function (distanceInMeters) {
            if (distanceInMeters === void 0) { distanceInMeters = 0; }
            console.log(this.name + " moved " + distanceInMeters + "m.");
        };
        return Animal2;
    }());
    var Employee = (function () {
        function Employee(theName) {
            this.name = theName;
        }
        return Employee;
    }());
    var animal = new Animal1("Goat");
    var rhino = new Rhino();
    var animal2 = new Animal2("Dog");
    var employee = new Employee("Bob");
    animal = rhino;
    tom = animal2; // all public memebers match, and no private
    //animal = employee; // having same private field, but not from same declaration
    // Protected difference from private is proctected can 
    var Person = (function () {
        function Person(name) {
            this.name = name;
        }
        return Person;
    }());
    var passcode = "secret passcode";
    var Employee1 = (function (_super) {
        __extends(Employee1, _super);
        function Employee1(name, department) {
            _super.call(this, name);
            this.department = department;
        }
        Employee1.prototype.getElevatorPitch = function () {
            // this.name is accessible as it is protected
            return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
        };
        Object.defineProperty(Employee1.prototype, "fullName", {
            get: function () {
                return this._fullName;
            },
            set: function (newName) {
                if (passcode && passcode == "secret passcode") {
                    this._fullName = newName;
                }
                else {
                    console.log("Error: Unauthorized update of employee!");
                }
            },
            enumerable: true,
            configurable: true
        });
        return Employee1;
    }(Person));
    var employee1 = new Employee1("John", "D1");
    employee1.fullName = "Bob Smith";
    if (employee1.fullName) {
        console.log(employee1.fullName);
    }
    // static example
    var Grid = (function () {
        function Grid(scale) {
            this.scale = scale;
        }
        Grid.prototype.calculateDistanceFromOrigin = function (point) {
            var xDist = point.x - Grid.origin.x;
            var yDist = point.y - Grid.origin.y;
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
        };
        Grid.origin = { x: 0, y: 0 };
        return Grid;
    }());
    var grid1 = new Grid(1.0); //scale
    var grid2 = new Grid(5.0);
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
    var AccountingDepartment = (function (_super) {
        __extends(AccountingDepartment, _super);
        function AccountingDepartment() {
            _super.call(this, "Accounting and Auditing"); // constructors in derived classes must call super()
        }
        AccountingDepartment.prototype.printMeeting = function () {
            console.log("The Accounting Department meets each Monday at 10am.");
        };
        AccountingDepartment.prototype.generateReports = function () {
            console.log("Generating accounting reports...");
        };
        return AccountingDepartment;
    }(Department));
    var department; // ok to create a reference to an abstract type
    // department = new Department(); // error: cannot create an instance of an abstract class
    department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
    department.printName();
    department.printMeeting();
    //  department.generateReports(); // error: method doesn't exist on declared abstract type
    // constructor functions
    var Greeter1 = (function () {
        function Greeter1(message) {
            this.greeting = message;
        }
        Greeter1.prototype.greet = function () {
            return "Hello, " + this.greeting;
        };
        return Greeter1;
    }());
    // we are using Greeter as instance type,
    // we are also creating a constructor function named Greeter1() which is called
    // when we call new Greeter1
    // it is same as following javascript which is generated from class typescript
    // Conclusion:
    // A class declaration creates two things: a type representing instances(this is like an interface)
    // and a constructor function 
    var greeter1;
    greeter1 = new Greeter1("world");
    console.log(greeter1.greet());
    var Greeter2 = (function () {
        function Greeter2(message) {
            this.greeting = message;
        }
        Greeter2.prototype.greet = function () {
            return "Hello, " + this.greeting;
        };
        return Greeter2;
    })();
    var greeter2;
    greeter2 = new Greeter2("world");
    console.log(greeter2.greet());
    //static part of a class
    var Greeter3 = (function () {
        function Greeter3() {
        }
        Greeter3.prototype.greet = function () {
            if (this.greeting) {
                return "Hello, " + this.greeting;
            }
            else {
                return Greeter3.standardGreeting;
            }
        };
        Greeter3.standardGreeting = "Hello, there";
        return Greeter3;
    }());
    var greeter3;
    greeter3 = new Greeter3();
    console.log(greeter3.greet());
    // this is creating another class, 
    //type of Greeter3 , new type is of type  Greeter3
    //  = Greeter3, this is contructor function, called with new keyword
    // it will contain satic part along with the instance part
    var greeterMaker = Greeter3;
    greeterMaker.standardGreeting = "Hey there!";
    var greeter4 = new greeterMaker();
    console.log(greeter4.greet());
    // As a class is type which is an interface, you can use it as a interface
    var Point = (function () {
        function Point() {
        }
        return Point;
    }());
    var point3d = { x: 1, y: 2, z: 3 };
})();
//# sourceMappingURL=classes.js.map