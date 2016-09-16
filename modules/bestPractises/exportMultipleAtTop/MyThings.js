"use strict";
//if you’re exporting multiple objects, put them all at top-level
var SomeType = (function () {
    function SomeType() {
    }
    return SomeType;
}());
exports.SomeType = SomeType;
function someFunc() { }
exports.someFunc = someFunc;
//# sourceMappingURL=MyThings.js.map