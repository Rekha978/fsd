const express = require('express'); 
const app = express(); 
const port = 3000; 
// 1. Use the middleware for URL-encoded form data 
app.use(express.urlencoded({ extended: true })); 
// 2. Serve the HTML form 
app.get('/', (req, res) => { 
res.send(` 
<h1>Simple HTML Form</h1> 
<form action="/submit" method="POST"> 
<div> 
<label for="name">Name:</label> 
<input id="name" name="username"> 
</div> 
<div> 
<label for="email">Email:</label> 
<input id="email" name="user_email"> 
</div> 
<button type="submit">Submit Form</button> 
</form> 
`); 
}); 
// 3. Handle the form submission 
app.post('/submit', (req, res) => { 
// 4. The middleware puts the form data in req.body 
const name = req.body.username; 
const email = req.body.user_email; 
res.send(` 
<h1>Submission Received!</h1> 
<p>Thank you, ${name}.</p> 
<p>We received your email: ${email}</p> 
`); 
}); 
app.listen(port, () => { 
console.log(`Server running at http://localhost:${port}`); 
});



import React from 'react'; 
import './App.css'; 
function App() { 
// 1. JavaScript variable to embed 
const userName = "Student"; 
const userRole = "Developer"; 
// 2. JavaScript object for inline styles 
const headerStyle = { 
color: 'navy', 
fontSize: '32px', 
borderBottom: '2px solid navy' 
}; 
// 3. A function to call 
const getGreeting = () => { 
return `Welcome, ${userName} (${userRole})!`; 
}; 
return ( 
// 4. Using a Fragment <> ... </> as the single root element 
<> 
{/* 2. Applying inline styles */} 
<h1 style={headerStyle}>JSX Demonstration</h1> 
{/* 1. & 3. Embedding JS expressions and function calls */} 
<p>{getGreeting()}</p> 
<p>Your lucky number is: {Math.floor(Math.random() * 100)}</p> 
{/* 5. Using className and htmlFor */} 
<div className="form-group"> 
<label htmlFor="name-input">Name:</label> 
<input id="name-input" type="text" placeholder="This uses 'className'" /> </div> 
</> 
);
} 
export default App; 


