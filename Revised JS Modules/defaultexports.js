/**
 * Default exports Example
 * This module demonstrates how to use default exports in JavaScript.
 * Default exports require you to define new function names on import.
 * For default exports, you can only export one value per module.
 * In this example, we export a single function (calculateArea) as the default export.
 * 
 * To import the default export in another module, you can use the following syntax:
 * import {calculateArea} from './defaultexports.js';
 * This will import the default export (the calculateArea function) and allow you to use it in your code.
 */
export default function calculateArea(radius) {
    return Math.PI * radius * radius;
}
