import React from "react";
import htmlIcon from '../img/icons8-html-5-144.png';
import cssIcon from '../img/icons8-css3-144.png';
import expressIcon from '../img/express.png';
import gitHubIcon from '../img/github.png';
import javaScriptIcon from '../img/icons8-javascript-144.png';
import jqueryIcon from '../img/jquery.png';
import mongoDBIcon from '../img/icons8-mongodb-144.png';
import mySQLIcon from '../img/icons8-my-sql-144.png';
import nodeIcon from '../img/icons8-node-js-144.png';
import reactIcon from '../img/icons8-react-144.png';
import reduxIcon from '../img/redux.png';
import sassIcon from '../img/icons8-sass-144.png';

function Resume() {
  return (
    <div className="resume-box row" id="resume">
      <img className="col-2 col-md-1 icon" src={htmlIcon} alt="badge"/>
      <img className="col-2 col-md-1 icon" src={cssIcon} alt="badge"/>
      <img className="col-2 col-md-1 icon" src={expressIcon} alt="badge"/>
      <img className="col-2 col-md-1 icon" src={gitHubIcon} alt="badge"/>

      <img className="col-2 col-md-1 icon" src={jqueryIcon} alt="badge"/>
      <img className="col-2 col-md-1 icon" src={javaScriptIcon} alt="badge"/>
      <img className="col-2 col-md-1 icon" src={mongoDBIcon} alt="badge"/>
      <img className="col-2 col-md-1 icon" src={mySQLIcon} alt="badge"/>

      <img className="col-2 col-md-1 icon" src={nodeIcon} alt="badge"/>
      <img className="col-2 col-md-1 icon" src={reactIcon} alt="badge"/>
      <img className="col-2 col-md-1 icon" src={reduxIcon} alt="badge"/>
      <img className="col-2 col-md-1 icon" src={sassIcon} alt="badge"/>
    </div>
  );
}

export default Resume;