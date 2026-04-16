/**
 * Tuples in TypeScript are a special type of array that can hold a fixed number of elements with different types. They are defined using square brackets and can be used to represent a collection of related values. 
 * Here's an example of how to use tuples in TypeScript:    
 */

let persona: [string, number] = ["John", 30];

function displayPersonInfo(person: [string, number]): [string, number] {
    console.log(`Name: ${person[0]}, Age: ${person[1]}`);
    return person;
}
displayPersonInfo(persona);

/**
 * Named Tuples:
 * TypeScript also supports named tuples, which allow you to give names to the elements of a tuple for better readability. 
 * Here's an example of how to use named tuples:
 */
type student = [name: string, age: number, matric: number];
let info: student = ["Esther", 15, 2107654];
console.log(`Name: ${info[0]}, Age: ${info[1]}, Matric: ${info[2]}`);