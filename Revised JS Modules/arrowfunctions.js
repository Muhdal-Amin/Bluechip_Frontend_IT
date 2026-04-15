/**
 * Arrow functions are a concise way to write functions in JavaScript. They were introduced in ES6 and provide a shorter syntax compared to traditional function expressions. Arrow functions also have some unique features, such as lexical scoping of the `this` keyword.
 * 
 * In this example, we define an arrow function called `greet` that takes a name as an argument and returns a greeting message. We also define another arrow function called `add` that takes two numbers as arguments and returns their sum.       
 */
const greet = (name) => {
    return `Hello, ${name}!`;
};

const add = (a, b) => a + b;
// Example usage:
console.log(greet('Alice')); // Output: Hello, Alice!
console.log(add(5, 3)); // Output: 8   

// Practical example of using arrow functions in an array method:
let numbers = [-2, -1, 0, 1, 2];
let traditional = numbers.filter(function(num) {
    return num >= 0;
    }
);
let arrow = numbers.filter(num => num >= 0);

console.log(traditional);
console.log(arrow);