/**
 * Promises are a way to handle asynchronous operations in JavaScript. They represent a value that may not be available yet, but will be resolved at some point in the future. A promise can be in one of three states: pending, fulfilled, or rejected.
 * A promise is created using the Promise constructor, which takes a function as an argument. This function is called the executor function, and it receives two parameters: resolve and reject. The resolve function is used to fulfill the promise with a value, while the reject function is used to reject the promise with a reason (usually an error).
 * Once a promise is fulfilled or rejected, it cannot change its state. You can attach handlers to a promise using the then() method for fulfilled promises and the catch() method for rejected promises.
 * In this example, we create a promise object
 */
// Example 1: Simple age verification promise
let myPromise = new Promise(function(resolve, reject) {

  // "Producing Code" (May take some time)
  const userAge = 25;
  
  if (userAge >= 18) {
    resolve("User is an adult - access granted!"); // when successful
  } else {
    reject("User is underage - access denied!"); // when error
  }
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(value) { console.log("Success: " + value); },
  function(error) { console.error("Error: " + error); }
);

/**
 * In this example, we demonstrate how to create a promise that simulates an asynchronous operation (like fetching data) and how to handle its resolution and rejection.
 */

// Example 2: Fetch actual data from an API
function fetchData() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                resolve(data); // Resolving with actual API data
            })
            .catch(error => {
                reject("Failed to fetch data: " + error.message); // Rejecting with error details
            });
    }); 
}

// Consuming the fetchData promise
fetchData()
    .then(data => console.log("Success! Data received:", data))
    .catch(error => console.error("Error:", error));