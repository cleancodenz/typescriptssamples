(function () {
    var MyEnum;
    (function (MyEnum) {
        MyEnum[MyEnum["A"] = 1] = "A";
        MyEnum[MyEnum["B"] = 2] = "B";
    })(MyEnum || (MyEnum = {}));
    var a = MyEnum.A;
    var nameOfA = MyEnum[a]; // "A"
    console.log(nameOfA);
    var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
})();
//# sourceMappingURL=enums.js.map