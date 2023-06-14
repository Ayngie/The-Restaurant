import styled from "styled-components";

export const StyledFooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #9962af;
  color: antiquewhite;
  padding: 60px 0px 60px 60px;
  @media screen and (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-around;
    padding: 60px 20px 60px 20px;
  }
`;
