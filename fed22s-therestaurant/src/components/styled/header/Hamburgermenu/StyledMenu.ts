import styled from "styled-components";

interface IStyledMenuProps {
  open: boolean;
}

export const StyledMenu = styled.nav<IStyledMenuProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffeafc;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
