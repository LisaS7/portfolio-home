import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 3rem;
  padding: 0 2rem;
  gap: 1.5rem 3rem;
`;

export const SkillsContainer = styled(CardContainer)`
  flex-wrap: wrap;
`;

export const CourseCard = styled.div`
  display: flex;
  gap: 6rem;
  flex-basis: 100%;
  padding: 0 3rem;

  & p {
    max-width: 18rem;
    text-align: left;
    font-size: 0.75rem;
  }
`;
