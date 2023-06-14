import { Link } from "react-router-dom";
import { NormalButton } from "../styled/StyledButtons";
import { StyledSection } from "../styled/StyledSection";
import { ColumnWrapper, RowWrapper } from "../styled/Wrappers";
import { StyledHero } from "../styled/StyledHero";
import {
  StyledFirstWord,
  StyledH1,
  StyledParagraphDesktop,
  StyledParagraphMobile,
} from "../styled/TextStyles";
export const Home = () => {
  return (
    <>
      <ColumnWrapper>
        <StyledHero>
          <StyledH1>Välkommen till Restaurangen!</StyledH1>
          <StyledParagraphDesktop>
            Välkommen till vår avslappnade och lyxiga restaurang, där fräsch mat
            och glädje står i fokus. Vi erbjuder en unik smakupplevelse som
            kombinerar högkvalitativa råvaror med en festlig atmosfär. Låt vårt
            kunniga köksteam ta dig med på en kulinarisk resa fylld av
            överraskningar. Oavsett om det är en romantisk middag eller en
            avkopplande lunch, är vår restaurang det perfekta valet. Ge dig
            själv förmånen att njuta av lyxen i en avslappnad miljö.
          </StyledParagraphDesktop>
          <StyledParagraphDesktop>
            Välkommen att boka bord hos oss!
          </StyledParagraphDesktop>
        </StyledHero>
        <StyledSection>
          <StyledParagraphMobile>
            <StyledFirstWord>Välkommen </StyledFirstWord>
            till vår avslappnade och lyxiga restaurang, där fräsch mat och
            glädje står i fokus. Vi erbjuder en unik smakupplevelse som
            kombinerar högkvalitativa råvaror med en festlig atmosfär.
          </StyledParagraphMobile>
          <StyledParagraphMobile>
            Låt vårt kunniga köksteam ta dig med på en kulinarisk resa fylld av
            överraskningar. Oavsett om det är en romantisk middag eller en
            avkopplande lunch, är vår restaurang det perfekta valet. Ge dig
            själv förmånen att njuta av lyxen i en avslappnad miljö.
          </StyledParagraphMobile>
          <StyledParagraphMobile>
            Välkommen att boka bord hos oss!
          </StyledParagraphMobile>
          <RowWrapper>
            <Link to={"/booking"}>
              <NormalButton>Gå till bokningar</NormalButton>
            </Link>
            <Link to={"/menu"}>
              <NormalButton>Visa meny</NormalButton>
            </Link>
          </RowWrapper>
        </StyledSection>
      </ColumnWrapper>
    </>
  );
};
