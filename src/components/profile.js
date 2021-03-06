import React, { Component } from "react";

//get icons
import githubIcon from "../icons/github_icon.svg";
import linkedlnIcon from "../icons/linkedln_icon.png";
import mePic from "../icons/new.png";
import emailIcon from "../icons/email_icon.png";
import resumeIcon from "../icons/resume.png";
import resumePDF from "../icons/resume.pdf";
import calendarIcon from "../icons/calendar.png";
//Just name
function Name() {
  return <h2>Nick Lin</h2>;
}

//all social links
function SocialLinks(props) {
  return (
    <h6>
      <a
        href="https://www.github.com/pureworldnew"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img id="profile-icon" src={githubIcon} alt="" />
        Github
      </a>
      <a
        href="https://www.linkedin.com/in/nickstardev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img id="profile-icon-linkedin" src={linkedlnIcon} alt="" />
        LinkedIn
      </a>
      <a href="mailto:nicklin1993812@gmail.com" rel="noopener noreferrer">
        <img id="profile-icon-linkedin" src={emailIcon} alt="" />
        Email Me
      </a>
      <a href={resumePDF} target="_blank" rel="noopener noreferrer">
        <img id="profile-icon-linkedin" src={resumeIcon} alt="" />
        Resume
      </a>
      <a
        href="https://calendly.com/nick-meet"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img id="profile-icon-linkedin" src={calendarIcon} alt="" />
        Calendar
      </a>
    </h6>
  );
}

//short description
function Short(props) {
  return (
    <div className="padding-top" id="profile-description">
      Senior Software Developer at Javascript/React/Node
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
