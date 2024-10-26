/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
*/
// import React from "react"
// import ReactDOM from "react-dom"

ReactDOM.render(<h1>Yowai Mo</h1>,document.getElementById("root"))
const h11=document.createElement("h1")   //h11 is a variable, it can be of any name irrespective of inner HTML tag
h11.textContent="Sasiguri"
h11.className="header"
document.getElementById("root").append(h11)

// const page=(<div>
//     <h1>I'm best</h1>
//     <p>I'll beat everyone.</p>
// </div>) //use (),div when more than one html tag is used, for one direct write that tag only
// ReactDOM.render(page,document.getElementById("root"))

/* 
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

const navbar = (
    <nav>
        <h1>Bob's Bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(navbar, document.getElementById("root"))

const page=(
    <div>
        <h1>I love React</h1>
        <h2>Why u know:</h2>
        <ul>React is declarative</ul>
    </div>
)
document.getElementById("root").append(JSON.stringify(page))

ReactDOM.render(page,document.getElementById("root"))
