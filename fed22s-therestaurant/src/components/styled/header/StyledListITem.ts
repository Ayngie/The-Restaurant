import styled from "styled-components";

export const StyledListItem = styled.li`
  padding: 5px;
  padding-right: 30px;
  width: 100%;
  a {
    text-decoration: none;
    font-family: "Open Sans", sans-serif;
    font-weight: 800;
    color: white;
  }
  &:hover {
    text-shadow: 0 0 5px #8d228d;
  }
`;
