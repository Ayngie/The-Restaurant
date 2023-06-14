import { Link } from "react-router-dom";
import { NormalButton } from "../styled/StyledButtons";
import { StyledSection } from "../styled/StyledSection";
import { ColumnWrapper } from "../styled/Wrappers";
import { StyledHero } from "../styled/StyledHero";
export const Home = () => {
  return (
    <>
      <ColumnWrapper>
        <StyledHero></StyledHero>
        <StyledSection>
          <h1>Välkommen till Restaurangen!</h1>
          <Link to={"/booking"}>
            <NormalButton>Gå till bokningar</NormalButton>
          </Link>
        </StyledSection>
      </ColumnWrapper>
    </>
  );
};
