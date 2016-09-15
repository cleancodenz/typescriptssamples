(function () {
    enum MyEnum {
        A = 1,
        B = A * 2
    }

    let a = MyEnum.A;

    let nameOfA = MyEnum[a]; // "A"
    console.log(nameOfA);

    // compared with regular enum, const enum can not change the value/
    // enum is only compiled to an associate array as name->value pairs
    const enum Directions {
        Up,
        Down,
        Left,
        Right
    }

    let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
})()