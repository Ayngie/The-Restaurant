import { Link } from "react-router-dom";
import {
  ColumnWrapper,
  ImageWrapper,
  RowWrapperStatic,
  StyledImg,
} from "../styled/Wrappers";
import { useEffect } from "react";
import { StyledLink, StyledLinkText } from "../styled/TextStyles";

export const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ColumnWrapper>
        <h2>Kontakta Restaurangen</h2>
        <RowWrapperStatic>
          <h4>Telefon: </h4>
          <StyledLink to="tel:+4670123456">+4670123456</StyledLink>
        </RowWrapperStatic>
        <RowWrapperStatic>
          <h4>Epost: </h4>
          <StyledLink to="mailto:info@MI.restaurangen.se">
            info@MI.restaurangen.se
          </StyledLink>
        </RowWrapperStatic>
        <ImageWrapper>
          <StyledImg
            src="https://images.pexels.com/photos/1038628/pexels-photo-1038628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="View from above of phone, computer, earpods and a cup of tea."
          />
        </ImageWrapper>
      </ColumnWrapper>
    </>
  );
};
