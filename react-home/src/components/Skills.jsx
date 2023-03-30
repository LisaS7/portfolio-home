import styled from "styled-components";
import skillsJson from "../data/skills.json";
import { CardContainer } from "./Card";

export const SkillsContainer = styled(CardContainer)`
  flex-wrap: wrap;
`;

const StyledSkillGroup = styled.div`
  display: flex;
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
