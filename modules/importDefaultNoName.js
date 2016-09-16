"use strict";
var StaticZipCodeValidatorDefaultNoName_1 = require("./StaticZipCodeValidatorDefaultNoName");
var strings = ["Hello", "98052", "101"];
// Use function validate
strings.forEach(function (s) {
    console.log("\"" + s + "\" " + (StaticZipCodeValidatorDefaultNoName_1.default(s) ? " matches" : " does not match"));
});
//# sourceMappingURL=importDefaultNoName.js.map