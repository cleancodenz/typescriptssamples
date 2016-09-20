(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    //if you’re exporting multiple objects, put them all at top-level
    var SomeType = (function () {
        function SomeType() {
        }
        return SomeType;
    }());
    exports.SomeType = SomeType;
    function someFunc() { }
    exports.someFunc = someFunc;
});
//# sourceMappingURL=MyThings.js.map