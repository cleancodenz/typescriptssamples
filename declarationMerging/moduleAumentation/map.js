(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "./observable"], factory);
    }
})(function (require, exports) {
    "use strict";
    // map.js
    var observable_1 = require("./observable");
    observable_1.Observable.prototype.map = function (f) {
        // ... another exercise for the reader
    };
});
//# sourceMappingURL=map.js.map