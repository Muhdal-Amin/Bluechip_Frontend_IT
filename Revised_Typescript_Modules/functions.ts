/**
 * Functions in TypeScript can be defined in various ways, including function declarations, function expressions, and arrow functions. 
 * They can also have optional parameters, default parameters, and rest parameters.
 */

function addAllNumbers(items: number[]): void {
    const total = items.reduce((sum, item) => sum + item, 0);
    console.log(`The total is: ${total}`);
}

const items: number[] = [1, 2, 3, 4, 5];
addAllNumbers(items);

function greet(name: string, greeting: string): string {
    return (`${greeting}, ${name}!`);
}
console.log(greet("Alice", "Hello"));

/**
 * Function Expressions:
 */

const multiply = function (a: number, b: number): number {
    return a * b;
}
console.log(multiply(5, 10));

/** 
 * Arrow Functions:
 */
const divide = (a: number, b: number): number => {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}
console.log(divide(10, 2));