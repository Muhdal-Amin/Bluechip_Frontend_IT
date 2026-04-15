/**
 * The setTimeout() method is a built-in JavaScript function that allows you to execute a piece of code or a function after a specified delay in milliseconds. It takes two parameters: the first is the function or code to be executed, and the second is the delay time in milliseconds.
 * When you call setTimeout(), it returns a unique identifier (a timeout ID) that can be used to cancel the timeout if needed using the clearTimeout() method.
 * In this example, we demonstrate how to use setTimeout() to display a message after a delay of 2000 milliseconds (2 seconds).
 */
function displayMessage() {
    console.log("This message is displayed after a delay of 2 seconds.");
}
setTimeout(displayMessage, 2000);

/**
 * You can also use an anonymous function directly within the setTimeout() call, which is a common practice for simple tasks that don't require a separate named function.
 */
setTimeout(function() {
    console.log("This message is displayed after a delay of 3 seconds.");
}, 3000);

/**
 * If you want to cancel a timeout before it executes, you can use the clearTimeout() method. This is useful if you have a situation where the timeout should not occur under certain conditions.
 */
const timeoutId = setTimeout(function() {
    console.log("This message will not be displayed because the timeout is cleared.");
}, 4000);

// Cancel the timeout before it executes
clearTimeout(timeoutId);

/**
 * The setInterval() method is similar to setTimeout(), but instead of executing the code once after a delay, it repeatedly executes the code at specified intervals until it is stopped. It also returns an interval ID that can be used to clear the interval using the clearInterval() method.
 * In this example, we demonstrate how to use setInterval() to display a message every 2 seconds, and then we stop it after 10 seconds.
 */
const intervalId = setInterval(function() {
    console.log("This message is displayed every 2 seconds.");
}, 2000);

/**
 * To stop the interval from executing, you can use the clearInterval() method and pass the interval ID as a parameter.
 */
setTimeout(function() {
    clearInterval(intervalId);
    console.log("Interval stopped after 10 seconds.");
}, 10000);

/**
 * Using setInterval() to display the time every second.
 */
setInterval(myFunction, 1000);

function myFunction() {
    const d = new Date();
    d.getHours();
    d.getMinutes();
    d.getSeconds();
    let t = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    console.log(t);
}