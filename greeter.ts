class Student {
    fullName: string;
    // public on arguments to the constructor is a shorthand for creating
    // properties with that name automatically
    constructor(public firstName, public middleInital, public lastName){
        this.fullName = firstName+ " "
        +middleInital+ " "
        +lastName;
    }
}

interface Person {
    firstName: string;
    lastName:string;
}
function greeter(person:Person) {
    return "Hello, "+person.firstName + " " + person.lastName;
}

var user = {
    firstName: "Jane",
    lastName : "User"
};

var user2 = new Student ("Jane", "M.","User");

document.body.innerHTML = greeter(user2);