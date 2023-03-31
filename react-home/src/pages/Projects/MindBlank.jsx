import YouTube from "react-youtube";
import styled from "styled-components";
import { ProjectSection } from "../../containers/ProjectContainer";

const Image = styled.img`
  margin: 4rem 0;
  width: 100%;
`;

const Textblock = styled.p`
  margin: 0 auto;
  width: 80%;
  max-width: 50vw;
  text-align: justify;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

const ProjectSummary = styled.div`
  text-align: left;
`;

export default function MindBlank() {
  return (
    <>
      <h1>Mind Blank</h1>
      <ProjectSection style={{ gridTemplateColumns: "1fr 2fr" }}>
        <YouTube videoId="hahfdp1couo" />
        <ProjectSummary>
          <p>Project Type: Group (4 developers)</p>
          <p>Technologies: MERN stack, framer-motion</p>
          <p>
            Mind Blank was built as a group project during my time with
            CodeClan. We worked in a team of 4 over the course of one week and
            we presented our project to the group on the final day. During
            development we used Agile practices such as a Kanban board and daily
            stand ups.
          </p>
        </ProjectSummary>
      </ProjectSection>
      <ProjectSection>
        <h3>Brief</h3>
        <Textblock>
          Create a trivia browser game. Model and test the game logic and then
          display it in the browser for a user to interact with.
          <ul>
            <li>
              The game should display a question and four potential answers for
              the player to choose from.
            </li>
            <li>
              The player should be able to choose a category and difficulty
              level.
            </li>
            <li>The game should have a timer to make it more challenging.</li>
            <li>
              The game should keep track of the player's score and display it to
              the player while they play and at the end of the round.
            </li>
          </ul>
        </Textblock>
      </ProjectSection>
      <ProjectSection>
        <h3>Planning</h3>
        <Textblock>
          We planned the app with wireframes, a components diagram, and user
          stories. Our planning session was short and efficient and we all left
          with a clear idea of what we wanted to create.
        </Textblock>
      </ProjectSection>
      <Image src="../mind-blank/planning.png" alt="project user stories" />
      <ProjectSection>
        <h3>Development</h3>
        <Textblock>
          I primarily worked on the animations while also assisting my team to
          resolve any blockers. Shortly before we began this project I'd
          discovered the React library framer-motion. This new tool felt more
          intuitive to me than animating using CSS and I was excited to try it
          out. Luckily the group agreed on a brief which offered the opportunity
          I was looking for!
        </Textblock>
        <Textblock>
          I started by adding some simple animations to the menu buttons, then I
          created the fun intro and results animations using a few png images
          and some simple transitions.
        </Textblock>
      </ProjectSection>
    </>
  );
}
