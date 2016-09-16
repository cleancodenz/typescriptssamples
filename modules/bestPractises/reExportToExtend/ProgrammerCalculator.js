"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//This is to extend calculator
var Calculator_1 = require("./Calculator");
var ProgrammerCalculator = (function (_super) {
    __extends(ProgrammerCalculator, _super);
    function ProgrammerCalculator(base) {
        _super.call(this);
        this.base = base;
        if (base <= 0 || base > ProgrammerCalculator.digits.length) {
            throw new Error("base has to be within 0 to 16 inclusive.");
        }
    }
    ProgrammerCalculator.prototype.processDigit = function (digit, currentValue) {
        if (ProgrammerCalculator.digits.indexOf(digit) >= 0) {
            return currentValue * this.base + ProgrammerCalculator.digits.indexOf(digit);
        }
    };
    ProgrammerCalculator.digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    return ProgrammerCalculator;
}(Calculator_1.Calculator));
exports.Calculator = ProgrammerCalculator;
// Export the new extended calculator as Calculator
// Also, export the helper function
var Calculator_2 = require("./Calculator");
exports.test = Calculator_2.test;
//# sourceMappingURL=ProgrammerCalculator.js.map