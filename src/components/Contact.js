import React from "react";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-left">
        <h1>CONTACT US</h1>
        <div>
          <span>
            <LocalPhoneIcon className="logo" />
          </span>
          +91-8025043077
        </div>
        <div>
          <span>
            <MailOutlineIcon className="logo" />
          </span>
          info@intrigd.co
        </div>
      </div>
      <div className="contact-right">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <textarea type="text" placeholder="Message" rows="6" />
        <button>SUBMIT</button>
      </div>
    </div>
  );
};

export default Contact;
