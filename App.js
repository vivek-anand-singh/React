import React from 'react';
import ReactDOM from 'react-dom/client';
// Creating a heading element
const heading = React.createElement(
    'h1', // element type
    { id: "heading", abc: "xyz" }, // props
    "Hello World from React" // children
);
console.log(heading); // object

// Get the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the heading element

// Creating a nested parent-child structure
const parent = React.createElement(
    'div', 
    { id: "parent" }, // parent props
    React.createElement(
        'div', 
        { id: "child1" }, // child1 props
        [
            React.createElement('h1', { id: "heading1" }, "h1 tag"), // heading inside child1
            React.createElement('h2', { id: "heading2" }, "h2 tag") // paragraph inside child1
        ]
    )
);

// Render the parent element
root.render(heading);
root.render(parent);
console.log(parent); // object
