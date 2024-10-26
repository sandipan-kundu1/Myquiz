function loveReact(){ 
    return (
        <div>
        <ol>
        <li>I love React</li>
        <li>I don't know reason</li>
        </ol>
        </div>
    )
}
ReactDOM.render(loveReact(),document.getElementById("root"))
// ReactDOM.render(<Lovereact/>,document.getElementById("root"))
    //used Pascalcase(where first letter capital,no gap) 
    //instead of camelCase when used html like braces,
    //otherwise do normal camelCase and () in render)