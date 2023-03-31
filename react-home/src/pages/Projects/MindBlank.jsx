import YouTube from "react-youtube";
import styled from "styled-components";
import { ProjectContainer } from "../../containers/ProjectContainer";
import { PageContainer } from "../../containers/PageContainer";

const Image = styled.img`
  margin: 4rem 0;
  width: 80vw;
`;

const Textblock = styled.p`
  margin: 0 auto;
  width: 80%;
  max-width: 50vw;
  text-align: justify;
`;

const ProjectSummary = styled.div`
  text-align: left;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

export default function MindBlank() {
  return (
    <PageContainer>
      <h1>Mind Blank</h1>
      <ProjectContainer style={{ gridTemplateColumns: "1fr 2fr" }}>
        <YouTube videoId="hahfdp1couo" />
        <ProjectSummary>
          <p>Project Type: Group (4 developers)</p>
          <p>Technologies: MERN stack, framer-motion</p>
          <p>
            Mind Blank was built as a group project during my time with
            CodeClan. We worked in a team of 4 over the course of one week and
            we presented our project to the group on the final day. We used
            Agile practices such as a Kanban board and daily stand ups.
          </p>
        </ProjectSummary>
      </ProjectContainer>

      <ProjectContainer>
        <Textblock>
          We planned the app with wireframes, a components diagram, and user
          stories. Our planning session was short and efficient and we all left
          with a clear idea of what we wanted to create.
        </Textblock>
      </ProjectContainer>
      <Image src="../mind-blank/planning.png" alt="project user stories" />
    </PageContainer>
  );
}
