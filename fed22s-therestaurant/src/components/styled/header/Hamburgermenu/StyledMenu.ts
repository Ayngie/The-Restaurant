import styled from "styled-components";

interface IStyledMenuProps {
  open: boolean;
}

export const StyledMenu = styled.nav<IStyledMenuProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffeafc;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 1o0vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    /* display: none; */
    width: 100%;
  }

  Link {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    /* color: ${({ theme }) => theme.primaryDark}; */
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      text-align: center;
    }

    /* &:hover {
      color: hotpink;
    } */
  }
`;
