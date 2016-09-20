(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "./ZipCodeValidator"], factory);
    }
})(function (require, exports) {
    "use strict";
    var zip = require("./ZipCodeValidator");
    // Some samples to try
    var strings = ["Hello", "98052", "101"];
    // Validators to use
    var validator = new zip();
    // Show whether each string passed each validator
    strings.forEach(function (s) {
        console.log("\"" + s + "\" - " + (validator.isAcceptable(s) ? "matches" : "does not match"));
    });
});
//# sourceMappingURL=ZipCodeValidatorImport.js.map