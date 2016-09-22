/**
 * One unique to TypeScript is the concept of ‘declaration merging’
 * 
 * For the purposes of this article, “declaration merging” means that the compiler merges two separate declarations declared with the same name into a single definition. This merged definition has the features of both of the original declarations. Any number of declarations can be merged; it’s not limited to just two declarations.
 * 
 */

/**
 * 
 * In TypeScript, a declaration creates entities in at least one of three groups:
 *   namespace, type, or value. 
 * Namespace-creating declarations create a namespace, which contains names that are accessed using a dotted notation. 
 * Type-creating declarations do just that: they create a type that is visible with the declared shape and bound to the given name. 
 * Lastly, value-creating declarations create values that are visible in the output JavaScript.
 * 
 * Declaration Type	    Namespace	Type	Value
    Namespace	            X		X
    Class		                    X	        X
    Enum		                    X	        X
    Interface		                X	
    Type Alias		                X	
    Function			                        X
    Variable			                        X
 */
// Merging Interface
//The simplest, and perhaps most common, type of declaration merging is interface merging. At the most basic level, the merge mechanically joins the members of both declarations into a single interface with the same name.

interface Box {
    height: number;
    width:number;
}

interface Box{
    scale: number;
}

let box:Box = {height:5, width:6,scale:10};

/** 
interface Cloner {
    clone(animal: Animal): Animal;
}

interface Cloner {
    clone(animal: Sheep): Sheep;
}

interface Cloner {
    clone(animal: Dog): Dog;
    clone(animal: Cat): Cat;
}

The three interfaces will merge to create a single declaration as so:

interface Cloner {
    clone(animal: Dog): Dog;
    clone(animal: Cat): Cat;
    clone(animal: Sheep): Sheep;
    clone(animal: Animal): Animal;
}
Notice that the elements of each group maintains the same order, but the groups themselves are merged with later overload sets ordered first.
One exception to this rule is specialized signatures. If a signature has a parameter whose type is a single string literal type (e.g. not a union of string literals), then it will be bubbled toward the top of its merged overload list.

interface Document {
    createElement(tagName: any): Element;
}
interface Document {
    createElement(tagName: "div"): HTMLDivElement;
    createElement(tagName: "span"): HTMLSpanElement;
}
interface Document {
    createElement(tagName: string): HTMLElement;
    createElement(tagName: "canvas"): HTMLCanvasElement;
}

interface Document {
    createElement(tagName: "canvas"): HTMLCanvasElement;
    createElement(tagName: "div"): HTMLDivElement;
    createElement(tagName: "span"): HTMLSpanElement;
    createElement(tagName: string): HTMLElement;
    createElement(tagName: any): Element;
}

*/

// Merging namespaces
//Similarly to interfaces, namespaces of the same name will also merge their members. Since namespaces create both a namespace and a value, we need to understand how both merge.

namespace Animals {
    export class Zebra { }
}

namespace Animals {
    export interface Legged { numberOfLegs: number; }
    export class Dog { }
}
// it is equivalent
/**
namespace Animals {
    export interface Legged { numberOfLegs: number; }

    export class Zebra { }
    export class Dog { }
}
 */
/**
 * but we also need to understand what happens with non-exported members. Non-exported members are only visible in the original (un-merged) namespace. This means that after merging, merged members that came from other declarations cannot see non-exported members.
 * namespace Animal {
    let haveMuscles = true;

    export function animalsHaveMuscles() {
        return haveMuscles;
    }
}

namespace Animal {
    export function doAnimalsHaveMuscles() {
        return haveMuscles;  // <-- error, haveMuscles is not visible here
    }
}
 * 
 */

// Merging namespaces with classes, functions, enums
//Merging Namespaces with Classes
//The end result is a class managed inside of another class. You can also use namespaces to add more static members to an existing class.

class Album {
    label: Album.AlbumLabel;
}
namespace Album {
    export class AlbumLabel { }
}

// Merging namespaces functions
function buildLabel(name: string): string {
    return buildLabel.prefix + name + buildLabel.suffix;
}

// this namespace add properties to function 
namespace buildLabel {
    export let suffix = "";
    export let prefix = "Hello, ";
}

console.log(buildLabel("Sam Smith"));

// using namespaces to extend wth static members

enum Color {
    red = 1,
    green = 2,
    blue = 4
}

namespace Color {
    export function mixColor(colorName: string) {
        if (colorName == "yellow") {
            return Color.red + Color.green;
        }
        else if (colorName == "white") {
            return Color.red + Color.green + Color.blue;
        }
        else if (colorName == "magenta") {
            return Color.red + Color.blue;
        }
        else if (colorName == "cyan") {
            return Color.green + Color.blue;
        }
    }
}
/**
 * Disallowed merges
 * 
 * Not all merges are allowed in TypeScript. Currently, classes can not merge with other classes or with variables. For information on mimicking class merging, see the Mixins in TypeScript section.
 * 
 * 
 */

// Module Augmentation
//Although JavaScript modules do not support merging, you can patch existing objects by importing and then updating them. Let’s look at a toy Observable example:
/** */