import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import myphoto from '../img/selfie.jpeg'

function About() {
  return (
    <div className="text-box">
      <h3>About Steven Barrios</h3>
      <div className="row">
        <img src={myphoto} className="col-12 col-md-3" id="selfie" />
        <Accordion defaultActiveKey="0" className="col-12 col-md-9">
          <Accordion.Item eventKey="0">
            <Accordion.Header>About Me</Accordion.Header>
            <Accordion.Body>
              A Full Stack Web Developer passionate about creating interactive applications
              and experiences on the internet. I love exploring new frameworks and technologies
              If youre looking for your next hire to add to your team, I'd love to hear from you!<hr />
              <div className="bodySection row justify-center">
              <div className="sectionAboutMe col-5">
             
                Los Angeles, CA <i className="about-me-icons fa-solid fa-map-pin"></i>
                <br />
                30 Years Old <i class="about-me-icons fa-regular fa-calendar"></i>
              </div>
              <div className="sectionAboutMe2 col-5">
                UCLA <i class="uclaSection fa-solid fa-graduation-cap"></i>
                <br />
                My Interest <i class="interestSection fa-solid fa-mug-saucer"></i>
                <i class="about-me-icons fa-solid fa-person-hiking"></i>
                <i class="about-me-icons fa-solid fa-futbol"></i>
                <i class="about-me-icons fa-solid fa-laptop-code"></i>
                <i class="about-me-icons fa-solid fa-plane-departure"></i>
              </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>My Education</Accordion.Header>
            <Accordion.Body>
              UCLA Extension: Full Stack Developer Program. 
              I learned so many languages and frameworks. Some of my favorite langues and frameworks include HTML, Node.Js, CSS, JavaScript, 
              React, and many more. If you're interested in a passionate and motivated developer feel free to contact me!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item>
            <Accordion.Header>My Why</Accordion.Header>
            <Accordion.Body>
              Coding is something I was always interested about. 
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default About;