(function () {
    // basics
    // x is infered to be number
    var x = 3;
    // Base common type
    // picks the type that is compatible for all the other candidates
    var x1 = [0, 1, null];
    // you have to explicitly declare the super type for all elements
    //let zoo: Animal[] = [new Rhino(), new Elephant(), new Snake()];
    // contextual type
    // the type is inferred from left
    window.onmousedown = function (mouseEvent) {
        //console.log(mouseEvent.buton);  //<- Error
    };
    window.onmousedown = function (mouseEvent) {
        console.log(mouseEvent.buton); //<- Now, no error is given. but it is not undefined
    };
    // contetual reference from return
    // function createZoo(): Animal[] {
    //     return [new Rhino(), new Elephant(), new Snake()];
    //}
})();
//# sourceMappingURL=typeinference.js.map