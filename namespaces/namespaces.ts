//Internal modules” are now “namespaces”. “External modules” are now simply “modules”, as to align with ECMAScript 2015’s terminology
//anywhere the module keyword was used when declaring an internal module, the namespace keyword can and should be used instead

//Because we want the interfaces and classes here to be visible outside the namespace, we preface them with export.

namespace Validation1 {

    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }

    const lettersRegexp = /^[A-Za-z]+$/;
    const numberRegexp = /^[0-9]+$/;

    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }

    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}

// Some samples to try
let strings1 = ["Hello", "98052", "101"];

// Validators to use
let validators1: { [s: string]: Validation1.StringValidator; } = {};
validators["ZIP code"] = new Validation1.ZipCodeValidator();
validators["Letters only"] = new Validation1.LettersOnlyValidator();

// Show whether each string passed each validator
for (let s of strings) {
    for (var name in validators) {
        console.log(`"${ s }" - ${ validators[name].isAcceptable(s) ? "matches" : "does not match" } ${ name }`);
    }
}
