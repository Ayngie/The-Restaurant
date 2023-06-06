import { Link } from "react-router-dom";
import { ColumnWrapper, RowWrapper } from "../styled/Wrappers";

export const Contact = () => {
  return (
    <>
      <ColumnWrapper>
        <h2>Kontakta Restaurangen</h2>
        <RowWrapper>
          <h4>Telefon: </h4>
          <Link to="tel:+4670123456">+4670123456</Link>
        </RowWrapper>
        <RowWrapper>
          <h4>Epost: </h4>
          <Link to="mailto:info@MI.restaurangen.se">
            info@MI.restaurangen.se
          </Link>
        </RowWrapper>
      </ColumnWrapper>
    </>
  );
};
