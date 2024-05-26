A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.

=============================================
### Basic Promises
- Create a function delay(ms) that returns a promise which resolves after ms milliseconds.

### Why are we using resolve every time with promises 

Explanation of resolve in a Promise
When you create a promise using the Promise constructor, you pass an executor function to it. This executor function receives two arguments: resolve and reject. Here’s a breakdown of how and why resolve is used:

Indicating Completion:

Calling resolve(value) indicates that the asynchronous task has completed successfully. The value passed to resolve will be passed to the .then handlers as an argument.

==============================================
### Chaining Promises
- Create a promise that resolves to a number, then chain .then handlers to multiply this number by 2, then add 3, then subtract 5. Log the final result.

# How to do chaining of promises?
- use.then()

==============================================
### Error Handling in Promises
- Create a promise that rejects with an error message. Add .catch to handle the error and log the error message.

# How to handle error
 use catch()
 Example: Promise.reject("Something went wrong").catch(err => console.log(err)).


===============================================
### Promise.all
- Create three promises: one resolves after 1 second, one after 2 seconds, and one after 3 seconds. Use Promise.all to execute something after all promises have resolved and log the results.

# How to use Promise.all
The Promise.all() method is one of the promise concurrency methods. It can be useful for aggregating the results of multiple promises. It is typically used when there are multiple related asynchronous tasks that the overall code relies on to work successfully — all of whom we want to fulfill before the code execution continues.

s
The Promise.all() static method takes an iterable of promises as input and returns a single Promise. 

This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. 
It rejects when any of the input's promises rejects, with this first rejection reason.


=============================================
### Promise.race
- Create three promises: one resolves after 1 second, one after 2 seconds, and one after 3 seconds. Use Promise.race to execute something as soon as the first promise resolves and log the result.