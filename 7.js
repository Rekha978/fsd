File: src/App.js
import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Conditional Rendering Example</h2>
      {isLoggedIn ? <h3>Welcome, Sathwvik!</h3> : <h3>Please log in to continue.</h3>}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}


import React from 'react'; 
import './App.css'; 
// Our array of data
const fruits = [ 
{ id: 'f1', name: 'Apple', color: 'Red' }, 
{ id: 'f2', name: 'Banana', color: 'Yellow' }, 
{ id: 'f3', name: 'Kiwi', color: 'Green' }, 
{ id: 'f4', name: 'Blueberry', color: 'Blue' } 
]; 
function App() { 
<li key={fruit.id} style={{ color: fruit.color }}> 
{fruit.name} 
</li> 
)); 
return ( 
<div className="App"> 
<h1>List of Fruits</h1> 
<ul> 
{fruitListItems} 
</ul>  
<h2>Fruit Colors (Inline Map)</h2> 
<ul> 
{fruits.map(fruit => ( 
<li key={fruit.id}> 
The color of {fruit.name} is {fruit.color}. 
</li> 
))} 
</ul> 
</div> 
); 
} 
export default App; 
