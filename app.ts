/*const users=[
    {
        name:"Aryan",
        age:21
    }
]
*/
export function greet(person:{
  name:string;
  age:number
}):string {
    return "hello mr "+person.name+" glad that you are "+person.age+" years old"
}

console.log(greet({
    name:"aryan",
    age:21,
}))

const date = new Date();
date.getFullYear();

interface personInterface{
    name:string,
    age:number,
    geet():string
}

class person implements personInterface{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name="Aryan";
        this.age=21;
    }
    geet(){
        return "hi mr "+this.name;
    }
}

const personObject = new person("Aryan",21)
console.log(personObject);
console.log(personObject.geet());

interface userInterface{
    name:string,
    age:number
}

function geet1(user:userInterface){

}

console.log(geet1({
    name:"Aryan",
    age:21
}));
