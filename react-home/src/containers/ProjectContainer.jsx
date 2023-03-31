import styled from "styled-components";

export const ProjectSection = styled.section`
  margin: 0 auto;
  padding: 3rem 0;
  display: grid;
  gap: 2vh 2vw;
  border-bottom: 1px solid darkslategray;
  border-top: 1px solid darkslategray;
  text-align: center;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
