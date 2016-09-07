(function () {
    // Named function
    function add(x, y) {
        return x + y;
    }
    // Anonymous function
    var myAdd = function (x, y) { return x + y; };
    // function type, names do not have to match 
    var myAdd1 = function (x, y) { return x + y; };
    // The parameters 'x' and 'y' have the type number
    var myAdd2 = function (x, y) { return x + y; };
    //? makes second parameter optional
    // in javascript, all parameters are optional, but in Typescript, they are not
    // make them optional using ?   
    function buildName(firstName, lastName) {
        if (lastName)
            return firstName + " " + lastName;
        else
            return firstName;
    }
    // default-initialized parameter
    // provide default values, and also make it optional
    // one thing is different from optional paramters is when 
    //function buildName(firstName = "Will", lastName: string)
    // it makes first name not optional at all 
    function buildName2(firstName, lastName) {
        if (lastName === void 0) { lastName = "Smith"; }
        return firstName + " " + lastName;
    }
    // REST parameters
    function buildName3(firstName) {
        var restOfName = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restOfName[_i - 1] = arguments[_i];
        }
        return firstName + " " + restOfName.join(" ");
    }
    var buildNameFun = buildName;
    // this keyword, there is bug, in use of this in functions created by another function, this is pointed to windows rather than the object the creator function is running on
    // this is fixed using ()=> {} 
    // Overloads
    var suits = ["hearts", "spades", "clubs", "diamonds"];
    function pickCard(x) {
        // Check to see if we're working with an object/array
        // if so, they gave us the deck and we'll pick the card
        if (typeof x == "object") {
            var pickedCard = Math.floor(Math.random() * x.length);
            return pickedCard;
        }
        else if (typeof x == "number") {
            var pickedSuit = Math.floor(x / 13);
            return { suit: suits[pickedSuit], card: x % 13 };
        }
    }
    var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
    var pickedCard1 = myDeck[pickCard(myDeck)];
    console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);
    var pickedCard2 = pickCard(15);
    console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
})();
//# sourceMappingURL=functions.js.map