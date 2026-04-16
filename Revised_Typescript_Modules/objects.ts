/**
 * Objects in Typescript
 * In TypeScript, objects are a fundamental data structure that allows you to store collections of key-value pairs. 
 * They can be defined using object literals, classes, or interfaces. Objects can have properties and methods, 
 * and they can be used to represent real-world entities or complex data structures.
 * 
 * 1. Object Literal Syntax:
 */

let person: { name: string; age: number } = {
    name: "John",
    age: 30
};
console.log(person.name);
console.log(person.age);

const car = Object.create(person);
car.name = "Toyota";
console.log(car.name);


/**
 * 2. Using Interfaces:
 */

interface Person {
    name: string;
    age: number;
}
let person1: Person = {
    name: "Alice",
    age: 25
};
console.log(person1.name);
console.log(person1.age);

/**
 * 3. Using Classes:
 */

class PersonClass {
    name: string;
    age: number;
    constructor (name: string,  age: number) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Employee extends PersonClass {
    position: string;
    constructor(name: string, age: number, position: string) {
        super(name, age);
        this.position = position;
    }
}
let employee1 = new Employee("Charlie", 28, "Software Engineer");
employee1.greet();
console.log(`I work as a ${employee1.position}.`);

let person2 = new PersonClass("Bob", 35);
person2.greet();