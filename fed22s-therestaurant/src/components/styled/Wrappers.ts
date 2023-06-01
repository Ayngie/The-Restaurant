import styled from "styled-components";

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: pink;
  height: 90vh;
  @media screen and (min-width: 1200px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1200px) {
    flex-direction: row;
    justify-content: center;
    width: 30%;
  }
`;