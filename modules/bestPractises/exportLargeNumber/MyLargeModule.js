(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    //Use the namespace import pattern if you’re importing a large number of things
    var Dog = (function () {
        function Dog() {
        }
        return Dog;
    }());
    exports.Dog = Dog;
    var Cat = (function () {
        function Cat() {
        }
        return Cat;
    }());
    exports.Cat = Cat;
    var Tree = (function () {
        function Tree() {
        }
        return Tree;
    }());
    exports.Tree = Tree;
    var Flower = (function () {
        function Flower() {
        }
        return Flower;
    }());
    exports.Flower = Flower;
});
//# sourceMappingURL=MyLargeModule.js.map