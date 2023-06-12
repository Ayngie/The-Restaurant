import { Outlet } from "react-router";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { MainWrapper } from "../styled/Wrappers";
import { StyledHeader } from "../styled/header/StyledHeader";

export const Layout = () => {
  return (
    <>
      <StyledHeader>
        <NavBar></NavBar>
      </StyledHeader>
      <MainWrapper>
        <Outlet></Outlet>
      </MainWrapper>
      <Footer></Footer>
    </>
  );
};
