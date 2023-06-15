import { Link } from "react-router-dom";
import { StyledMenu } from "../../styled/header/Hamburgermenu/StyledMenu";

export const Menu = () => {
  return (
    <>
      <StyledMenu>
        <Link to={"/"}>Hem</Link>
        <Link to={"/menu"}>Meny</Link>
        <Link to={"/booking"}>Boka</Link>
        <Link to={"/contact"}>Kontakt</Link>
      </StyledMenu>
    </>
  );
};
