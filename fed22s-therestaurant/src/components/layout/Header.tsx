import { NavBar } from "./NavBar";
import logo from "../../assets/logo.png";
import { StyledLogo } from "../styled/header/StyledLogo";
import { StyledHeader } from "../styled/header/StyledHeader";
import { Burger } from "./HamburgerMenu/Burger";
import { Menu } from "./HamburgerMenu/Menu";
import { useState } from "react";
import { HamburgerMenuWrapper } from "../styled/Wrappers";
import { Link } from "react-router-dom";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const menuId = "main-menu";

  return (
    <>
      <StyledHeader>
        <Link to="/">
          <StyledLogo src={logo} alt="logga" />
        </Link>
        <NavBar></NavBar>
        <HamburgerMenuWrapper>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId}></Burger>
          <Menu open={open} setOpen={setOpen}></Menu>
        </HamburgerMenuWrapper>
      </StyledHeader>
    </>
  );
};
