import React from "react";
import { CardContainer } from "../containers/CardContainer";
import { GitHub, ExternalLink, ProjectCard } from "../components/Project";

export default function Projects() {
  return (
    <CardContainer className="wrap py6">
      <ProjectCard>
        <h3>Star Wars Planets</h3>
        <p>
          A simple page which lists Star Wars planets. Data is courtesy of the
          Swapi API. Built with Python/Flask to practice using a REST API.
        </p>
        <GitHub repo="star-wars-planets" />
        <ExternalLink appName="star-wars-planets" />
      </ProjectCard>
      <ProjectCard>
        <h3>Weekly Planner</h3>
        <p>
          Plan tasks for the week ahead. This is my first Node.js app and the
          data is stored in MongoDB.
        </p>
        <GitHub repo="node-planner" />
        <ExternalLink appName="planner" />
      </ProjectCard>
    </CardContainer>
  );
}
