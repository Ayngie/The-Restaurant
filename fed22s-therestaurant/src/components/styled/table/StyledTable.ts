import styled from "styled-components";

export const StyledTable = styled.table`
  width: 95%;
  background-color: rgb(255, 254, 235);
  border-collapse: collapse;
  margin-bottom: 10px;
  border-radius: 10px;
  text-align: center;
  @media screen and (min-width: 768px) {
    width: 60%;
  }
  @media screen and (min-width: 1200px) {
    width: 40%;
  }
`;
