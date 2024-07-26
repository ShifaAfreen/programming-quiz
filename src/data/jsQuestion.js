const jsQuestions = [
  {
    questionText: "What would be the result of 3+2+'7'?",
    options: ["12", "57", "error", "NaN"],
    answer: "57",
  },
  {
    questionText: "What is the output of following '2'+ 2 ?",
    options: ["22", "NaN", " 4", "error"],
    answer: "22",
  },
  {
    questionText: "What is state mutation and how to prevent it?",
    options: [
      "Changing the state directly",
      "Using setState method",
      "Using hooks",
      "Using constructor",
    ],
    answer: "Changing the state directly",
  },
  {
    questionText:
      "What is the difference between '==' and '===' in JavaScript?",
    options: [
      "'==' checks for value equality and '===' checks for both value and type equality",
      "'==' checks for type equality and '===' checks for value equality",
      "'==' and '===' are the same",
      "None of the above",
    ],
    answer:
      "'==' checks for value equality and '===' checks for both value and type equality",
  },
  {
    questionText: "What is an IIFE in JavaScript?",
    options: [
      "Instantly Invoked Function Execution",
      "Immediately Invoked Function Expression",
      "Immediately Integrated Function Evaluation",
      "None of the above",
    ],
    answer: "Immediately Invoked Function Expression",
  },
  {
    questionText: "What is the purpose of 'use strict' in JavaScript?",
    options: [
      "To enforce stricter parsing and error handling in your code",
      "To enable ECMAScript 6 features",
      "To provide additional debugging information",
      "None of the above",
    ],
    answer: "To enforce stricter parsing and error handling in your code",
  },
  {
    questionText: "What is a closure in JavaScript?",
    options: [
      "A function having access to the parent scope, even after the parent function has closed",
      "A function that is closed for modifications",
      "A function that returns another function",
      "None of the above",
    ],
    answer:
      "A function having access to the parent scope, even after the parent function has closed",
  },
  {
    questionText: "What is the purpose of the 'this' keyword in JavaScript?",
    options: [
      "Refers to the global object",
      "Refers to the previous object",
      "Refers to the object from which it was called",
      "None of the above",
    ],
    answer: "Refers to the object from which it was called",
  },
  {
    questionText:
      "What is the difference between 'let' and 'var' in JavaScript?",
    options: [
      "'let' has block scope, 'var' has function scope",
      "'let' is function-scoped, 'var' is block-scoped",
      "'let' and 'var' are the same",
      "None of the above",
    ],
    answer: "'let' has block scope, 'var' has function scope",
  },
  {
    questionText: "What is an arrow function in JavaScript?",
    options: [
      "A shorthand for writing function expressions",
      "A method for defining object properties",
      "A function with no parameters",
      "None of the above",
    ],
    answer: "A shorthand for writing function expressions",
  },
  {
    questionText: "What is the purpose of the 'bind' method in JavaScript?",
    options: [
      "To create a new function with a specified 'this' value and arguments",
      "To bind an event to a DOM element",
      "To merge two or more arrays",
      "None of the above",
    ],
    answer:
      "To create a new function with a specified 'this' value and arguments",
  },
  {
    questionText: "What is the event loop in JavaScript?",
    options: [
      "A function to create loops",
      "A mechanism that handles the execution of multiple chunks of your program over time",
      "A method to iterate through arrays",
      "None of the above",
    ],
    answer:
      "A mechanism that handles the execution of multiple chunks of your program over time",
  },
  {
    questionText: "What is the difference between 'null' and 'undefined'?",
    options: [
      "'null' is an assignment value, 'undefined' means a variable has been declared but not yet assigned a value",
      "'null' means a variable has been declared but not yet assigned a value, 'undefined' is an assignment value",
      "'null' and 'undefined' are the same",
      "None of the above",
    ],
    answer:
      "'null' is an assignment value, 'undefined' means a variable has been declared but not yet assigned a value",
  },
  {
    questionText: "What is the purpose of 'Promise' in JavaScript?",
    options: [
      "To create new objects",
      "To define strict code execution",
      "To handle asynchronous operations",
      "None of the above",
    ],
    answer: "To handle asynchronous operations",
  },
  {
    questionText: "What is the 'spread' operator in JavaScript?",
    options: [
      "An operator used to expand elements of an iterable",
      "An operator used to combine arrays",
      "An operator used to merge objects",
      "None of the above",
    ],
    answer: "An operator used to expand elements of an iterable",
  },
  {
    questionText: "What is 'hoisting' in JavaScript?",
    options: [
      "The default behavior of moving declarations to the top",
      "A way to elevate variables",
      "A method to optimize code",
      "None of the above",
    ],
    answer: "The default behavior of moving declarations to the top",
  },
  {
    questionText: "What is the purpose of 'map' method in JavaScript?",
    options: [
      "To create a new array with the results of calling a provided function on every element in the calling array",
      "To iterate through an array",
      "To filter elements of an array",
      "None of the above",
    ],
    answer:
      "To create a new array with the results of calling a provided function on every element in the calling array",
  },
  {
    questionText:
      "What is the difference between 'call' and 'apply' methods in JavaScript?",
    options: [
      "'call' and 'apply' are identical",
      "'call' takes arguments separately, 'apply' takes arguments as an array",
      "'call' takes arguments as an array, 'apply' takes arguments separately",
      "None of the above",
    ],
    answer:
      "'call' takes arguments separately, 'apply' takes arguments as an array",
  },
  {
    questionText: "What is the purpose of 'async' and 'await' in JavaScript?",
    options: [
      "To handle asynchronous operations in a more readable way",
      "To create synchronous code",
      "To optimize code execution",
      "None of the above",
    ],
    answer: "To handle asynchronous operations in a more readable way",
  },
  {
    questionText: "What is 'NaN' in JavaScript?",
    options: [
      "A null value",
      "A string value",
      "A value representing Not-A-Number",
      "None of the above",
    ],
    answer: "A value representing Not-A-Number",
  },
  {
    questionText: "What is the purpose of 'reduce' method in JavaScript?",
    options: [
      "To execute a reducer function on each element of the array, resulting in a single output value",
      "To filter elements of an array",
      "To map elements of an array",
      "None of the above",
    ],
    answer:
      "To execute a reducer function on each element of the array, resulting in a single output value",
  },
  {
    questionText: "What is 'debouncing' in JavaScript?",
    options: [
      "A technique to limit the rate at which a function is executed",
      "A method to handle asynchronous operations",
      "A way to improve performance",
      "None of the above",
    ],
    answer: "A technique to limit the rate at which a function is executed",
  },
  {
    questionText: "What is 'JSON' in JavaScript?",
    options: [
      "JavaScript Object Notation, a format for storing and transporting data",
      "JavaScript Object Number",
      "JavaScript Oriented Network",
      "None of the above",
    ],
    answer:
      "JavaScript Object Notation, a format for storing and transporting data",
  },
  {
    questionText:
      "What is the difference between 'push' and 'pop' methods in JavaScript?",
    options: [
      "'push' adds an element to the end of the array, 'pop' removes the last element",
      "'push' removes an element from the beginning of the array, 'pop' adds an element to the end",
      "'push' and 'pop' are identical",
      "None of the above",
    ],
    answer:
      "'push' adds an element to the end of the array, 'pop' removes the last element",
  },
  {
    questionText: "What is 'event delegation' in JavaScript?",
    options: [
      "A technique of using a single event listener to manage all events of a particular type",
      "A method to handle asynchronous operations",
      "A way to improve performance",
      "None of the above",
    ],
    answer:
      "A technique of using a single event listener to manage all events of a particular type",
  },
  {
    questionText: "What is the purpose of 'Object.create()' method?",
    options: [
      "To create a new object with the specified prototype object and properties",
      "To create a new array",
      "To update an existing object",
      "None of the above",
    ],
    answer:
      "To create a new object with the specified prototype object and properties",
  },
  {
    questionText: "What is the purpose of 'typeof' operator in JavaScript?",
    options: [
      "To return a string indicating the type of the unevaluated operand",
      "To convert a variable to a string",
      "To create a new variable",
      "None of the above",
    ],
    answer: "To return a string indicating the type of the unevaluated operand",
  },
  {
    questionText: "What is the 'DOM' in JavaScript?",
    options: [
      "Document Object Method, a function to handle documents",
      "Document Orientation Model, a layout system",
      "Document Object Model, a programming interface for HTML and XML documents",
      "None of the above",
    ],
    answer:
      "Document Object Model, a programming interface for HTML and XML documents",
  },
  {
    questionText:
      "What is the difference between 'slice' and 'splice' methods in JavaScript?",
    options: [
      "'slice' returns a shallow copy of a portion of an array, 'splice' changes the contents of an array by removing or replacing existing elements",
      "'slice' changes the contents of an array, 'splice' returns a shallow copy of a portion of an array",
      "'slice' and 'splice' are identical",
      "None of the above",
    ],
    answer:
      "'slice' returns a shallow copy of a portion of an array, 'splice' changes the contents of an array by removing or replacing existing elements",
  },
  {
    questionText: "What is the purpose of 'setTimeout' function in JavaScript?",
    options: [
      "To execute a function immediately",
      "To execute a function after a specified delay",
      "To cancel an ongoing operation",
      "None of the above",
    ],
    answer: "To execute a function after a specified delay",
  },
  {
    questionText: "What is 'scope' in JavaScript?",
    options: [
      "The context in which variables and functions are accessible",
      "The lifetime of a variable",
      "The type of a variable",
      "None of the above",
    ],
    answer: "The context in which variables and functions are accessible",
  },
  {
    questionText: "What is the purpose of 'filter' method in JavaScript?",
    options: [
      "To create a new array with all elements that pass the test implemented by the provided function",
      "To iterate through an array",
      "To map elements of an array",
      "None of the above",
    ],
    answer:
      "To create a new array with all elements that pass the test implemented by the provided function",
  },
  {
    questionText: "What is 'prototypal inheritance' in JavaScript?",
    options: [
      "A feature used to add methods and properties in objects",
      "A feature to create new objects",
      "A method to optimize code execution",
      "None of the above",
    ],
    answer: "A feature used to add methods and properties in objects",
  },
  {
    questionText:
      "What is the difference between 'localStorage' and 'sessionStorage'?",
    options: [
      "'localStorage' persists data for the duration of the page session, 'sessionStorage' persists data until explicitly deleted",
      "'localStorage' persists data until explicitly deleted, 'sessionStorage' persists data only for the duration of the page session",
      "'localStorage' and 'sessionStorage' are identical",
      "None of the above",
    ],
    answer:
      "'localStorage' persists data until explicitly deleted, 'sessionStorage' persists data only for the duration of the page session",
  },
  {
    questionText: "What is 'event bubbling' in JavaScript?",
    options: [
      "An event propagation method where the event starts from the parent element and trickles down to the target elements",
      "An event propagation method where the event starts from the target element and bubbles up to the parent elements",
      "A method to stop event propagation",
      "None of the above",
    ],
    answer:
      "An event propagation method where the event starts from the target element and bubbles up to the parent elements",
  },
  {
    questionText: "What is 'event capturing' in JavaScript?",
    options: [
      "An event propagation method where the event starts from the parent element and trickles down to the target elements",
      "An event propagation method where the event starts from the target element and bubbles up to the parent elements",
      "A method to stop event propagation",
      "None of the above",
    ],
    answer:
      "An event propagation method where the event starts from the parent element and trickles down to the target elements",
  },
  {
    questionText: "What is 'memoization' in JavaScript?",
    options: [
      "A way to handle asynchronous operations",
      "An optimization technique to speed up function calls by caching their results",
      "A method to create new objects",
      "None of the above",
    ],
    answer:
      "An optimization technique to speed up function calls by caching their results",
  },
  {
    questionText:
      "What is the purpose of 'Object.keys()' method in JavaScript?",
    options: [
      "To create a new object",
      "To merge two objects",
      "To return an array of a given object's own enumerable property names",
      "None of the above",
    ],
    answer:
      "To return an array of a given object's own enumerable property names",
  },
  {
    questionText:
      "What is the difference between 'function declaration' and 'function expression'?",
    options: [
      "A function declaration defines a function with the specified parameters, while a function expression creates a function inside an expression",
      "A function declaration creates a function inside an expression, while a function expression defines a function with the specified parameters",
      "There is no difference",
      "None of the above",
    ],
    answer:
      "A function declaration defines a function with the specified parameters, while a function expression creates a function inside an expression",
  },
  {
    questionText: "What is the 'prototype' property in JavaScript?",
    options: [
      "A method to create new objects",
      "A way to optimize code execution",
      "An object that is shared among all instances of a given type",
      "None of the above",
    ],
    answer: "An object that is shared among all instances of a given type",
  },
  {
    questionText: "What is the purpose of 'Object.assign()' method?",
    options: [
      "To copy the values of all enumerable own properties from one or more source objects to a target object",
      "To create a new object",
      "To update an existing object",
      "None of the above",
    ],
    answer:
      "To copy the values of all enumerable own properties from one or more source objects to a target object",
  },
  {
    questionText: "What is 'function currying' in JavaScript?",
    options: [
      "A technique of transforming a function with multiple arguments into a sequence of functions each with a single argument",
      "A method to optimize code execution",
      "A way to handle asynchronous operations",
      "None of the above",
    ],
    answer:
      "A technique of transforming a function with multiple arguments into a sequence of functions each with a single argument",
  },
  {
    questionText: "What is 'strict mode' in JavaScript?",
    options: [
      "A way to opt in to a restricted variant of JavaScript, eliminating some silent errors and improving performance",
      "A way to create secure code",
      "A method to handle asynchronous operations",
      "None of the above",
    ],
    answer:
      "A way to opt in to a restricted variant of JavaScript, eliminating some silent errors and improving performance",
  },
  {
    questionText: "What is the 'call stack' in JavaScript?",
    options: [
      "A mechanism for an interpreter to keep track of its place in a script that calls multiple functions",
      "A method to optimize code execution",
      "A way to handle asynchronous operations",
      "None of the above",
    ],
    answer:
      "A mechanism for an interpreter to keep track of its place in a script that calls multiple functions",
  },
  {
    questionText:
      "What is the purpose of 'setInterval' function in JavaScript?",
    options: [
      "To cancel an ongoing operation",
      "To execute a function immediately",
      "To repeatedly call a function or execute a code snippet, with a fixed time delay between each call",
      "None of the above",
    ],
    answer:
      "To repeatedly call a function or execute a code snippet, with a fixed time delay between each call",
  },
  {
    questionText: "What is 'function hoisting' in JavaScript?",
    options: [
      "The process where function declarations are moved to the top of their containing scope",
      "A method to create new functions",
      "A way to optimize code execution",
      "None of the above",
    ],
    answer:
      "The process where function declarations are moved to the top of their containing scope",
  },
  {
    questionText: "What is 'promise chaining' in JavaScript?",
    options: [
      "A technique where promises are linked together, with each promise returning a new promise",
      "A method to optimize code execution",
      "A way to handle synchronous operations",
      "None of the above",
    ],
    answer:
      "A technique where promises are linked together, with each promise returning a new promise",
  },
  {
    questionText:
      "What is the difference between 'apply' and 'bind' methods in JavaScript?",
    options: [
      "'apply' calls a function with a given 'this' value and arguments provided as an array, 'bind' creates a new function with a specified 'this' value",
      "'apply' creates a new function with a specified 'this' value, 'bind' calls a function with a given 'this' value and arguments provided as an array",
      "'apply' and 'bind' are identical",
      "None of the above",
    ],
    answer:
      "'apply' calls a function with a given 'this' value and arguments provided as an array, 'bind' creates a new function with a specified 'this' value",
  },
  {
    questionText: "What is the purpose of 'instanceof' operator in JavaScript?",
    options: [
      "To check if an object is an instance of a specified constructor function",
      "To create new objects",
      "To update an existing object",
      "None of the above",
    ],
    answer:
      "To check if an object is an instance of a specified constructor function",
  },
  {
    questionText: "What is the purpose of 'Object.create()' method?",
    options: [
      "To create a new object with the specified prototype object and properties",
      "To update an existing object",
      "To delete an existing object",
      "None of the above",
    ],
    answer:
      "To create a new object with the specified prototype object and properties",
  },
];

export default jsQuestions;
