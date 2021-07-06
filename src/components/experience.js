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
          co="meetwithdev.com"
          title="Senior Web Developer"
          date="Jan 2021 - Jun 2021"
        />
        <Job
          co="populous.world"
          title="Contract - Web Developer"
          date="Sep 2019 - Jan 2021"
        />
        <Job
          co="covid19japan.com"
          title="Contract - Web Developer"
          date="Sep 2019 - Jan 2021"
        />
        <Job
          co="coinmarketcap.com"
          title="Contract - Web Developer"
          date="Sep 2019 - Jan 2021"
        />
        <Job
          co="testbericht.de"
          title="Contract - Software Engineer"
          date="Sep 2018 - Dec 2019"
        />
        <Job
          co="oohyah.com"
          title="Contract - Web Dev"
          date="May 2016 - Sep 2018"
        />
        <Job
          co="kindertales.com"
          title="Contract - PHP Developer"
          date="Jul 2014 - Apr 2016"
        />
      </div>
    );
  }
}
