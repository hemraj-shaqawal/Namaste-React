/**
 * Dev Build
Local Server
HMR = Hot Module Replacement
File Watching Algorithm - written in C++
Caching - Faster Builds
Image Optimization
Minification
Bundling
Compress
Consistent Hashing
Code Splitting
Differential Bundling - support older browsers
Diagnostic
Error Handling
HTTPs
Tree Shaking - remove unused code
Different dev and prod bundles    
 * 
 */

import React from "react";
import ReactDOM from "react-dom/client";

// const head = React.createElement('h1', { id: 'temp' }, 'Hello world....');
// const parent = React.createElement('div',
// {},
// [React.createElement('div', {}, [React.createElement('h1', {}, 'I am h1'), React.createElement('h2', {}, 'I am h2')]), React.createElement('div', {}, [React.createElement('h1', {}, 'I am h1'), React.createElement('h2', {}, 'I am h2')])]);

//JSX (JavaScript XML) ==>
// this is called as JSX expreation
const heading = (
  <h1 id="title" key="title" className="head">
    Hello world =====================dff!
  </h1>
);

const Title1 = () => <h1>Title1111111111111111111111</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));

//React Component
// 1. Functional Component  - New style of writing code;
// 2. Name of Component start with capital letter;
// 3. Functional Componet is normal function and it returning a JSX code or component
const HeadCom = () => (
  <div>
    {heading} 
    {/* Component Composition ==> use component inside component */}
    <Title1 />
    {Title1()}
    {console.log('Any JS Code!')}
    <h1>Namaste React Code</h1> <h2>Namaste React Code h2</h2>
  </div>
);

const HeadCom1 = () => {
    return (
  <div>
    <h1>Namaste React Code</h1> <h2>Namaste React Code h2</h2>
  </div>
)
    };

// root.render(heading);
root.render(<HeadCom/>);
