//Optionally, a module can wrap one or more modules and combine all their exports using export * from "module" syntax.
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
 // exports interface 'StringValidator'
//export * from "./LettersOnlyValidator"; // exports class 'LettersOnlyValidator'
__export(require("./ZipCodeValidator")); // exports class 'ZipCodeValidator'
//# sourceMappingURL=AllValidators.js.map