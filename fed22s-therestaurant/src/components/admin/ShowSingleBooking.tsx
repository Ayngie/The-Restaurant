import { useContext } from "react";
import { NormalButton, WarningButton } from "../styled/StyledButtons";
import { ColumnWrapper, RowWrapper } from "../styled/Wrappers";
import { AdminContext } from "../../contexts/AdminContext";

export const ShowSingleBooking = () => {
  const bookings = useContext(AdminContext);

  //update booking
  const updateBooking = () => {
    console.log("Update");
  };
  //delete booking
  const deleteBooking = () => {
    console.log("Delete");
  };

  //Avbryt
  const handleCancel = () => {
    console.log("Avbryt");
  };

  return (
    <>
      <ColumnWrapper>
        <h3> Show single booking</h3>
        <RowWrapper>
          <NormalButton type="button" onClick={updateBooking}>
            Uppdatera bokning
          </NormalButton>
          <WarningButton type="button" onClick={deleteBooking}>
            Radera bokning
          </WarningButton>
          <WarningButton type="button" onClick={handleCancel}>
            Avbryt
          </WarningButton>
        </RowWrapper>
      </ColumnWrapper>
    </>
  );
};
