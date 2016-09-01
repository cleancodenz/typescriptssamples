var Student = (function () {
    // public on arguments to the constructor is a shorthand for creating
    // properties with that name automatically
    function Student(firstName, middleInital, lastName) {
        this.firstName = firstName;
        this.middleInital = middleInital;
        this.lastName = lastName;
        this.fullName = firstName + " "
            + middleInital + " "
            + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = {
    firstName: "Jane",
    lastName: "User"
};
var user2 = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user2);
//# sourceMappingURL=greeter.js.map