import styled from "styled-components";
import skillsJson from "../data/skills.json";
import { CardContainer } from "../containers/CardContainer";

export const SkillsContainer = styled(CardContainer)`
  flex-wrap: wrap;
`;

const StyledSkillGroup = styled.div`
  display: flex;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export function SkillGroup({ skills }) {
  return (
    <StyledSkillGroup>
      {skills.map((skill, index) => {
        return (
          <div key={index}>
            <img
              className="logo"
              src={`./skills/${skill.image}`}
              alt={`${skill.image}`}
            ></img>
          </div>
        );
      })}
    </StyledSkillGroup>
  );
}

export function Skills() {
  return (
    <>
      {Object.keys(skillsJson).map((level) => (
        <div key={level}>
          <p>{level}</p>
          <SkillGroup skills={skillsJson[level]} />
        </div>
      ))}
    </>
  );
}
