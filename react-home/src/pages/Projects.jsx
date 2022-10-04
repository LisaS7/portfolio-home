import React from "react";

export default function Projects() {
  return (
    <div className="card-container">
      <div className="project-card">
        <h3>Star Wars Planets</h3>
        <p>
          A simple page which lists Star Wars planets. Data is courtesy of the
          Swapi API. Built with Python/Flask to practice using a REST API.
        </p>
        <GitHub repo="star-wars-planets" />
        <ExternalLink appName="star-wars-planets" />
      </div>
      <div className="project-card">
        <h3>Weekly Planner</h3>
        <p>
          Plan tasks for the week ahead. This is my first Node.js app and the
          data is stored in MongoDB.
        </p>
        <GitHub repo="node-planner" />
        <ExternalLink appName="planner" />
      </div>
    </div>
  );
}

function GitHub({ repo }) {
  return (
    <a
      href={`https://github.com/LisaS7/${repo}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="logo" src="./github.svg" alt="github link" />
    </a>
  );
}

function ExternalLink({ appName }) {
  return (
    <a
      href={`http://52.56.147.199/${appName}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="logo" src="./external-link.png" alt="view project" />
    </a>
  );
}
