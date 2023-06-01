import { Link } from "react-router-dom";
import { StyledNavBar } from "./styled/navigation/StyledNavBar";
import { StyledNavList } from "./styled/navigation/StyledNavList";
import { StyledListItem } from "./styled/navigation/StyledListItem";

export const NavBar = () => {
  return (
    <>
      <StyledNavBar>
        <StyledNavList>
          <StyledListItem>
            {/* <Link to={"/"}>Hem</Link> */}
            Hem
          </StyledListItem>
          <StyledListItem>
            Boka
            {/* <Link to={"/bookings"}>Boka</Link> */}
          </StyledListItem>
          <StyledListItem>
            Kontakt
            {/* <Link to={"/contact"}>Kontakt</Link> */}
          </StyledListItem>
        </StyledNavList>
      </StyledNavBar>
    </>
  );
};
