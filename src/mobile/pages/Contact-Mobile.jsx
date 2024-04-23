import React, {useState} from "react";
import "./styles/Contact-Mobile.css";
import emailjs from "@emailjs/browser";

const ContactPageMob = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("fulfill all the required fields");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_wxuklg4",
        "template_yaqexll",
        templateParams,
        "1qnyZ12VE6rP57PmE"
      )
      .then(
        (response) => {
          console.log("email enviado", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
          alert("Your message has been sent. Thank you! :)");
        },
        (err) => {
          console.log("failed: ", err);
        }
      );
  }

  return (
    <div className="ContactContainerMOB">
      <div className="ContactContainerTOMOB">
        <p>To:</p>
        <div className="ContactContainerSpanMOB">
          <p>marcelarochamartins@gmail.com</p>
          <p style={{ fontWeight: "400" }}>x</p>
        </div>
      </div>
      <form className="formMOB" onSubmit={sendEmail}>
        <div className="ContactContainerFromMOB">
          <p>From:</p>
          <input
            className="input"
            type="text"
            placeholder="insert your name here"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div className="ContactContainerEmailMOB">
          <p>Your email:</p>
          <input
            className="input"
            type="text"
            placeholder="insert your email here"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="ContactContainerBottomGroupMOB">
          <div className="ContactContainerMessageMOB">
            <textarea
              className="textarea"
              placeholder="Your message..."
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </div>
          <div className="ContactContainerBottomGroupButtonMOB">
            <input className="button" type="submit" value="Send" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactPageMob;
