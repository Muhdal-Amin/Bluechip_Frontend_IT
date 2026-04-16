/**
 * Arrays in TypeScript are used to store multiple values in a single variable. They can be defined using two syntaxes: the array literal syntax and the generic array type syntax.
 * 
 * 1. Array Literal Syntax:
 */

let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["Apple", "Banana", "Cherry"];
numbers.push(6); // Adding a number to the array
fruits.push("Orange"); // Adding a string to the array
console.log(numbers);
console.log(fruits);

/**
 * 2. Generic Array Type Syntax:
 */
let moreNumbers: Array<number> = [6, 7, 8, 9, 10];
let moreFruits: Array<string> = ["Orange", "Grapes", "Pineapple"];
moreNumbers.pop(); // Removing a number from the array
moreFruits.pop(); // Removing a string from the array
console.log(moreNumbers);
console.log(moreFruits);  