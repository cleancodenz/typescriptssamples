(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    var SomeType = (function () {
        function SomeType() {
        }
        return SomeType;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = SomeType;
});
//# sourceMappingURL=MyClass.js.map