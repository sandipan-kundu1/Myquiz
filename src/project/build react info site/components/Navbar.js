import React from "react";
import "../style.css";
import reactIcon from "../images/react-icon-small.png"; // Import the image

export default function Navbar() {
    return (
        <nav>
            <img src={reactIcon} className="nav--icon" alt="React Icon" width="30px" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    );
}
