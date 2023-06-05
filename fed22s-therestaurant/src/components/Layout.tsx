import { Outlet } from "react-router";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { MainWrapper } from "./styled/Wrappers";

export const Layout = () => {
  return (
    <>
      <NavBar></NavBar>
      <MainWrapper>
        <Outlet></Outlet>
      </MainWrapper>
      <Footer></Footer>
    </>
  );
};
