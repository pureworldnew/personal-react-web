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

//longer title
function Short(props) {
  return (
    <h4>
      <em>{props.desc}</em>
    </h4>
  );
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
            <Date date="2020" />
          </div>
          <div>
            <Title name="zenview.co" link="https://www.zenview.co" />
            <Short desc="Revenue, Renewals and Account Management with presentations that make your life easier." />
            <div id="labels">
              <Label label="JavaScript" />
              <Label label="React.js" />
              <Label label="Redux-Saga" />
              <Label label="React Hook" />
              <Label label="Node.js" />
              <Label label="Express" />
            </div>
            <Desc
              desc="Building Contracts/Revenue/Accounts/Reports/
Dashboard /Settings Module for the company from Figma
design, Database Schema Design / Migration/Seed/
Performance tuning/ Data importing from Google Sheet into
DB, Deployment / CI / CD / Jenkins /AWS."
            />
          </div>
        </div>

        <div id="section">
          <div id="date">
            <Date date="2020" />
          </div>
          <div>
            <Title
              name="purpletowing.com"
              link="https://www.purpletowing.com"
            />
            <Short desc="Powering Dublin Port From 2020 to the future" />
            <div id="labels">
              <Label label="JavaScript" />
              <Label label="React.js" />
              <Label label="Node.js" />
              <Label label="Express" />
              <Label label="AWS EC2" />
              <Label label="AWS RDS" />
            </div>
            <Desc
              desc="Building Front-end Pages according to Figma design,
Backend architecture design and development using
node/express including DB design, and Deployment into
AWS using EC2, PM2, Nginx."
            />
          </div>
        </div>

        <div id="section">
          <div id="date">
            <Date date="2020" />
          </div>
          <div>
            <Title name="shoottheframe.com" link="https://shoottheframe.com/" />
            <Short desc="Join photographers from around the globe and submit your best portrait, landscape and wildlife photos." />
            <div id="labels">
              <Label label="Javascript" />
              <Label label="Angular 7" />
              <Label label="Angular Universal" />
              <Label label="Node.js" />
              <Label label="Express" />
              <Label label="AWS" />
            </div>
            <Desc
              desc="Rebuilding using Angular Universal for SSR and Fine
tuning / bug fix of existing Project."
            />
          </div>
        </div>

        <div id="section">
          <div id="date">
            <Date date="2020" />
          </div>
          <div>
            <Title name="visualsociety.com" link="https://visualsociety.com" />
            <Short
              desc="The easiest way to
sell photos & art"
            />
            <div id="labels">
              <Label label="HTML" />
              <Label label="CSS" />
              <Label label="JavaScript" />
              <Label label="Jquery" />
              <Label label="PHP" />
              <Label label="Laravel" />
            </div>
            <Desc
              desc="Building Front-end Pages from scratch, Backend
architecture design and development using Laravel
Framework including DB design."
            />
          </div>
        </div>

        <div id="section">
          <div id="date">
            <Date date="2017~2019" />
          </div>
          <div>
            <Title name="testbericht.de" link="https://www.testbericht.de/" />
            <Short desc="Ihr Portal für Testberichte und Vergleiche!" />
            <div id="labels">
              <Label label="HTML" />
              <Label label="CSS" />
              <Label label="JavaScript" />
              <Label label="JQuery" />
              <Label label="Bootstrap" />
              <Label label="Core PHP" />
              <Label label="MySQL" />
            </div>
            <Desc
              desc="Building website from scratch with Cron job, api
integration."
            />
          </div>
        </div>

        <div id="section">
          <div id="date">
            <Date date="2019" />
          </div>
          <div>
            <Title name="hexui.com" link="https://hexui.com" />
            <Short desc="Undetected CSGO Cheats and Hacks" />
            <div id="labels">
              <Label label="HTML" />
              <Label label="CSS" />
              <Label label="Javascript" />
              <Label label="PHP" />
              <Label label="Laravel" />
              <Label label="MySQL" />
            </div>
            <Desc
              desc="MVC Terminology based on AngularJs, Laravel
Framework, Rest API development."
            />
          </div>
        </div>

        <div id="section">
          <div id="date">
            <Date date="2017" />
          </div>
          <div>
            <Title name="test.strings.app" link="https://test.strings.app/" />
            <Short desc="Strings Device Management " />
            <div id="labels">
              <Label label="JavaScript" />
              <Label label="React.js" />
              <Label label="Redux-Saga" />
              <Label label="Node.js" />
              <Label label="Express" />
            </div>
            <Desc
              desc="Building Front-end pages using React/ReduxSaga/Javascript/CSS, and Designing DB for the business logic,
              and building backend architecture using Node/Express,
              Deployment of product to AWS using Nginx/PM2."
            />
          </div>
        </div>

        <div id="section">
          <div id="date">
            <Date date="2014~2018" />
          </div>
          <div>
            <Title name="kindertales.com" link="https://kindertales.com/" />
            <Short desc="Providers, Teachers, Parents, Marketing" />
            <div id="labels">
              <Label label="Node.js" />
              <Label label="Express" />
              <Label label="Bootstrap" />
              <Label label="CSS" />
              <Label label="JavaScript" />
              <Label label="Amazon RDS" />
            </div>
            <Desc desc="Pixel-perfect front-end development and highperformance back-end development." />
          </div>
        </div>

        <div id="section">
          <div id="date">
            <Date date="2016~2017" />
          </div>
          <div>
            <Title name="oohyah.com" link="https://oohyah.com" />
            <Short desc="A Music Streaming Platform & Marketplace for Artists & Fans" />
            <div id="labels">
              <Label label="AngularJs" />
              <Label label="HTML" />
              <Label label="CSS" />
              <Label label="Laravel" />
              <Label label="MySQL" />
            </div>
            <Desc
              desc="MVC Terminology based on AngularJs, Laravel
Framework, Rest API development."
            />
          </div>
        </div>

        <div id="section">
          <div id="date">
            <Date date="2015~2017" />
          </div>
          <div>
            <Title name="howtube.com" link="https://www.howtube.com/" />
            <Short desc="A New Video / Audio Platform Built For The People, By The People" />
            <div id="labels">
              <Label label="HTML" />
              <Label label="CSS" />
              <Label label="Javascript" />
              <Label label="PHP" />
              <Label label="Yii 2.0" />
              <Label label="MySQL" />
            </div>
            <Desc
              desc="With Yii 2.0 Framework, I have built this website from the scratch to final version...
              The most challenge for this web application development was to keep high performance of the web application with UI/UX design work..."
            />
          </div>
        </div>
      </div>
    );
  }
}
