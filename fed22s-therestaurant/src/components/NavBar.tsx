import { Link } from "react-router-dom";
import { StyledNavBar } from "./styled/navigation/StyledNavBar";
import { StyledNavList } from "./styled/navigation/StyledNavList";
import { StyledListItem } from "./styled/navigation/StyledListITem";

export const NavBar = () => {
  return (
    <>
      <StyledNavBar>
        <StyledNavList>
          <StyledListItem>
            <Link to={"/"}>Hem</Link>
          </StyledListItem>
          <StyledListItem>
            <Link to={"/booking"}>Boka</Link>
          </StyledListItem>
          <StyledListItem>
            <Link to={"/contact"}>Kontakt</Link>
          </StyledListItem>
        </StyledNavList>
      </StyledNavBar>
    </>
  );
};
