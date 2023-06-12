import { useContext } from "react";
import { AdminDispatchContext } from "../../contexts/AdminDispatchContext";
import { NormalButton, WarningButton } from "../styled/StyledButtons";
import { ColumnWrapper, RowWrapper } from "../styled/Wrappers";
import { IBooking } from "../../models/IBooking";
// import { ActionType } from "../../reducers/AdminReducer";

interface IShowSingleBooking {
  singleBooking?: IBooking;
  showUpdateForm(show: boolean): void;
}

export const ShowSingleBooking = ({
  singleBooking,
  showUpdateForm,
}: IShowSingleBooking) => {
  const dispatch = useContext(AdminDispatchContext);

  const updateBooking = () => {
    showUpdateForm(true);
    console.log("Update");
  };
  //delete booking
  const deleteBooking = () => {
    // dispatch({ type: ActionType.REMOVEBOOKING, payload: singleBooking._id });
    console.log("Delete");
  };

  //Avbryt
  const handleCancel = () => {
    //skapa lifting state up till admin som döljer AdminHandleBooking komponenten?
    console.log("Avbryt");
  };

  return (
    <>
      <ColumnWrapper>
        <ColumnWrapper>
          <div>
            <h3> Bokning:</h3>
            <p>Namn: {singleBooking?.guest.name}</p>
            <p>Epost: {singleBooking?.guest.email}</p>
            <p>Tel: {singleBooking?.guest.phoneNumber}</p>
            <p>Datum: {singleBooking?.date}</p>
            <p>Tid: {singleBooking?.time}</p>
            <p>Antal gäster: {singleBooking?.numberOfGuests}</p>
            <p>Bokningsid: {singleBooking?._id}</p>
          </div>
        </ColumnWrapper>
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
