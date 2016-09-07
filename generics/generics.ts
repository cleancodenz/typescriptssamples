(function () {

    function identity(arg: number): number {
        return arg;
    }

    function identity1(arg: any): any {
        return arg;
    }

    function identity2<T>(arg: T): T {
        return arg;
    }

    let output = identity2<string>("myString");  // type of output will be 'string'

    // using type inference rather than <>
    //the compiler just looked at the value "myString", and set T to its typ
    let output2 = identity2("myString");

    function loggingIdentity<T>(arg: T[]): T[] {
        console.log(arg.length);  // Array has a .length, so no more error
        return arg;
    }
    function loggingIdentity1<T>(arg: Array<T>): Array<T> {
        console.log(arg.length);  // Array has a .length, so no more error
        return arg;
    }

    // generics in functions
    let myIdentity: <U>(arg: U) => U = identity2;

    let myIdentity1: { <T>(arg: T): T } = identity2;

    // generic interfaces
    interface GenericIdentityFn<T> {
        (arg: T): T;
    }

    function identity3<T>(arg: T): T {
        return arg;
    }

    let myIdentity2: GenericIdentityFn<number> = identity;

    // Generic Classes, class with add method not implemented?
    // Generic only works with instance side of Class, not static side
    class GenericNumber<T> {
        zeroValue: T;
        add: (x: T, y: T) => T;
    }

    let myGenericNumber = new GenericNumber<number>();
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = function (x, y) { return x + y; };
    console.log(myGenericNumber.add(1, 2));

    // Generic constraints
    interface Lengthwise {
        length: number;
    }

    function loggingIdentity2<T extends Lengthwise>(arg: T): T {
        console.log(arg.length);  // Now we know it has a .length property, so no more error
        return arg;
    }
    loggingIdentity2({ length: 10, value: 3 });

    // Using type parameters in Generic constraints
    function copyFields<T extends U, U>(target: T, source: U): T {
        for (let id in source) {
            target[id] = source[id];
        }
        return target;
    }
    let x = { a: 1, b: 2, c: 3, d: 4 };

    copyFields(x, { b: 10, d: 20 }); // okay
    // copyFields(x, { Q: 90 });  // error: property 'Q' isn't declared in 'x'.

    //Using Class Types in Generics
    // when creating factories using generics, it is necessary to refer to class types by their constructor functions


    function create<T>(c: { new (): T; }): T {
        return new c();
    }
    
  
    //A more advanced example uses the prototype property to infer and constrain relationships between the constructor function and the instance side of class types.

    class BeeKeeper {
        hasMask: boolean;
        constructor(){
            this.hasMask = false;
        }
    }

    let beekeeper = create(BeeKeeper);
    beekeeper.hasMask = true;

    
    class ZooKeeper {
        nametag: string;
    }

    class Animal {
        numLegs: number;
    }

    class Bee extends Animal {
        keeper: BeeKeeper;
    }

    class Lion extends Animal {
        keeper: ZooKeeper= {
            nametag: 'Icy'
        }; // this is on Lion.prototype
      
    }

    function findKeeper<A extends Animal, K>(
        a: {   new (): A; prototype: { keeper: K }}): K {
         // this gives us constructor function   
        return a.prototype.keeper;
     
    }

    // Lion passed, not instance, a.prototype.keeper has not been defined
    // not a good example, but example of type inference
    let keeper = findKeeper(Lion);
    keeper.nametag = "lion keeper2";  // typechecks!

})()