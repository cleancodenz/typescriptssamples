(function () {
    // for ,,of, iteration through values
    let someArray = [1, "string", false];

    for (let entry of someArray) {
        console.log(entry); // 1, "string", false
    }

    // for,, in iteration though keys

    let list = [4, 5, 6];

    for (let i in list) {
        console.log(i); // "0", "1", "2",
    }

    for (let i of list) {
        console.log(i); // "4", "5", "6"
    }
    //Another distinction is that for..in operates on any object; it serves as a way to inspect properties on this object. for..of on the other hand, is mainly interested in values of iterable objects
     

})()