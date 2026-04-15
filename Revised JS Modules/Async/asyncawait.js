/**
 * Async-await is a syntactic sugar built on top of Promises, introduced in ES2017 (ES8). It allows you to write asynchronous code in a more synchronous and readable manner. The `async` keyword is used to declare an asynchronous function, and the `await` keyword is used to pause the execution of the function until a Promise is resolved.
 * When an `async` function is called, it returns a Promise. Inside the function, you can use `await` to wait for a Promise to resolve before proceeding with the next line of code. This makes it easier to handle asynchronous operations without needing to chain multiple `.then()` calls or use nested callbacks.
 * In this example, we demonstrate how to use async-await to fetch data from an API and handle the response in a more straightforward way.  
 */

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Data received:", data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Call the async function
fetchData();