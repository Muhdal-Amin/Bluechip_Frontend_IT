/**
 * Generics in TypeScript allow you to create reusable components that can work with a variety of data types while still maintaining type safety. 
 * They enable you to define functions, classes, and interfaces that can operate on different types without sacrificing the benefits of static typing. Here are some key features and examples of generics in TypeScript:
 * 1. Generic Functions:
 */

function identity<T>(arg: T): T {
    return arg;
}

console.log(identity<string>("Hello, Generics!"));
console.log(identity<number>(42));

/**
 * 2. Generic Interfaces:
 */
interface GenericIdentityFn<T> {
    (arg: T): T;
}
function identityFn<T>(arg: T): T {
    return arg;
}
let myIdentity: GenericIdentityFn<number> = identityFn;
console.log(myIdentity(100));

/**
 * 3. Generic Classes:
 */
