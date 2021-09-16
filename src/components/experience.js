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
          co="Coinmarketcap"
          title="Contract - React Developer"
          date="Apr 2019 - Jul 2021"
        />
        <Job
          co="Populous World"
          title="Contract - React Developer"
          date="Apr 2017 - Mar 2019"
        />
        <Job
          co="Interlink"
          title="Contract - React Developer"
          date="Feb 2016 - Apr 2017"
        />
        <Job
          co="Shanghai Alliance Financial Services Co.,Ltd"
          title="Contract - Javascript Developer"
          date="Apr 2015 - Feb 2016"
        />
        <Job
          co="Dandong Xintai Electric Co., Ltd"
          title="Contract - Software Engineer"
          date="Feb 2013 - Apr 2015"
        />
      </div>
    );
  }
}
