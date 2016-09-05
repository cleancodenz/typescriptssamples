(function(){
// using let(ES6) instead of using, as this will create a real block level {} variable
// so within the block it will be different variable if name is same

// if you declare var, it will override  
var a =1;
function four(){
    if (true)
    {
        var a =4; // local variable, not overriding global
    }
    console.log("it should be 4:" + a);
}

four();
console.log("it should be 1 : " + a);

if (true)
{
    var a =3; // this is not block even though there is {}, so it is same variable 
}
console.log("it should be 3 : " + a);

let b : number =1;
function five(){
    if (true)
    {
        let b : number =5;  //block level, new variable
    }
    console.log("it should be 5:" + b);
}

five();
console.log("it should be 1 : " + b);

if (true)
{
    let b: number =3; // this is  block, new variable within that block, different from var 

}
console.log("it should be 1 not 3:  " + b);

// boolean
let isDone: boolean = false;

//number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//String
let color: string = "blue";
color = 'red';

// template strings
let fullName: string = 'Bob Bobbington';
let age: number = 37;
let sentence: string = ` Hello, my name is ${ fullName }`
console.log(sentence);

//array
let list: number[] = [1,2,3];

let list2 : Array<number> = [1,2,3];

// Tuple (kind of array with fixed number elements with fixed type)
let x: [string,number];
x =["hello",10];
console.log(x[0]); // string part
console.log(x[1]); // int part

// Enum
enum Color {Red, Green, Blue};
let c:Color = Color.Blue;

//Any, unknown type
let notSure : any = 4;
//console.log(notSure.ifItExists());
console.log(notSure.toFixed());

let list3: any[] = [1, true, "free"];

// Type assertions, type casting
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

let someValue1: any = "this is a string";
let strLength1: number = (someValue1 as string).length;

})()



