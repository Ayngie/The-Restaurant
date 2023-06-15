import { Link } from "react-router-dom";
import { StyledMenu } from "../../styled/header/Hamburgermenu/StyledMenu";

interface IMenuProps {
  open: boolean;
  setOpen(show: boolean): void;
}

export const Menu = ({ open, setOpen }: IMenuProps) => {
  return (
    <>
      <StyledMenu open={open}>
        <Link to={"/"}>Hem</Link>
        <Link to={"/menu"}>Meny</Link>
        <Link to={"/booking"}>Boka</Link>
        <Link to={"/contact"}>Kontakt</Link>
      </StyledMenu>
    </>
  );
};
