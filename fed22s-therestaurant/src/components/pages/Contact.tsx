import { Link } from "react-router-dom";
import {
  ColumnWrapper,
  ImageWrapper,
  RowWrapperStatic,
  StyledImg,
} from "../styled/Wrappers";
import { useEffect } from "react";

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
          <Link to="tel:+4670123456">+4670123456</Link>
        </RowWrapperStatic>
        <RowWrapperStatic>
          <h4>Epost: </h4>
          <Link to="mailto:info@MI.restaurangen.se">
            info@MI.restaurangen.se
          </Link>
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
