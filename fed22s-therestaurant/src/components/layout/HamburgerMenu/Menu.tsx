import { Link } from "react-router-dom";
import { StyledMenu } from "../../styled/header/Hamburgermenu/StyledMenu";

interface IMenuProps {
  open: boolean;
  setOpen(show: boolean): void;
}

export const Menu = ({ open, setOpen }: IMenuProps) => {
  const handleClick = () => {
    setOpen(false);
  };
  return (
    <>
      <StyledMenu open={open}>
        <Link to={"/"} onClick={handleClick}>
          Hem
        </Link>
        <Link to={"/menu"} onClick={handleClick}>
          Meny
        </Link>
        <Link to={"/booking"} onClick={handleClick}>
          Boka
        </Link>
        <Link to={"/contact"} onClick={handleClick}>
          Kontakt
        </Link>
      </StyledMenu>
    </>
  );
};
