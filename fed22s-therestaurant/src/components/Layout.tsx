import { Outlet } from "react-router";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { MainWrapper } from "./styled/MainWrapper";

export const Layout = () => {
  return (
    <>
      <NavBar></NavBar>
      <MainWrapper></MainWrapper>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};
