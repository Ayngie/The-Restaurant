import styled from "styled-components";

export const StyledInput = styled.input`
  border: 2px solid lavender;
  border-radius: 5px;
  font-size: 1em;
  padding: 0.4em;
  width: 13rem;

  background-image: linear-gradient(hotpink, hotpink);
  background-position: center bottom, center calc(100% - 1px);
  background-repeat: no-repeat;
  background-size: 0 2px, 100% 1px;
  color: hotpink;

  &::placeholder {
    color: plum;
  }
  &:hover {
    cursor: text;
  }
  &:focus {
    outline: none;
    background-size: 100% 2px, 100% 1px;
    transition-duration: 0.3s;
  }
  &:active {
    color: red;
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 50px white inset;
    -webkit-text-fill-color: hotpink;
  }
`;

export const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  cursor: pointer;
  accent-color: #db7093;
  border-color: #db7093;
  &--check {
    accent-color: #db7093;
  }
`;
