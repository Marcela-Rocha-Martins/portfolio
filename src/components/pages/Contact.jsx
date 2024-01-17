/* eslint-disable no-unused-expressions */
import { React, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

function Contact({ zIndex, page }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("fulfill all the required fields");
      return;
    }
    // alert("TESTE")

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
          alert("Your message has been sent. Thank you! :)")
        },
        (err) => {
          console.log("failed: ", err);
        }
      );
  }

  return (
    <div className="ContactContainer">
      <div className="ContactContainerTO">
        <p style={{ fontWeight: "800" }}>To:</p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            background: "#efebdd",
            paddingLeft: "8px",
            paddingRight: "8px",
            borderRadius: "6px",
            borderBottom: "1px solid #858282",
          }}
        >
          <p style={{ fontWeight: "600" }}>marcelarochamartins@gmail.com</p>
          <p style={{ fontWeight: "400" }}>x</p>
        </div>
      </div>
      <form className="form" onSubmit={sendEmail}>
        <div className="ContactContainerFrom">
          <p style={{ fontWeight: "800" }}>From:</p>
          <input
            className="input"
            type="text"
            placeholder="insert your name here"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div className="ContactContainerEmail">
          <p style={{ fontWeight: "800" }}>Your email:</p>
          <input
            className="input"
            type="text"
            placeholder="insert your email here"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="ContactContainerBottomGroup">
          <div className="ContactContainerMessage">
            <textarea
              className="textarea"
              placeholder="Your message..."
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </div>
          <div className="ContactContainerBottomGroupButton">
            <input className="button" type="submit" value="Send" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
