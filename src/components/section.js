import React, { Component } from "react";

//title of project
function Title(props) {
  return (
    <h2>
      <span className="projectLink">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          {" "}
          {props.name}{" "}
        </a>
      </span>
    </h2>
  );
}

//date project was completed in
function Date(props) {
  return <span>{props.date}</span>;
}

//all relavent languages and tools used in project
function Label(props) {
  return <span className="label">{props.label}</span>;
}

//short description of project
function Desc(props) {
  return <span className="description">{props.desc}</span>;
}

export default class Section extends Component {
  render() {
    return (
      <div id="parent">
        <div id="title">
          <hr />
          <h2>&#187; Projects</h2>
        </div>
        <div id="section">
          <div id="date">
            <Date date="2019-2021" />
          </div>
          <div>
            <Title
              name="coinmarketcap.com/currencies/populous"
              link="https://coinmarketcap.com/currencies/populous/"
            />
            <div id="labels">
              <Label label="JavaScript" />
              <Label label="React" />
              <Label label="Redux-Saga" />
              <Label label="React Hook" />
              <Label label="CSS" />
              <Label label="Node" />
              <Label label="Express" />
              <Label label="AWS" />
              <Label label="MySQL" />
            </div>
            <Desc
              desc="Built a RESTful API for a mobile app and web application with PHP, Laravel, Node.js, and Express.js.
and deployed them to AWS EC2 and designed a large and complicated database and optimized queries for better performance.
Implemented React UI features and fixed bugs using React, Redux-Saga, Semantic-UI.
Created several React components with Plotty charts that support interactive visualizations of data
projections and analysis"
            />
          </div>
        </div>

        <div id="section">
          <div id="date">
            <Date date="2017-2019" />
          </div>
          <div>
            <Title name="zenview.co" link="https://www.zenview.co/" />
            <div id="labels">
              <Label label="React" />
              <Label label="Node" />
              <Label label="Javascript" />
              <Label label="Redux-Saga" />
              <Label label="React Hooks" />
              <Label label="AWS" />
            </div>
            <Desc
              desc="Managed MERN development using Agile methodology. Implemented a back-end REST API for real-time location updates using PHP, MySQL, and Google Maps
              API.Integrated social networking APIs like Facebook, Twitter, and Instagram.Implemented payment modules using Stripe and Paypal"
            />
          </div>
        </div>

        <div id="section">
          <div id="date">
            <Date date="2014~2017" />
          </div>
          <div>
            <Title
              name="test.strings.app"
              link="https://www.test.strings.app/"
            />
            <div id="labels">
              <Label label="HTML" />
              <Label label="CSS" />
              <Label label="JavaScript" />
              <Label label="React" />
              <Label label="Node" />
              <Label label="Express" />
              <Label label="MySQL" />
              <Label label="AWS EC2" />
            </div>
            <Desc
              desc="Developed a React single page application with rich feature sets targeted mainly for charts data
              visualization using React as the front-end framework.Reduced a React and Node.js application downtime from five seconds to one second, resulting in a 97%
              uptime by implementing an auto-reconnecting WebSocket library.Implemented RESTful security standards for both the React front end and Node.js back end as defined by
              OSWAP.Lowered deployment time by 70% for 50 live instances by integrating a Jenkins pipeline into the React repository
              Automated manual data entry systems in the projects using React, resulting in a 50% reduction in the
              application processing delay and 30% less error in data inconsistency."
            />
          </div>
        </div>
      </div>
    );
  }
}
