src/App.js (Parent) 
JavaScript 
import React, { useState } from 'react'; 
import CounterDisplay from './CounterDisplay'; 
import './App.css'; 
function App() { 
// 'count' is STATE managed by App 
const [count, setCount] = useState(0); 
const incrementCount = () => { 
setCount(count + 1); // Changing the state 
};
return ( 
<div className="App"> 
<h1>Parent Component (Manages State)</h1> 
<p>The current count is: {count}</p> 
<button onClick={incrementCount}>Increment Count</button> <hr /> 
{/* 'countValue' is a PROP being passed to the child */} <CounterDisplay countValue={count} /> 
</div> 
); 
} 
export default App; 
src/CounterDisplay.js (Child) 
JavaScript 
import React from 'react'; 
// 'props' object contains all props passed from the parent function CounterDisplay(props) { 
// This component receives 'countValue' as a prop 
// It is read-only. 
// This would cause an error: 
// props.countValue = 10; // !! ERROR: props are read-only !! 
return ( 
<div> 
<h2>Child Component (Receives Props)</h2> 
<p>The parent's count is: <strong>{props.countValue}</strong></p> </div> 
); 
} 
export default CounterDisplay; 









src/App.css (Standard CSS File) 
CSS 
/* This is a standard CSS file */ 
.box { 
border: 1px solid blue; 
padding: 10px; 
margin: 10px; 
} 
.box-title { 
color: blue; 
font-weight: bold; 
} 
src/styles.scss (Sass File) 
SCSS 
/* This is a Sass file */ 
$primary-color: #c0392b; // Sass variable 
.sass-box { 
border: 1px solid $primary-color; 
padding: 10px; 
margin: 10px; 
/* Sass nesting */ 
.sass-box-title { 
color: $primary-color; 
font-weight: bold; 
} 
} 
src/App.js (Component) 
JavaScript 
import React from 'react'; 
// 1. Importing the CSS stylesheet 
import './App.css';
// 2. Importing the SASS stylesheet 
import './styles.scss'; 
function App() { 
// 3. Defining an object for Inline Styles 
const inlineStyleObject = { 
border: '1px solid green', 
padding: '10px', 
margin: '10px', 
}; 
const inlineTitleStyle = { 
color: 'green', 
fontWeight: 'bold', 
}; 
return ( 
<div> 
<h1>Styling in React</h1> 
{/* 1. Using CSS Stylesheet */} 
<div className="box"> 
<p className="box-title">Styled with App.css</p> 
</div> 
{/* 2. Using Sass/SCSS Stylesheet */} 
<div className="sass-box"> 
<p className="sass-box-title">Styled with styles.scss</p> </div> 
{/* 3. Using Inline Styles */} 
<div style={inlineStyleObject}> 
<p style={inlineTitleStyle}>Styled with Inline Style Object</p> </div> 
</div> 
); 
} 
export default App; 



