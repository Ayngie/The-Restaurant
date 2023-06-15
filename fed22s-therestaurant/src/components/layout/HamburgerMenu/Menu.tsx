import { Link } from "react-router-dom";
import { StyledMenu } from "../../styled/header/Hamburgermenu/StyledMenu";

interface IMenuProps {
  open: boolean;
  setOpen(show: boolean): void;
}

export const Menu = ({ open, setOpen }: IMenuProps) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  const handleClick = () => {
    setOpen(false);
  };
  return (
    <>
      <StyledMenu open={open} aria-hidden={!isHidden}>
        <Link
          to={"/"}
          onClick={handleClick}
          tabIndex={tabIndex}
          aria-hidden={true}>
          Hem
        </Link>
        <Link
          to={"/menu"}
          onClick={handleClick}
          tabIndex={tabIndex}
          aria-hidden={true}>
          Meny
        </Link>
        <Link
          to={"/booking"}
          onClick={handleClick}
          tabIndex={tabIndex}
          aria-hidden={true}>
          Boka
        </Link>
        <Link
          to={"/contact"}
          onClick={handleClick}
          tabIndex={tabIndex}
          aria-hidden={true}>
          Kontakt
        </Link>
      </StyledMenu>
    </>
  );
};
