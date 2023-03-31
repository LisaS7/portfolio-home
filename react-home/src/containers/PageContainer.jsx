import styled from "styled-components";

export const PageContainer = styled.main`
  width: 60%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 4rem;
  background-color: var(--light-grey);
`;

export const NarrowPageContainer = styled(PageContainer)`
  width: 40%;
`;
