(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "./map"], factory);
    }
})(function (require, exports) {
    "use strict";
    require("./map");
    var o;
    o.map(function (x) { return x.toFixed(); });
});
//# sourceMappingURL=consumer.js.map