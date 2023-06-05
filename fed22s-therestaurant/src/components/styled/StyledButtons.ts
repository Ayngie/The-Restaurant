import styled from "styled-components";

const Button = styled.button`
  padding: 0.5rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  border-radius: 50px;
  line-height: 2rem;
  letter-spacing: 1px;
  border: none;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;

export const NormalButton = styled(Button)`
  color: white;
  background-color: hotpink;
  &:hover {
    background-color: rebeccapurple;
  }
  &:active {
    color: white;
    background-color: hotpink;
  }
`;

export const WarningButton = styled(Button)`
  color: white;
  background-color: red;
  &:hover {
    background-color: orangered;
  }
  &:active {
    color: white;
    background-color: red;
  }
`;
