import styled from "styled-components";

export const StyledDropdown = styled.section`
  /* display: flex;
  flex-direction: row; */
  label {
    width: 200px;
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
  .dropdown__placeholder {
    color: #db7093;
  }
  .dropdown__input-container,
  svg {
    color: #db7093;
  }
`;
