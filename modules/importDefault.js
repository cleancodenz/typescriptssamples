(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "./ZipCodeValidatorDefaultExport"], factory);
    }
})(function (require, exports) {
    "use strict";
    // the difference of ipmorting default or not is just no {} for default
    var ZipCodeValidatorDefaultExport_1 = require("./ZipCodeValidatorDefaultExport");
    var myValidator = new ZipCodeValidatorDefaultExport_1.default();
});
//# sourceMappingURL=importDefault.js.map