"use strict";
function getInfo(firstName, lastName, greetStr) {
    return `${greetStr}, I am ${firstName} ${lastName}.`;
}
function getId(empid, greetStr) {
    return `${greetStr}, my employee id is ${empid}.`;
}
function CreatePerson(fn, ln) {
    return {
        firstName: fn,
        lastName: ln,
        getInfo: (greetStr) => getInfo(fn, ln, greetStr)
    };
}
function CreateEmployee(fn, ln, empid) {
    return {
        empid: empid,
        getId: (greetStr) => getId(empid, greetStr),
        getInfo: (greetStr) => getInfo(fn, ln, greetStr)
    };
}
var e1 = CreateEmployee('john', 'doe', "123");
console.log(e1.getInfo('Hi')); // Hi, I am John Doe.
console.log(e1.getId('Hello')); // Hello, my employee id is 123.
