import { StyledBurger } from "../../styled/header/Hamburgermenu/StyledBurger";

interface IBurgerProps {
  open: boolean;
  setOpen(show: boolean): void;
}

export const Burger = ({ open, setOpen }: IBurgerProps) => {
  const isExpanded = open ? true : false;
  return (
    <StyledBurger
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      open={open}
      onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
