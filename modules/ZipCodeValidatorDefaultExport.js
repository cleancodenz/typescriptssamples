"use strict";
var ZipCodeValidator = (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && ZipCodeValidator.numberRegexp.test(s);
    };
    ZipCodeValidator.numberRegexp = /^[0-9]+$/;
    return ZipCodeValidator;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ZipCodeValidator;
//# sourceMappingURL=ZipCodeValidatorDefaultExport.js.map