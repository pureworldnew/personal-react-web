import React, { Component } from "react";

//get icons
import githubIcon from "../icons/github_icon.svg";
import linkedlnIcon from "../icons/linkedln_icon.png";
import mePic from "../icons/new.png";
import emailIcon from "../icons/email_icon.png";

//Just name
function Name() {
  return <h2>Nick Lin</h2>;
}

//all social links
function SocialLinks(props) {
  return (
    <h5>
      <a href="https://www.github.com/pureworldnew" rel="noopener noreferrer">
        <img id="profile-icon" src={githubIcon} alt="" />
        Github
      </a>
      <a
        href="https://www.linkedin.com/in/nickstardev"
        rel="noopener noreferrer"
      >
        <img id="profile-icon-linkedin" src={linkedlnIcon} alt="" />
        LinkedIn
      </a>
      <a href="mailto:pureworldnew@gmail.com" rel="noopener noreferrer">
        <img id="profile-icon-linkedin" src={emailIcon} alt="" />
        Email Me
      </a>
    </h5>
  );
}

//short description
function Short(props) {
  return (
    <div className="padding-top" id="profile-description">
      Senior Software Developer at React/Node/PHP/Python/Javascript
    </div>
  );
}

export default class Profile extends Component {
  render() {
    return (
      <div id="parent" className="profile">
        <div id="profile-name">
          <Name />
          <SocialLinks />
          <Short />
        </div>
        <div className="frame">
          <img id="profile-pic" src={mePic} alt="" />
        </div>
      </div>
    );
  }
}
