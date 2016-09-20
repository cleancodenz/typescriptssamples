(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "./MyThings"], factory);
    }
})(function (require, exports) {
    "use strict";
    //Explicitlly list imported names
    var MyThings_1 = require("./MyThings");
    var x = new MyThings_1.SomeType();
    var y = MyThings_1.someFunc();
});
//# sourceMappingURL=Consumer.js.map