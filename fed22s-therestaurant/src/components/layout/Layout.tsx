import { Outlet } from "react-router";
import { Footer } from "./Footer";
import { MainWrapper } from "../styled/Wrappers";
import { Header } from "./Header";

export const Layout = () => {
  return (
    <>
      <Header></Header>
      <MainWrapper>
        <Outlet></Outlet>
      </MainWrapper>
      <Footer></Footer>
    </>
  );
};
