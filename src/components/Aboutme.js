import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import myphoto from '../img/selfie.jpeg';

function About() {
  return (
    <div className="text-box" id="aboutMe">
      <h3>About Steven Barrios</h3>
      <div className="row">
        <img src={myphoto} className="col-12 col-md-3" id="selfie" alt="selfie"/>
        <Accordion defaultActiveKey="0" className=" col-12 col-md-9">
          <Accordion.Item eventKey="0">
            <Accordion.Header >Education</Accordion.Header>
            <Accordion.Body>
             UCLA Extension: Full Stack Developer Program. 
              Fluent in numerous languages and frameworks including (but not limited to): HTML, Node.Js, CSS, JavaScript, 
              React, and many more. Passionate, motivated and well-versed developer available and open for inquiries.
              <br />
               You can also download my Resume using this button. 
               < br />
               <a href="https://drive.google.com/uc?export=download&id=1BY1CnQnuUw6hYIWYLlLjxRRUrHQBJw9X" className="btn btn-primary btn-sm">Download</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header >About Me</Accordion.Header>
            <Accordion.Body>
              Steven Barrios here! I love programming, writing, speaking, learning, traveling and food. I do spend most of my free 
              time with my dog or learning about new techologies. Aside from visiting cournties and experiencing new foods and cultures, 
              I enjoy nature and scenic views with a good cup of coffee. <hr />
              <div className="bodySection row justify-center">
              <div className="sectionAboutMe col-5">
             
                Los Angeles, CA <i className="about-me-icons fa-solid fa-map-pin"></i>
                <br />
                31 Years Old <i class="about-me-icons fa-regular fa-calendar"></i>
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
          <Accordion.Item>
            <Accordion.Header>My Goals</Accordion.Header>
            <Accordion.Body>
              As an aspiring new developer I want to accomplish many things in life. I want a great career with a company that cares about its 
              employees and has good values. I want to help push the developer world into new heights, improve my skills constantly, network as
              much as I can and help out in my community as much as possible. 
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default About;