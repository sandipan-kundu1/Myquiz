import React from "react";

// Import the icons
import phoneIcon from "./images/phone-icon.png";
import mailIcon from "./images/mail-icon.png";

// function Contact(props) {    //props is an object . it can be anything whatever in words, convention "props"
//     return (
//         <div className="contact-card">
//             <img src={props.img} alt={props.name} />
//             <h3>{props.name}</h3>
//             <div className="info-group">
//                 <img src={phoneIcon} alt="phone-icon" />
//                 <p>{props.phone}</p>
//             </div>
//             <div className="info-group">
//                 <img src={mailIcon} alt="mail-icon" />
//                 <p>{props.email}</p>
//             </div>
//         </div>
//     );
// }

    //Destructuring props: we use {} inside all members in function(), instead don't use props term in every line just write member name
function Contact({img,name,phone,email} ) {    //props is an object . it can be anything whatever in words, convention "props"
    return (
        <div className="contact-card">
            <img src={img} alt={name} />
            <h3>{name}</h3>
            <div className="info-group">
                <img src={phoneIcon} alt="phone-icon" />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img src={mailIcon} alt="mail-icon" />
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Contact;
