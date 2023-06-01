import styled from "styled-components";

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  background-color: pink;
  height: 90vh;
  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;
