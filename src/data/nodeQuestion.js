const nodeQuestions = [
  {
    questionText:
      "Which module in Node.js provides utilities for working with file and directory paths?",
    options: ["fs", "path", "url", "querystring"],
    answer: "path",
  },
  {
    questionText: "What does the 'fs' module stand for in Node.js?",
    options: [
      "File System",
      "Fast Server",
      "File Service",
      "None of the above",
    ],
    answer: "File System",
  },
  {
    questionText: "What is Node.js?",
    options: [
      "A JavaScript runtime environment",
      "A programming language",
      "A framework",
      "A database",
    ],
    answer: "A JavaScript runtime environment",
  },
  {
    questionText: "What is the event loop in Node.js?",
    options: [
      "A synchronous mechanism",
      "A way to handle asynchronous operations",
      "A thread pool",
      "A garbage collector",
    ],
    answer: "A way to handle asynchronous operations",
  },
  {
    questionText:
      "What is the difference between synchronous and asynchronous programming?",
    options: [
      "Synchronous code blocks execution, asynchronous doesn't",
      "Synchronous is faster, asynchronous is slower",
      "Synchronous is always better, asynchronous is never better",
      "Synchronous uses callbacks, asynchronous doesn't",
    ],
    answer: "Synchronous code blocks execution, asynchronous doesn't",
  },
  {
    questionText: "Explain the concept of modules in Node.js.",
    options: [
      "Reusable code units",
      "Data structures",
      "Functions only",
      "Classes only",
    ],
    answer: "Reusable code units",
  },
  {
    questionText: "How do you require a module in Node.js?",
    options: ["import", "include", "require", "load"],
    answer: "require",
  },
  {
    questionText: "What is the global object in Node.js?",
    options: ["window", "document", "global", "process"],
    answer: "global",
  },
  {
    questionText: "What is the process object in Node.js?",
    options: [
      "Represents the current process",
      "Handles file system operations",
      "Manages network connections",
      "Provides utility functions",
    ],
    answer: "Represents the current process",
  },
  {
    questionText:
      "Explain the difference between Node.js single-threaded and multi-threaded architecture.",
    options: [
      "Node.js is single-threaded but uses event loop for concurrency",
      "Node.js is multi-threaded",
      "Node.js uses multiple processes",
      "Node.js uses web workers",
    ],
    answer: "Node.js is single-threaded but uses event loop for concurrency",
  },
  {
    questionText: "What is the role of the event emitter in Node.js?",
    options: [
      "Emitting events",
      "Listening to events",
      "Both emitting and listening to events",
      "Handling errors",
    ],
    answer: "Both emitting and listening to events",
  },
  {
    questionText:
      "What is the difference between Buffer and string in Node.js?",
    options: [
      "Buffer is for binary data, string is for text",
      "Buffer is faster, string is slower",
      "Buffer is immutable, string is mutable",
      "There is no difference",
    ],
    answer: "Buffer is for binary data, string is for text",
  },

  {
    questionText:
      "Which module is used for handling file system operations in Node.js?",
    options: [ "path", "fs","os", "util"],
    answer: "fs",
  },
  {
    questionText:
      "Which module is used for working with file and directory paths?",
    options: ["fs", "path", "url", "querystring"],
    answer: "path",
  },
  {
    questionText: "Which module is used for creating HTTP servers?",
    options: ["http", "https", "net", "dgram"],
    answer: "http",
  },
  {
    questionText: "Which module is used for creating HTTPS servers?",
    options: ["http", "https", "net", "dgram"],
    answer: "https",
  },
  {
    questionText: "Which module is used for creating network connections?",
    options: ["http", "https", "net", "dgram"],
    answer: "net",
  },
  {
    questionText: "Which module is used for creating UDP sockets?",
    options: ["http", "https", "net", "dgram"],
    answer: "dgram",
  },
  {
    questionText: "Which module is used for handling URL parsing?",
    options: ["url", "querystring", "path", "fs"],
    answer: "url",
  },
  {
    questionText: "Which module is used for parsing query strings?",
    options: ["url", "querystring", "path", "fs"],
    answer: "querystring",
  },
  {
    questionText: "Which module provides utility functions for Node.js?",
    options: ["util", "os", "path", "fs"],
    answer: "util",
  },
  {
    questionText:
      "Which module provides information about the operating system?",
    options: ["util", "os", "path", "fs"],
    answer: "os",
  },

  {
    questionText: "What is a callback function in Node.js?",
    options: [
      "A function passed as an argument to another function",
      "A function that returns a value",
      "A function that doesn't return a value",
      "A function that handles errors",
    ],
    answer: "A function passed as an argument to another function",
  },
  {
    questionText: "Explain the concept of promises in Node.js.",
    options: [
      "Objects representing the eventual completion or failure of an asynchronous operation",
      "Functions that return values",
      "Functions that handle errors",
      "A way to handle synchronous operations",
    ],
    answer:
      "Objects representing the eventual completion or failure of an asynchronous operation",
  },
  {
    questionText: "What is async/await in Node.js?",
    options: [
      "Syntax for writing asynchronous code as if it were synchronous",
      "A way to handle errors",
      "A performance optimization",
      "A new way to create promises",
    ],
    answer: "Syntax for writing asynchronous code as if it were synchronous",
  },
  {
    questionText:
      "What is the difference between callbacks, promises, and async/await?",
    options: [
      "There is no difference",
      "Different ways to handle asynchronous operations",
      "Callbacks are faster, promises are slower, async/await is the fastest",
      "Callbacks are simpler, promises are more complex, async/await is the most complex",
    ],
    answer: "Different ways to handle asynchronous operations",
  },
  {
    questionText: "What is the purpose of the child_process module?",
    options: [
      "Creating child processes",
      "Handling file system operations",
      "Networking",
      "Error handling",
    ],
    answer: "Creating child processes",
  },
  {
    questionText:
      "How do you use the stream module for efficient data handling?",
    options: [
      "Reading and writing data in chunks",
      "Creating buffers",
      "Encoding and decoding data",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    questionText:
      "What is the difference between readline and console modules?",
    options: [
      "Readline is for user input, console is for output",
      "Readline is for file reading, console is for output",
      "Both are for output",
      "Both are for input",
    ],
    answer: "Readline is for user input, console is for output",
  },
  {
    questionText: "What is the cluster module used for?",
    options: [
      "Creating child processes for load balancing",
      "Handling network connections",
      "File system operations",
      "Error handling",
    ],
    answer: "Creating child processes for load balancing",
  },
  {
    questionText: "How do you use the debugger module?",
    options: [
      "Profiling Node.js applications",
      "Testing Node.js applications",
      "Performance optimization",
      "Debugging Node.js applications",
    ],
    answer: "Debugging Node.js applications",
  },
  {
    questionText: "What are the different types of errors in Node.js?",
    options: [
      "Syntax errors, runtime errors, logical errors",
      "System errors, network errors, user errors",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    questionText: "How do you handle errors in Node.js using try-catch blocks?",
    options: [
      "Enclosing code that might throw errors",
      "Catching and handling errors",
      "Both of the above",
    ],
    answer: "Both of the above",
  },
  {
    questionText: "What is the purpose of the domain module?",
    options: [
      "Error handling",
      "Performance optimization",
      "Networking",
      "File system operations",
    ],
    answer: "Error handling",
  },
  {
    questionText:
      "Explain the concept of promises and error handling with them.",
    options: [
      "Promises can handle errors using catch",
      "Promises can handle errors using reject",
      "Both of the above",
    ],
    answer: "Both of the above",
  },
  {
    questionText: "How do you use the assert module for testing?",
    options: [
      "Making assertions about code behavior",
      "Testing asynchronous code",
      "Creating test cases",
      "All of the above",
    ],
    answer: "Making assertions about code behavior",
  },
  {
    questionText: "Explain the concept of closures in Node.js.",
    options: [
      "Functions that have access to variables from their outer scope",
      "A way to handle asynchronous operations",
      "A performance optimization technique",
      "A data structure",
    ],
    answer: "Functions that have access to variables from their outer scope",
  },
  {
    questionText:
      "What is the difference between synchronous and asynchronous APIs in Node.js?",
    options: [
      "Synchronous APIs block execution, asynchronous APIs don't",
      "Synchronous APIs are faster, asynchronous APIs are slower",
      "Synchronous APIs are more reliable, asynchronous APIs are less reliable",
      "There is no difference",
    ],
    answer: "Synchronous APIs block execution, asynchronous APIs don't",
  },
  {
    questionText:
      "How do you profile Node.js applications for performance optimization?",
    options: [
      "Using built-in profiling tools",
      "Using third-party profiling tools",
      "Both of the above",
    ],
    answer: "Both of the above",
  },
  {
    questionText: "What are some common Node.js anti-patterns to avoid?",
    options: ["Callback hell, pyramid of doom, blocking operations"],
    answer: "Callback hell, pyramid of doom, blocking operations",
  },
  {
    questionText:
      "Explain the concept of middleware in Node.js frameworks like Express.",
    options: [
      "Functions that handle requests and responses",
      "A way to structure application logic",
      "Both of the above",
    ],
    answer: "Both of the above",
  },
  {
    questionText: "What are some popular testing frameworks for Node.js?",
    options: ["Mocha, Jest, Jasmine"],
    answer: "Mocha, Jest, Jasmine",
  },
  {
    questionText: "What is code coverage and why is it important?",
    options: [
      "Measures the amount of code executed by tests",
      "Helps identify untested code",
    ],
    answer: "Measures the amount of code executed by tests",
  },
  {
    questionText:
      "What are the different ways to deploy a Node.js application?",
    options: ["Cloud platforms, VPS, containerization"],
    answer: "Cloud platforms, VPS, containerization",
  },
  {
    questionText:
      "What are the benefits of using a process manager like PM2 for Node.js applications?",
    options: ["Load balancing, clustering, monitoring"],
    answer: "Load balancing, clustering, monitoring",
  },
  {
    questionText:
      "How do you handle deployment and updates in a production environment?",
    options: ["Continuous integration and continuous deployment (CI/CD)"],
    answer: "Continuous integration and continuous deployment (CI/CD)",
  },
  {
    questionText: "What is the difference between Node.js and JavaScript?",
    options: [
      "Node.js is a runtime environment for JavaScript, JavaScript is a programming language",
      "Node.js is a framework, JavaScript is a language",
      "There is no difference",
    ],
    answer:
      "Node.js is a runtime environment for JavaScript, JavaScript is a programming language",
  },

  {
    questionText:
      "Explain the concept of a Node.js package manager and its importance.",
    options: [
      "Manages dependencies for Node.js projects",
      "Installs and updates packages",
      "Both of the above",
    ],
    answer: "Both of the above",
  },

  {
    questionText:
      "What are some common security vulnerabilities in Node.js applications and how to prevent them?",
    options: [
      "SQL injection, cross-site scripting (XSS), insecure direct object references",
    ],
    answer:
      "SQL injection, cross-site scripting (XSS), insecure direct object references",
  },

  {
    questionText: "How do you handle large-scale applications with Node.js?",
    options: ["Load balancing, clustering, microservices"],
    answer: "Load balancing, clustering, microservices",
  },
];

export default nodeQuestions;
