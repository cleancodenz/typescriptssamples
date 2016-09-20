(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "./ProgrammerCalculator"], factory);
    }
})(function (require, exports) {
    "use strict";
    var ProgrammerCalculator_1 = require("./ProgrammerCalculator");
    var c = new ProgrammerCalculator_1.Calculator(2);
    ProgrammerCalculator_1.test(c, "001+010="); // prints 3
});
//# sourceMappingURL=TestProgrammerCalculator.js.map