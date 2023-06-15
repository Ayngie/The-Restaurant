import { useContext, useEffect } from "react";
import { AdminContext } from "../../contexts/AdminContext";
import { Link } from "react-router-dom";
import { NormalButton } from "../styled/StyledButtons";
import { StyledTable } from "../styled/table/StyledTable";
import { StyledTHead } from "../styled/table/StyledTHead";
import { StyledTR } from "../styled/table/StyledTR";
import { StyledTH } from "../styled/table/StyledTH";
import { StyledTD } from "../styled/table/StyledTD";
import { StyledTBody } from "../styled/table/StyledTBody";
import { StyledTableButton } from "../styled/table/StyledTableButton";

export const ShowBookedTimes = () => {
  const bookings = useContext(AdminContext);

  const html = (
    <>
      {bookings.length >= 1 ? (
        <StyledTable>
          <StyledTHead>
            <StyledTR>
              <StyledTH>Namn</StyledTH>
              <StyledTH>Antal</StyledTH>
              <StyledTH>Datum</StyledTH>
              <StyledTH>Tid</StyledTH>
              <StyledTH>Välj</StyledTH>
            </StyledTR>
          </StyledTHead>
          <StyledTBody>
            {bookings.map((b, index) => (
              <StyledTR key={b._id}>
                <StyledTD>{b.guest.name}</StyledTD>
                <StyledTD>{b.numberOfGuests}</StyledTD>
                <StyledTD>{b.date.substring(5, 10)}</StyledTD>
                <StyledTD>{b.time}</StyledTD>
                <StyledTD>
                  <Link to={"" + b._id}>
                    <StyledTableButton>Hantera</StyledTableButton>
                  </Link>
                </StyledTD>
              </StyledTR>
            ))}
          </StyledTBody>
        </StyledTable>
      ) : (
        <p>Det finns inga bokningar den här dagen</p>
      )}
    </>
  );

  return <>{html}</>;
};
