/**
 * Both CommonJS and AMD generally have the concept of an exports object which contains all exports from a module.

They also support replacing the exports object with a custom single object. Default exports are meant to act as a replacement for this behavior; however, the two are incompatible. TypeScript supports export = to model the traditional CommonJS and AMD workflow.

The export = syntax specifies a single object that is exported from the module. This can be a class, interface, namespace, function, or enum.

When importing a module using export =, TypeScript-specific import let = require("module") must be used to import the module.

 *
 * **/
"use strict";
var numberRegexp = /^[0-9]+$/;
var ZipCodeValidator = (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && numberRegexp.test(s);
    };
    return ZipCodeValidator;
}());
module.exports = ZipCodeValidator;
//# sourceMappingURL=ZipCodeValidator.js.map