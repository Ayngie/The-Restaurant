import { NavBar } from "./NavBar";
import logo from "../../assets/Restaurangen.png";
import { StyledLogo } from "../styled/header/StyledLogo";

export const Header = () => {
  return (
    <>
      <StyledLogo src={logo} alt="logga" />

      <NavBar></NavBar>
    </>
  );
};
