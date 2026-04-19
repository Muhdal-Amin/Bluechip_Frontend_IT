/**
 * Aliases in Typescript
 * In TypeScript, type aliases are a powerful way to create new names for existing types. 
 * They allow you to define a type that can be used in place of another type, making your code more readable and maintainable. 
 * Type aliases can be used for primitive types, union types, intersection types, tuples, and more.
 * 1. Basic Type Aliases:
 */

type StringAlias = string;
type NumberAlias = number;
type BooleanAlias = boolean;

let names: StringAlias = "John A";
let age: NumberAlias = 30;
let isStudent: BooleanAlias = false;    
console.log(names, age, isStudent);

// Using type aliases for complex types (object literals):
type User = {
    name: string;
    score: number;
};

let user1: User = {
    name: "Alice",
    score: 25
};

function displayUserInfo1(user: User): void {
    console.log(`${user.name} has a score of ${user.score}`);
}
displayUserInfo1(user1);
displayUserInfo1({ name: "Bob", score: 40 }); //outputs the same thing as the above.


/**
 * 2. Union Types with Type Aliases:
 */
type StringOrNumber = string | number;
let value1: StringOrNumber = "Hello";
let value2: StringOrNumber = 42;
console.log(value1, value2);

/**
 * 3. Intersection Types with Type Aliases:
 */
type Person1 = {
    name: string;
    age: number;
}
type Employee1 = {
    position: string;
}
type EmployeePerson = Person1 & Employee1;
let employeePerson: EmployeePerson = {
    name: "Alice",
    age: 25,
    position: "Software Engineer"
};
console.log("\n", employeePerson.name, employeePerson.age, employeePerson.position);

/**
 * 4. Tuple Type Aliases:
 */
type  RGB = [number, number, number];
function getRandomColor(): RGB {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return [r, g, b];
}
const color1 = getRandomColor();
const color2 = getRandomColor();
console.log("\n", `Random Color 1: rgb(${color1[0]}, ${color1[1]}, ${color1[2]})`);
console.log(`Random Color 2: rgb(${color2[0]}, ${color2[1]}, ${color2[2]})`);


/**
 * 5. Function Type Aliases:
 */
type GreetFunctionAlias = (name: string, greeting: string) => string;
const greet1: GreetFunctionAlias = (name, greeting) => {
    return `${greeting}, ${name}!`;
}
console.log("\n", greet1("Alice", "Hello"));

/**
 * Differences between Type Aliases and Interfaces:
 * Type aliases and interfaces in TypeScript are both used to define custom types, but they have some differences:
 * 1. Syntax: Type aliases use the `type` keyword, while interfaces use the `interface` keyword.
 * 2. Capabilities: Type aliases can represent primitive types, union types, intersection types, tuples, and more, while interfaces are primarily used to define the shape of objects and classes.
 * 3. Extensibility: Interfaces can be extended using the `extends` keyword, allowing you to create new interfaces based on existing ones. Type aliases cannot be extended in the same way, but they can be combined using intersection types.
 * 4. Declaration Merging: Interfaces support declaration merging, which means you can declare the same interface multiple times and TypeScript will merge them together. Type aliases do not support declaration merging.
 * In general, interfaces are often preferred for defining the shape of objects and classes, while type aliases are more suitable for creating complex types or when you need to use features that interfaces do not support.
 */ 