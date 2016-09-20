(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "./MyLargeModule"], factory);
    }
})(function (require, exports) {
    "use strict";
    //Use the namespace import pattern if you’re importing a large number of things
    var myLargeModule = require("./MyLargeModule");
    var x = new myLargeModule.Dog();
});
//# sourceMappingURL=Consumer.js.map