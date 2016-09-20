//Internal modules” are now “namespaces”. “External modules” are now simply “modules”, as to align with ECMAScript 2015’s terminology
//anywhere the module keyword was used when declaring an internal module, the namespace keyword can and should be used instead
//Because we want the interfaces and classes here to be visible outside the namespace, we preface them with export.
var Validation1;
(function (Validation1) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var numberRegexp = /^[0-9]+$/;
    var LettersOnlyValidator = (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidator;
    }());
    Validation1.LettersOnlyValidator = LettersOnlyValidator;
    var ZipCodeValidator = (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    }());
    Validation1.ZipCodeValidator = ZipCodeValidator;
})(Validation1 || (Validation1 = {}));
// Some samples to try
var strings1 = ["Hello", "98052", "101"];
// Validators to use
var validators_1 = {};
validators_1["ZIP code"] = new Validation1.ZipCodeValidator();
validators_1["Letters only"] = new Validation1.LettersOnlyValidator();
// Show whether each string passed each validator
for (var _i = 0, strings1_1 = strings1; _i < strings1_1.length; _i++) {
    var s = strings1_1[_i];
    for (var name in validators_1) {
        console.log("\"" + s + "\" - " + (validators_1[name].isAcceptable(s) ? "matches" : "does not match") + " " + name);
    }
}
//# sourceMappingURL=namespaces.js.map