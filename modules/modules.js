"use strict";
(function () {
    //it’s important to note that in TypeScript 1.5, the nomenclature has changed. “Internal modules” are now “namespaces”. “External modules” are now simply “modules
    //in TypeScript, just as in ECMAScript 2015, any file containing a top-level import or export is considered a module.
})();
//Import a single export from a module
var ZipCodeValidator_1 = require("./ZipCodeValidator");
var myValidator = new ZipCodeValidator_1.ZipCodeValidator();
//imports can also be renamed
var ZipCodeValidator_2 = require("./ZipCodeValidator");
var myValidator2 = new ZipCodeValidator_2.ZipCodeValidator();
//Import the entire module into a single variable, and use it to access the module exports
var validator = require("./ZipCodeValidator");
var myValidator3 = new validator.ZipCodeValidator();
//Import a module for side-effects only
//Though not recommended practice, some modules set up some global state that can be used by other modules. These modules may not have any exports, or the consumer is not interested in any of their exports. To import these modules, use:
//import "./my-module.js";
//default export
//# sourceMappingURL=modules.js.map