(function () {
    // for ,,of, iteration through values
    var someArray = [1, "string", false];
    for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
        var entry = someArray_1[_i];
        console.log(entry); // 1, "string", false
    }
    // for,, in iteration though keys
    var list = [4, 5, 6];
    for (var i in list) {
        console.log(i); // "0", "1", "2",
    }
    for (var _a = 0, list_1 = list; _a < list_1.length; _a++) {
        var i = list_1[_a];
        console.log(i); // "4", "5", "6"
    }
    //Another distinction is that for..in operates on any object; it serves as a way to inspect properties on this object. for..of on the other hand, is mainly interested in values of iterable objects
})();
//# sourceMappingURL=iteratorAndGenerators.js.map