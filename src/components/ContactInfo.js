import { Parallax } from 'react-parallax';
import newBG from "../img/newBG.jpg"
import React, { useState } from 'react';

export default function ContactInfo() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setstatus] = useState("");

  const handleInputChange = (event) => {
    if (event.target.name === "name") {
      setName(event.target.value);
    } else if (event.target.name === "email") {
      setEmail(event.target.value);
    } else {
      setMessage(event.target.value);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // checking to see if all input fields are full
    if (email && name && message) {
      // checking to make sure email is valid
      if (checkEmail(email)) {
        const encodedSubject = "Email From Portfolio";
        const encodedBody = `${message} - from ${name} ${email}`;

        // hyper link to open mail client and populate subject and body --- still working on this
        const link = `mailto:steven.barrios92@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;

        window.location = link;
      } else {
        setstatus("email is invalid");
      }
    } else {
      setstatus("all input fields need to be filled ");
    }
  };

  const checkEmail = (email) => {
    return email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return (

    <Parallax className='image3' bgImage={newBG} strength={800}>
      <div className="contact-content" id="contact">
        <div className='contact-display'>Contact Me Or Schedule A Meeting!</div>
        <p>Second Button Goes Directly Towards My Calendy Schedule!</p>
        <form className="px-5 py-1">
          <div className="form-group ">
            <label for="name" className="py-1 ">
              Name
            </label>
            <input
              value={name}
              name="name"
              onChange={handleInputChange}
              type="text"
              placeholder="Name"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label for="email" className="py-1 ">
              Email address
            </label>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="Email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label for="message" className="py-1 ">
              Message
            </label>
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              type="text"
              placeholder="Message"
              className="form-control"
              rows="3"
            />
          </div>
          <button
            type="submit"
            onClick={handleFormSubmit}
            className="btn mt-3"
            id='form-btn'
          >
            Submit
          </button>

          <a href='https://calendly.com/stevenb92' className='btn mt-3'
          id='form-btn'
          >
            Calendy
          </a>

          <p>{status}</p>
        </form>
      </div>
    </Parallax>
  )
}