import React from "react";
import styled from "styled-components";

const Container = styled.main`
  margin: auto;
  margin-bottom: 3rem;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: justify;
  gap: 1.5rem 3rem;

  & img {
    width: 250px;
    margin: auto;
  }
`;

export default function Home() {
  return (
    <Container className="w75 py6">
      <h1>Hello!</h1>
      <p>
        My name is Lisa. I discovered the magic of programming while working as
        a Senior Business Analyst. I love Python and working with data so I'm
        now looking for a job as a backend developer.
      </p>
      <img src="./me.jpg" alt="me" />

      <p>
        I have 15 years of experience working in financial services, mostly as a
        Business Analyst. I've worked in teams using both waterfall and agile,
        latterly becoming my team's Jira/Confluence expert!
      </p>
      <p>
        As a Business Analyst I gained valuable experience in analysing client
        requirements, developing new accounting system features in close
        cooperation with the operational teams and client, integration and unit
        testing, and producing technical documentation and user guides.
      </p>
      <p>
        I began learning Python to automate my team's development and testing
        processes and very quickly discovered a love for programming. I've spent
        some time learning basic frontend and backend skills but I definitely
        have the most fun working on backend.
      </p>
    </Container>
  );
}
