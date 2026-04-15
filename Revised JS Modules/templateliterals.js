/**
 * Template literals or Template strings use back-ticks (``) rather than the quotes ("") to define a string.
 * They allow for embedded expressions, which can be used for string interpolation. This means you can include variables and expressions inside a string without needing to concatenate them with the + operator.
 * Template literals also support multi-line strings, which can be created by simply pressing Enter within the back-ticks.
 * In this example, we demonstrate how to use template literals to create a greeting message that includes a variable (name) and an expression (2 + 3).
 */

const name = 'Alice';
const greeting = `Hello, ${name}! The result of 2 + 3 is ${2 + 3}.`;
console.log(greeting); // Output: Hello, Alice! The result of 2 + 3 is 5.

/**
 * Untagged Template Literals
 * Just a string eclosed in backticks is called an untagged template literal. When you use a template literal without a tag function, it is simply treated as a string. The expressions inside the template literal are evaluated and their results are included in the final string.
 */
let a = 1;
let b = 2;
let string = `${a} + ${b} = ${a + b}`;
console.log(string);

/**
 * Tagged Template Literals
 * As soon as an expression preceedes a template literal, it becomes a tagged template literal. 
 * A tagged template literal is a more advanced form of template literals where you can define a function (called a tag) that receives both a template literal and the substitution values as arguments and then perfroms an action with both of them before returning a value.
 * The tag function receives the string parts and the values of the expressions as arguments, allowing you to manipulate the output in various ways.
 */ 
function tag(literal, ...values) {
    console.log("Literal", literal);
    console.log("Values", values);

    let result;
    switch (literal[1]) {
        case " plus ":
            result = values[0] + values[1];
            break;
        case " minus ":
            result = values[0] - values[1];
            break;
    }
    return `${values[0]}${literal[1]}${values[1]} is ${result}`;
}

let x = 1;
let y = 2;
let output = tag `What is ${x} plus ${y}?`;
console.log(output);

