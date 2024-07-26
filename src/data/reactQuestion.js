const reactQuestions = [
  {
    questionText: "What is JSX?",
    options: [
      "A syntax extension for JavaScript",
      "A CSS framework",
      "A database",
      "None of the above",
    ],
    answer: "A syntax extension for JavaScript",
  },
  {
    questionText:
      "Which method in a React class component is called after the component is rendered for the first time?",
    options: [
      "componentDidMount",
      "componentDidUpdate",
      "componentWillUnmount",
      "constructor",
    ],
    answer: "componentDidMount",
  },
  {
    questionText:
      "Which module in Node.js provides utilities for working with file and directory paths?",
    options: ["fs", "path", "url", "querystring"],
    answer: "path",
  },
  {
    questionText: "Which method is used to create a new state object in React?",
    options: ["setState", "useState", "createState", "newState"],
    answer: "useState",
  },
  {
    questionText: "Is it mandatory to define constructor for React component?",
    options: ["Yes", "No"],
    answer: "No",
  },
  {
    questionText: "Why should not call setState in componentWillUnmount?",
    options: [
      "It leads to memory leaks",
      "It triggers a re-render",
      "It throws an error",
      "It's not allowed",
    ],
    answer: "It leads to memory leaks",
  },
  {
    questionText: "What is the purpose of getDerivedStateFromError?",
    options: [
      "To handle errors in render method",
      "To handle errors in lifecycle methods",
      "To handle errors thrown by descendants",
      "To handle errors in the constructor",
    ],
    answer: "To handle errors thrown by descendants",
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
      "Which lifecycle method is called after a component is rendered for the first time?",
    options: [
      "componentDidMount",
      "componentWillMount",
      "componentDidUpdate",
      "componentWillUpdate",
    ],
    answer: "componentDidMount",
  },
  {
    questionText: "How do you get redux scaffolding using create-react-app?",
    options: [
      "Using redux toolkit",
      "Using react-redux",
      "Using create-react-app template",
      "Using custom scripts",
    ],
    answer: "Using create-react-app template",
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
    questionText: "What is the purpose of the useState hook?",
    options: [
      "To handle side effects",
      "To manage state in a functional component",
      "To access the DOM",
      "To create a new component",
    ],
    answer: "To manage state in a functional component",
  },
  {
    questionText: "What does JSX stand for?",
    options: [
      "Java Syntax Extension",
      "JavaScript eXtension",
      "JavaScript Extra",
      "JavaScript XML",
    ],
    answer: "JavaScript XML",
  },
  {
    questionText: "How can you pass data from parent to child component?",
    options: ["Using state", "Using props", "Using context", "Using ref"],
    answer: "Using props",
  },
  {
    questionText:
      "What lifecycle method is invoked immediately after updating occurs?",
    options: [
      "componentDidUpdate",
      "componentDidMount",
      "componentWillUpdate",
      "componentWillMount",
    ],
    answer: "componentDidUpdate",
  },
  {
    questionText: "What is the purpose of the useEffect hook?",
    options: [
      "To create context",
      "To use refs",
      "To manage state",
      "To perform side effects",
    ],
    answer: "To perform side effects",
  },
  {
    questionText: "What is the virtual DOM?",
    options: [
      "A direct representation of the real DOM",
      "A lightweight copy of the real DOM",
      "A way to bypass the real DOM",
      "An alternative to the real DOM",
    ],
    answer: "A lightweight copy of the real DOM",
  },
  {
    questionText:
      "What is the difference between a controlled and uncontrolled component?",
    options: [
      "Controlled components manage their own state",
      "Controlled components have state managed by React",
      "Uncontrolled components are only for forms",
      "Uncontrolled components cannot be used with hooks",
    ],
    answer: "Controlled components have state managed by React",
  },
  {
    questionText: "How can you handle forms in React?",
    options: [
      "Using refs",
      "Using state and onChange handlers",
      "Using context",
      "Using hooks",
    ],
    answer: "Using state and onChange handlers",
  },
  {
    questionText: "What is the purpose of the useContext hook?",
    options: [
      "To manage state",
      "To perform side effects",
      "To use the context API",
      "To create a new component",
    ],
    answer: "To use the context API",
  },
  {
    questionText: "What are fragments in React?",
    options: [
      "A way to return multiple elements",
      "A type of component",
      "A way to handle events",
      "A type of state",
    ],
    answer: "A way to return multiple elements",
  },
  {
    questionText: "What does the key prop do in React?",
    options: [
      "Sets the initial state",
      "Handles form inputs",
      "Links components to their styles",
      "Provides a unique identifier for each element",
    ],
    answer: "Provides a unique identifier for each element",
  },
  {
    questionText: "How do you create a functional component in React?",
    options: [
      "Using a class",
      "Using a function",
      "Using the useComponent hook",
      "Using the createComponent method",
    ],
    answer: "Using a function",
  },
  {
    questionText: "What is a higher-order component (HOC)?",
    options: [
      "A function that returns a component",
      "A component that handles state",
      "A component that performs side effects",
      "A component that handles forms",
    ],
    answer: "A function that returns a component",
  },
  {
    questionText: "What is the purpose of the useRef hook?",
    options: [
      "To manage state",
      "To create a mutable object",
      "To perform side effects",
      "To create context",
    ],
    answer: "To create a mutable object",
  },
  {
    questionText: "How do you handle errors in React components?",
    options: [
      "Using try-catch",
      "Using Error Boundaries",
      "Using componentDidCatch",
      "Using useEffect",
    ],
    answer: "Using Error Boundaries",
  },
  {
    questionText:
      "What is the difference between useEffect and useLayoutEffect?",
    options: [
      "useEffect runs after paint",
      "useLayoutEffect runs before paint",
      "useLayoutEffect runs after paint",
      "useEffect runs before paint",
    ],
    answer: "useLayoutEffect runs before paint",
  },
  {
    questionText: "What is React Router used for?",
    options: [
      "State management",
      "Routing between different pages",
      "Handling form inputs",
      "Managing side effects",
    ],
    answer: "Routing between different pages",
  },
  {
    questionText: "How can you conditionally render components in React?",
    options: [
      "Using if statements",
      "Using ternary operators",
      "Using logical &&",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    questionText: "What is the use of the Context API in React?",
    options: [
      "To manage state globally",
      "To handle side effects",
      "To create components",
      "To access the DOM",
    ],
    answer: "To manage state globally",
  },
  {
    questionText: "What are React Hooks?",
    options: [
      "Functions that let you use state and other React features in functional components",
      "Special components",
      "Methods to manage component lifecycle",
      "Ways to handle events",
    ],
    answer:
      "Functions that let you use state and other React features in functional components",
  },
  {
    questionText: "How do you fetch data in a React component?",
    options: [
      "Using props",
      "Using refs",
      "Using the useState hook",
      "Using the fetch API in useEffect",
    ],
    answer: "Using the fetch API in useEffect",
  },
  {
    questionText: "What is the purpose of the useReducer hook?",
    options: [
      "To perform side effects",
      "To manage complex state logic",
      "To create refs",
      "To access the DOM",
    ],
    answer: "To manage complex state logic",
  },
  {
    questionText: "How do you optimize performance in a React application?",
    options: [
      "Using shouldComponentUpdate",
      "Using React.memo",
      "Using useMemo and useCallback",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    questionText: "What is the purpose of the StrictMode component?",
    options: [
      "To highlight potential problems",
      "To enforce strict typing",
      "To manage state",
      "To create context",
    ],
    answer: "To highlight potential problems",
  },
  {
    questionText: "What are synthetic events in React?",
    options: [
      "Cross-browser wrapper around native events",
      "Events that occur artificially",
      "Methods to handle events",
      "Ways to manage state",
    ],
    answer: "Cross-browser wrapper around native events",
  },
  {
    questionText: "How can you pass a method to a child component?",
    options: ["Using state", "Using props", "Using context", "Using hooks"],
    answer: "Using props",
  },
  {
    questionText: "What is the purpose of the useCallback hook?",
    options: [
      "To optimize performance by memoizing callbacks",
      "To handle side effects",
      "To manage state",
      "To create refs",
    ],
    answer: "To optimize performance by memoizing callbacks",
  },
  {
    questionText: "What is a pure component in React?",
    options: [
      "A component that does not depend on state",
      "A component that renders the same output given the same props",
      "A functional component",
      "A class component",
    ],
    answer: "A component that renders the same output given the same props",
  },
  {
    questionText: "How do you create context in React?",
    options: [
      "Using createContext",
      "Using useContext",
      "Using useState",
      "Using useReducer",
    ],
    answer: "Using createContext",
  },
  {
    questionText: "What is the purpose of the useMemo hook?",
    options: [
      "To memoize expensive calculations",
      "To handle side effects",
      "To manage state",
      "To create refs",
    ],
    answer: "To memoize expensive calculations",
  },
  {
    questionText:
      "How do you update state based on the previous state in React?",
    options: [
      "Using setState with a function",
      "Using setState with an object",
      "Using context",
      "Using props",
    ],
    answer: "Using setState with a function",
  },
  {
    questionText: "What is the purpose of the PropTypes library?",
    options: [
      "To type check props",
      "To manage state",
      "To handle events",
      "To create context",
    ],
    answer: "To type check props",
  },
  {
    questionText: "How do you handle asynchronous operations in useEffect?",
    options: [
      "Using async/await",
      "Using promises",
      "Using .then()",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    questionText: "What is the purpose of the forwardRef function?",
    options: [
      "To pass refs to child components",
      "To create context",
      "To handle side effects",
      "To manage state",
    ],
    answer: "To pass refs to child components",
  },
  {
    questionText: "How do you handle events in React?",
    options: [
      "Using onEvent handlers",
      "Using event listeners",
      "Using props",
      "Using state",
    ],
    answer: "Using onEvent handlers",
  },
  {
    questionText: "What is the purpose of the useImperativeHandle hook?",
    options: [
      "To customize the instance value",
      "To manage state",
      "To create context",
      "To handle events",
    ],
    answer: "To customize the instance value",
  },
  {
    questionText:
      "What is the difference between React.Component and React.PureComponent?",
    options: [
      "PureComponent implements shouldComponentUpdate",
      "Component implements shouldComponentUpdate",
      "Component is a function",
      "PureComponent cannot have state",
    ],
    answer: "PureComponent implements shouldComponentUpdate",
  },
  {
    questionText: "What is the purpose of the React.StrictMode component?",
    options: [
      "To highlight potential problems in an application",
      "To manage state",
      "To handle events",
      "To create context",
    ],
    answer: "To highlight potential problems in an application",
  },
  {
    questionText: "How do you create a ref in a functional component?",
    options: [
      "Using useRef",
      "Using createRef",
      "Using setState",
      "Using context",
    ],
    answer: "Using useRef",
  },
];

export default reactQuestions;
