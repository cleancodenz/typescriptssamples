(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "./Calculator"], factory);
    }
})(function (require, exports) {
    "use strict";
    var Calculator_1 = require("./Calculator");
    var c = new Calculator_1.Calculator();
    Calculator_1.test(c, "1+2*33/11="); // prints 9
});
//# sourceMappingURL=TestCalculator.js.map