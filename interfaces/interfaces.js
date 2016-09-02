var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function () {
    function printLabel(labelObject) {
        console.log(labelObject.label);
    }
    var myObject = { size: 10, label: "Size 10 Object" };
    printLabel(myObject);
    function printLabel1(labelObject) {
        console.log(labelObject.label);
    }
    printLabel1(myObject);
    // returning type example as well
    function createSquare(config) {
        var newSquare = { color: "white", area: 100 };
        if (config.color) {
            newSquare.color = config.color;
        }
        if (config.width) {
            newSquare.area = config.width * config.width;
        }
        return newSquare;
    }
    var mySquare = createSquare({ color: "black" });
    var mySearch, mySearch1;
    // names of parameters do not need to match
    mySearch = function (source, subString) {
        var result = source.search(subString);
        if (result == -1) {
            return false;
        }
        else {
            return true;
        }
    };
    mySearch1 = function (src, sub) {
        var result = src.search(sub);
        if (result == -1) {
            return false;
        }
        else {
            return true;
        }
    };
    var myArray;
    myArray = ["Bob", "Fred"];
    var myStr = myArray[0];
    var Animal = (function () {
        function Animal() {
        }
        return Animal;
    }());
    var Dog = (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            _super.apply(this, arguments);
        }
        return Dog;
    }(Animal));
    var Clock = (function () {
        function Clock(h, m) {
        }
        Clock.prototype.setTime = function (d) {
            this.currentTime = d;
        };
        return Clock;
    }());
    // this is hard to understand, constructor function
    // the difference is : it is not using implements nor extends
    // it is using :  
    // What it needs to be done in this case:
    //   must return an instance with propert
    function getCounter() {
        // let counter = <Counter>function (start: number) {
        //     console.log('in the counter function');
        //     return 'done';
        // };
        var counter;
        counter.interval = 123;
        counter.reset = function () { console.log('in the reset function'); };
        return counter;
    }
    var c = getCounter();
    c(10); // use it as function
    c.reset(); // use it as an object
    c.interval = 5.0;
    //Interfaces Extending Classes
    /**
     * When an interface type extends a class type it inherits the members of the class but not their implementations. It is as if the interface had declared all of the members of the class without providing an implementation. Interfaces inherit even the private and protected members of a base class. This means that when you create an interface that extends a class with private or protected members, that interface type can only be implemented by that class or a subclass of it.

    This is useful when you have a large inheritance hierarchy, but want to specify that your code works with only subclasses that have certain properties. The subclasses don’t have to be related besides inheriting from the base class

     * **/
    // do not understand this
    var Control = (function () {
        function Control() {
        }
        return Control;
    }());
    // this actually implments 
    var Button = (function (_super) {
        __extends(Button, _super);
        function Button() {
            _super.apply(this, arguments);
        }
        Button.prototype.select = function () { };
        return Button;
    }(Control));
    var TextBox = (function (_super) {
        __extends(TextBox, _super);
        function TextBox() {
            _super.apply(this, arguments);
        }
        TextBox.prototype.select = function () { };
        return TextBox;
    }(Control));
    var Image = (function (_super) {
        __extends(Image, _super);
        function Image() {
            _super.apply(this, arguments);
        }
        return Image;
    }(Control));
    var Location = (function () {
        function Location() {
        }
        Location.prototype.select = function () { };
        return Location;
    }());
})();
//# sourceMappingURL=interfaces.js.map