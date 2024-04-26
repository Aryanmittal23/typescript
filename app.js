"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = void 0;
/*const users=[
    {
        name:"Aryan",
        age:21
    }
]
*/
function greet(person) {
    return "hello mr " + person.name + " glad that you are " + person.age + " years old";
}
exports.greet = greet;
console.log(greet({
    name: "aryan",
    age: 21,
}));
var date = new Date();
date.getFullYear();
var person = /** @class */ (function () {
    function person(name, age) {
        this.name = "Aryan";
        this.age = 21;
    }
    person.prototype.geet = function () {
        return "hi mr " + this.name;
    };
    return person;
}());
var personObject = new person("Aryan", 21);
console.log(personObject);
console.log(personObject.geet());
function geet1(user) {
}
console.log(geet1({
    name: "Aryan",
    age: 21
}));
