import styled from "styled-components";

export const PageContainer = styled.main`
  width: 60%;
  min-height: 100vh;
  margin: 0 auto;
  background-color: var(--light-grey);
  padding: 4rem;

  & h1 {
    font-size: 2.5rem;
    text-align: center;
  }

  @media only screen and (max-width: 768px) {
    padding: 1rem;
    width: 90%;
  }
`;
