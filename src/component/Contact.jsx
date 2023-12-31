import React from "react";
import "./Contact.css";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import Button from "./Button";

function Contact() {
  return (
    <div className="contact-conatiner " id="contact-section">
      <h5>CONTACT</h5>
      <div className="contact-content">
        <div className="contact-details">
          <h5>Drop Me a Message</h5>
          <ul>
            <div>
              <li>
                <AddIcCallIcon />
              </li>
              <span>8618907297</span>
            </div>
            <div>
              <li>
                <EmailIcon />
              </li>
              <span>csrakesh32@gmail.com</span>
            </div>
            <div>
              <li>
                <PlaceIcon />
              </li>
              <span>
                No 1495, sir m v layout ullal upanagar, bangalore - 560110
              </span>
            </div>
          </ul>
        </div>
        <div className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea
            type="text"
            placeholder="Message"
            style={{ height: "150px" }}
            className="message-input"
          />
          <Button className="submit">Submit</Button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
