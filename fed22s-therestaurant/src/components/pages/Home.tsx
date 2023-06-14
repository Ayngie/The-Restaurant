import { Link } from "react-router-dom";
import { NormalButton } from "../styled/StyledButtons";
import { StyledSection } from "../styled/StyledSection";
import { ColumnWrapper } from "../styled/Wrappers";
import { StyledHero } from "../styled/StyledHero";
export const Home = () => {
  return (
    <>
      <ColumnWrapper>
        <StyledHero>
          <h1>Välkommen till Restaurangen!</h1>
          <p>Text om restaurangen</p>
        </StyledHero>
        <StyledSection>
          <Link to={"/booking"}>
            <h2>Gå till bokningar</h2>
            <h2>Visa meny</h2>
            {/* <NormalButton>Gå till bokningar</NormalButton> */}
          </Link>
        </StyledSection>
      </ColumnWrapper>
    </>
  );
};
