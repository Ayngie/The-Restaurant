import styled from "styled-components";

interface IStyledMenuProps {
  open: boolean;
}

export const StyledMenu = styled.nav<IStyledMenuProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffeafc;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;

  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;

  a {
    text-decoration: none;
    letter-spacing: 0.1rem;

    &:active {
      color: hotpink;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
