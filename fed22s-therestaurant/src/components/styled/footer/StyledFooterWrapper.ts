import styled from "styled-components";

export const StyledFooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: black;
  color: antiquewhite;
  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;
