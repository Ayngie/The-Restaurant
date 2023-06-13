import { Outlet } from "react-router";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { MainWrapper } from "../styled/Wrappers";
import { StyledHeader } from "../styled/header/StyledHeader";
import { Header } from "./Header";

export const Layout = () => {
  return (
    <>
      <StyledHeader>
        <Header></Header>
      </StyledHeader>
      <MainWrapper>
        <Outlet></Outlet>
      </MainWrapper>
      <Footer></Footer>
    </>
  );
};
