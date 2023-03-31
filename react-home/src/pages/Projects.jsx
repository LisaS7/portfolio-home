import React from "react";
import { CardContainer } from "../containers/CardContainer";
import {
  GitHub,
  ExternalLink,
  InternalLink,
  ProjectCard,
  ButtonBox,
} from "../components/Project";

export default function Projects() {
  return (
    <CardContainer className="py6">
      <ProjectCard>
        <h3>Mind Blank</h3>
        <p>
          A quiz app created as a group project during the CodeClan software
          development course. Built with the MERN stack and animations produced
          using the framer-motion library.
        </p>
        <ButtonBox>
          <GitHub repo="game-group-project" />
          <InternalLink appName="mind-blank" />
        </ButtonBox>
      </ProjectCard>
      <ProjectCard>
        <h3>Star Wars Planets</h3>
        <p>
          A simple page which lists Star Wars planets. Data is courtesy of the
          Swapi API. Built with Python/Flask to practice using a REST API and
          hosted on AWS EC2.
        </p>
        <ButtonBox>
          <GitHub repo="star-wars-planets" />
          <ExternalLink appName="star-wars-planets" />
        </ButtonBox>
      </ProjectCard>
      <ProjectCard>
        <h3>Weekly Planner</h3>
        <p>
          Plan tasks for the week ahead for multiple users. This is my first
          Node.js app. Deployed to an AWS EC2 server.
        </p>
        <ButtonBox>
          <GitHub repo="node-planner" />
          <ExternalLink appName="planner" />
        </ButtonBox>
      </ProjectCard>
    </CardContainer>
  );
}
