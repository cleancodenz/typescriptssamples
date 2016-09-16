//Optionally, a module can wrap one or more modules and combine all their exports using export * from "module" syntax.

export * from "./Validation"; // exports interface 'StringValidator'
//export * from "./LettersOnlyValidator"; // exports class 'LettersOnlyValidator'
export * from "./ZipCodeValidator";  // exports class 'ZipCodeValidator'