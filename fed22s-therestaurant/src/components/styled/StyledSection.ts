import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  padding-bottom: 10px;

  @media screen and (min-width: 1200px) {
    min-height: 25vh;
  }
`;
