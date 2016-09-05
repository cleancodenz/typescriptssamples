(function () {
    // Named function
    function add(x: number, y: number): number {
        return x + y;
    }

    // Anonymous function
    let myAdd = function (x: number, y: number): number { return x + y; };

    // function type, names do not have to match 
    let myAdd1: (baseValue: number, increment: number) => number =
        function (x: number, y: number): number { return x + y; };

    // The parameters 'x' and 'y' have the type number
    let myAdd2: (baseValue: number, increment: number) => number =
        function (x, y) { return x + y; };

    //? makes second parameter optional
    // in javascript, all parameters are optional, but in Typescript, they are not
    // make them optional using ?   
    function buildName(firstName: string, lastName?: string) {
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
    function buildName2(firstName: string, lastName = "Smith") {
        return firstName + " " + lastName;
    }
    // REST parameters
    function buildName3(firstName: string, ...restOfName: string[]) {
        return firstName + " " + restOfName.join(" ");
    }

    let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;

    // this keyword, there is bug, in use of this in functions created by another function, this is pointed to windows rather than the object the creator function is running on
    // this is fixed using ()=> {} 

    // Overloads
    let suits = ["hearts", "spades", "clubs", "diamonds"];

    function pickCard(x: { suit: string; card: number; }[]): number;
    function pickCard(x: number): { suit: string; card: number; };
    function pickCard(x): any {
        // Check to see if we're working with an object/array
        // if so, they gave us the deck and we'll pick the card
        if (typeof x == "object") {
            let pickedCard = Math.floor(Math.random() * x.length);
            return pickedCard;
        }
        // Otherwise just let them pick the card
        else if (typeof x == "number") {
            let pickedSuit = Math.floor(x / 13);
            return { suit: suits[pickedSuit], card: x % 13 };
        }
    }

    let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
    let pickedCard1 = myDeck[pickCard(myDeck)];
    alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

    let pickedCard2 = pickCard(15);
    alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);

})()