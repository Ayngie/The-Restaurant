import styled from "styled-components";

export const StyledSelect = styled.select`
  border: 2px solid lavender;
  border-radius: 5px;
  font-size: 1em;
  padding: 0.4em;
  width: inherit;
  color: hotpink;
  &:focus {
    outline: none;
    background-size: 100% 2px, 100% 1px;
    transition-duration: 0.3s;
  }
  &:active {
    color: red;
  }
`;
