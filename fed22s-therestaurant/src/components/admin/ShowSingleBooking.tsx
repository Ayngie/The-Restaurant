import { useContext } from "react";
import { AdminDispatchContext } from "../../contexts/AdminDispatchContext";
import { NormalButton, WarningButton } from "../styled/StyledButtons";
import {
  ColumnWrapper,
  RowWrapper,
  SingleBookingWrapper,
} from "../styled/Wrappers";
import { IBooking } from "../../models/IBooking";
import { ActionType } from "../../reducers/AdminReducer";

interface IShowSingleBooking {
  singleBooking: IBooking;
  showUpdateForm(show: boolean): void;
  bookingDeleted(show: boolean): void;
}

export const ShowSingleBooking = ({
  singleBooking,
  showUpdateForm,
  bookingDeleted,
}: IShowSingleBooking) => {
  const dispatch = useContext(AdminDispatchContext);

  const updateBooking = () => {
    showUpdateForm(true);
    console.log("Update");
  };
  //delete booking
  const deleteBooking = () => {
    dispatch({
      type: ActionType.REMOVEBOOKING,
      payload: singleBooking._id || "",
    });
    bookingDeleted(true);
    console.log("Delete");
  };

  //Avbryt
  const handleCancel = () => {
    //skapa lifting state up till admin som döljer AdminHandleBooking komponenten?
    //Eller bara re-directa url:en till /admin ??
    console.log("Avbryt");
  };

  return (
    <>
      <ColumnWrapper>
        <ColumnWrapper>
          <SingleBookingWrapper>
            <h3> Bokning för: {singleBooking.guest.name}</h3>
            <p>Datum: {singleBooking.date.substring(0, 10)}</p>
            <p>Tid: {singleBooking.time}</p>
            <p>Antal gäster: {singleBooking.numberOfGuests}</p>
            <p>Epost: {singleBooking.guest.email}</p>
            <p>Tel: {singleBooking.guest.phoneNumber}</p>
            <p>Bokningsid: {singleBooking._id}</p>
          </SingleBookingWrapper>
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
