import React from "react";
import htmlIcon from '../img/icons8-html-5-144.png';
import cssIcon from '../img/icons8-css3-144.png'

function Resume() {
  return (
    <div className="text-box">
      <div>
        <img className="icon" src={htmlIcon}></img>
        <img className="icon" src={cssIcon}></img>
        <img></img>
        <img></img>
      </div>

      <div>
      <img></img>
        <img></img>
        <img></img>
        <img></img>
      </div>

      <div>
        <img></img>
        <img></img>
        <img></img>
        <img></img>
        </div>

    </div>
  );
}

export default Resume;