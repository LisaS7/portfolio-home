import React from "react";
import { CardContainer } from "../containers/CardContainer";
import {
  GitHub,
  ExternalLink,
  InternalLink,
  ProjectCard,
} from "../components/Project";

export default function Projects() {
  return (
    <CardContainer className="wrap py6">
      <ProjectCard>
        <h3>Mind Blank</h3>
        <p>
          A quiz app created as a group project during the CodeClan software
          development course. Built with the MERN stack and animations produced
          using the framer-motion library.
        </p>
        <GitHub repo="game-group-project" />
        <InternalLink appName="mind-blank" />
      </ProjectCard>
      <ProjectCard>
        <h3>Star Wars Planets</h3>
        <p>
          A simple page which lists Star Wars planets. Data is courtesy of the
          Swapi API. Built with Python/Flask to practice using a REST API and
          hosted on AWS EC2.
        </p>
        <GitHub repo="star-wars-planets" />
        <ExternalLink appName="star-wars-planets" />
      </ProjectCard>
      <ProjectCard>
        <h3>Weekly Planner</h3>
        <p>
          Plan tasks for the week ahead for multiple users. This is my first
          Node.js app. Deployed to an AWS EC2 server.
        </p>
        <GitHub repo="node-planner" />
        <ExternalLink appName="planner" />
      </ProjectCard>
    </CardContainer>
  );
}
