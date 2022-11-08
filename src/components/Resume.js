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
    <div className="resume-box row">
      <img className="col-2 col-md-1 icon" src={htmlIcon} />
      <img className="col-2 col-md-1 icon" src={cssIcon} />
      <img className="col-2 col-md-1 icon" src={expressIcon} />
      <img className="col-2 col-md-1 icon" src={gitHubIcon} />

      <img className="col-2 col-md-1 icon" src={jqueryIcon} />
      <img className="col-2 col-md-1 icon" src={javaScriptIcon} />
      <img className="col-2 col-md-1 icon" src={mongoDBIcon} />
      <img className="col-2 col-md-1 icon" src={mySQLIcon} />

      <img className="col-2 col-md-1 icon" src={nodeIcon} />
      <img className="col-2 col-md-1 icon" src={reactIcon} />
      <img className="col-2 col-md-1 icon" src={reduxIcon} />
      <img className="col-2 col-md-1 icon" src={sassIcon} />
    </div>
  );
}

export default Resume;