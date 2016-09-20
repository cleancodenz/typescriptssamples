(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    var numberRegexp = /^[0-9]+$/;
    function default_1(s) {
        return s.length === 5 && numberRegexp.test(s);
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
});
//# sourceMappingURL=StaticZipCodeValidatorDefaultNoName.js.map