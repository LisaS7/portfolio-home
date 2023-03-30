import styled from "styled-components";

export const ProjectCard = styled.div`
  max-width: 26rem;
  padding: 2rem;
  border: 1px solid darkslategray;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export function GitHub({ repo }) {
  return (
    <a
      href={`https://github.com/LisaS7/${repo}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="logo" src="./github.svg" alt="github link" />
    </a>
  );
}

export function ExternalLink({ appName }) {
  return (
    <a
      href={`http://lisasteven.co.uk/${appName}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="logo" src="./external-link.png" alt="view project" />
    </a>
  );
}
