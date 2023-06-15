import { StyledBurger } from "../../styled/header/Hamburgermenu/StyledBurger";

interface IBurgerProps {
  open: boolean;
  setOpen(show: boolean): void;
}

export const Burger = ({ open, setOpen }: IBurgerProps) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
