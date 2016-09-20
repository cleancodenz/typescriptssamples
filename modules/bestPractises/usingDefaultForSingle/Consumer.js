(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "./MyClass", "./MyFunction"], factory);
    }
})(function (require, exports) {
    "use strict";
    var MyClass_1 = require("./MyClass");
    var MyFunction_1 = require("./MyFunction");
    var x = new MyClass_1.default();
    console.log(MyFunction_1.default());
});
//# sourceMappingURL=Consumer.js.map