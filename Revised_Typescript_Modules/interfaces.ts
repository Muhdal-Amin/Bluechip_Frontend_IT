/**
 * Interfaces in TypeScript
 * In TypeScript, interfaces are a powerful way to define the structure of an object. 
 * They allow you to specify the properties and methods that an object should have, without providing the implementation. 
 * Interfaces can be used to define the shape of objects, function types, and even classes. 
 * They are a key feature of TypeScript that helps with type checking and code organization.
 * 
 * 1. Defining Object Interfaces:
 */

interface Person {
    name: string;
    age: number;
}
let person3: Person = {
    name: "Alice",
    age: 25
};
console.log(person3.name, person3.age);

/**
 * 2. Defining Function Interfaces:
 */
interface GreetFunction {
    (name: string, greeting: string): string;
}
const greeting: GreetFunction = (name, greeting) => {
    return `${greeting}, ${name}!`;
}
console.log(greeting("Alice", "Hello"));

/**
 * 3. Defining Class Interfaces:
 */
interface PersonInterface {
    name: string;
    age: number;
    greet(): void;
}
class Person4Class implements PersonInterface {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
let person4 = new Person4Class("Alice", 25);
person4.greet();