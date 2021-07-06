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
            <Date date="2021" />
          </div>
          <div>
            <Title name="meetwithdev.com" link="https://meetwithdev.com/" />
            <div id="labels">
              <Label label="JavaScript" />
              <Label label="Vue" />
              <Label label="Vuex" />
              <Label label="CSS" />
              <Label label="Python" />
              <Label label="Django" />
              <Label label="AWS" />
              <Label label="PostgreSQL" />
            </div>
            <Desc
              desc="Building Front-end Pages from scratch with
              Vue, Backend architecture design and development
              using Django Framework including PostgreSQL DB
              design"
            />
          </div>
        </div>

        <div id="section">
          <div id="date">
            <Date date="2019-2021" />
          </div>
          <div>
            <Title name="populous.world" link="https://populous.world/" />
            <Title name="covid19japan.com" link="https://covid19japan.com/" />
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
              desc="Building Front-end Pages from scratch with
              React, Backend architecture design and development
              using Node Framework including MySQL DB design"
            />
          </div>
        </div>

        <div id="section">
          <div id="date">
            <Date date="2018-2019" />
          </div>
          <div>
            <Title name="testbericht.de" link="https://www.testbericht.de/" />
            <Title
              name="beta.testbericht.de"
              link="https://beta.testbericht.de/"
            />
            <div id="labels">
              <Label label="Vue" />
              <Label label="Django" />
              <Label label="Javascript" />
              <Label label="Python" />
              <Label label="PHP" />
              <Label label="AWS" />
            </div>
            <Desc
              desc="Migrating Core PHP based website into
              Vue/Django based website"
            />
          </div>
        </div>

        <div id="section">
          <div id="date">
            <Date date="2016-2018" />
          </div>
          <div>
            <Title name="oohyah.com" link="https://oohyah.com/" />
            <div id="labels">
              <Label label="HTML" />
              <Label label="CSS" />
              <Label label="JavaScript" />
              <Label label="Jquery" />
              <Label label="PHP" />
              <Label label="Laravel" />
            </div>
            <Desc
              desc="MVC Terminology based on AngularJs, Laravel Framework,
              Rest API development"
            />
          </div>
        </div>

        <div id="section">
          <div id="date">
            <Date date="2014~2016" />
          </div>
          <div>
            <Title name="kindertales.com" link="https://www.kindertales.com/" />
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
              desc="With Core PHP and Javascript, HTML/CSS, I have built main
              structure and architecture of the whole project (front-end & backend) and implemented different kinds of features for the
              requirements of company and by contacting with team leader and
              members.
              I believe that was very pleasured period of my past freelancer career"
            />
          </div>
        </div>
      </div>
    );
  }
}
