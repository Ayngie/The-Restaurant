import { Link } from "react-router-dom";
import {
  ColumnWrapper,
  ImageWrapper,
  RowWrapperStatic,
  StyledImg,
} from "../styled/Wrappers";
import { useEffect } from "react";
import {
  StyledLink,
  StyledPageHeader,
  StyledParagraph,
  StyledParagraphNarrow,
} from "../styled/TextStyles";
import { StyledSection } from "../styled/StyledSection";

export const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <StyledSection>
      <ColumnWrapper>
        <StyledPageHeader>Kontakta Restaurangen</StyledPageHeader>
        <StyledParagraphNarrow>
          Om du som kund önskar kontakta vår restaurang för att boka bord för
          större sällskap eller informera oss om eventuella allergier, är du
          varmt välkommen att ringa eller mejla oss. Vi ser fram emot att höra
          från dig och vara en del av din gastronomiska resa
        </StyledParagraphNarrow>
        <RowWrapperStatic>
          <h4>Telefon: </h4>
          <StyledLink to="tel:070123456">070123456</StyledLink>
        </RowWrapperStatic>
        <RowWrapperStatic>
          <h4>Epost: </h4>
          <StyledLink to="mailto:info@restaurangen.se">
            info@restaurangen.se
          </StyledLink>
        </RowWrapperStatic>
        <ImageWrapper>
          <StyledImg
            src="https://images.pexels.com/photos/1038628/pexels-photo-1038628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="View from above of phone, computer, earpods and a cup of tea."
          />
        </ImageWrapper>
      </ColumnWrapper>
    </StyledSection>
  );
};
