import React from 'react';
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
import babel from "../img/icons8-babel-144.png";
import magento from "../img/icons8-magento-144.png";
import tailwind from "../img/icons8-tailwindcss-144.png";
import wordpress from "../img/icons8-wordpress-144.png";

function Resume() {
  return (
    <div className="resume-box row w-100" id="resume">
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
      {/* <img className='col-2 col-md-1 icon' src={babel} alt="babel" />
      <img className='col-2 col-md-1 icon' src={magento} alt="magento" />
      <img className='col-2 col-md-1 icon' src={tailwind} alt="tailwind" />
      <img className='col-2 col-md-1 icon' src={wordpress} alt="wordpress" /> */}
    </div>
  );
}

export default Resume;