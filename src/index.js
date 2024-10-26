import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from "./App"
// import './index.css';
// import App from './project/build react info site/App';
// import Time from './basiclearning/printcurrentdatetime'
//import App from "./basiclearning/props/App2"
//import App from "./project/airbnb/App"
import App from "./project/quiz-app/src/App"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
