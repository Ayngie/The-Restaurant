import styled from "styled-components";

export const StyledDropdown = styled.section`
  width: 100%;

  label {
    text-align: center;
  }
  span {
    border: 2px solid #db7093;
  }
  .dropdown__control {
    width: 200px;
    color: #db7093;
    border: 2px solid #db7093;
  }
  .dropdown__control--is-focused,
  .dropdown__control--menu-is-open {
    border: 2px solid #db7093;
  }
  .dropdown__placeholder,
  .dropdown__input-container,
  svg {
    color: #db7093;
  }
  .dropdown__menu--select {
    background-color: pink;
  }
`;
