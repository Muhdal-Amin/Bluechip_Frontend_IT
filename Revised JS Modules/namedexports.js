/**
 * Named Exports Example
 * This module demonstrates how to use named exports in JavaScript.
 * For named exports, defining new function names on import is optional and done with the 'as' statement.
 * Each export is explicitly named, allowing for selective imports in other modules.
 * In this example, we export two constants (PI and E) and two functions (calculateArea and calculateCircumference).
 * 
 * To import these named exports in another module, you can use the following syntax:
 * import PI, calculateArea from './namedexports.js';
 * This will import only the PI constant and the calculateArea function, allowing you to use them in your code.
 * You can also import all named exports using:
 * import * as mathUtils from './namedexports.js';
 * This will create an object (mathUtils) that contains all the exported members, which can be accessed as mathUtils.PI, mathUtils.calculateArea, etc. 
 */

export const PI = 3.14159;
export const E = 2.71828;

export function calculateArea(radius) {
    return PI * radius * radius;
}

export function calculateCircumference(radius) {
    return 2 * PI * radius;
}