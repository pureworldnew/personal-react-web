import React, { Component } from "react";

// Job section blueprint
function Job(props) {
  return (
    <div className="jobs">
      <div className="job-section">
        <h3>{props.co}</h3>
        <div>{props.title}</div>
      </div>
      <div className="job-section">{props.date}</div>
    </div>
  );
}

export default class Experience extends Component {
  render() {
    return (
      <div id="parent">
        <div id="title">
          <hr />
          <h2>&#187; Experience</h2>
        </div>
        <Job
          co="Testbericht.de"
          title="Senior Web Developer"
          date="May 2020 - Present"
        />
        <Job
          co="Nordy Sistemas"
          title="Contract - Web Developer"
          date="May 2020 - Aug 2020"
        />
        <Job
          co="ElitePC"
          title="Contract - Software Engineer"
          date="May 2019 - Dec 2019"
        />
        <Job
          co="Kindertales"
          title="Contract - Web/Mobile Dev"
          date="Jul 2014 - Apr 2018"
        />
        <Job
          co="AllSocial"
          title="Contract - MERN Stack Dev"
          date="Aug 2016 - Feb 2018"
        />
        <Job
          co="Interlink"
          title="Contract - MERN Stack Dev"
          date="Jan 2017 - Oct 2017"
        />
      </div>
    );
  }
}
