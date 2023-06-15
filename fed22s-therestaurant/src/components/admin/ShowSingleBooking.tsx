import { useContext, useState } from "react";
import { AdminDispatchContext } from "../../contexts/AdminDispatchContext";
import { NormalButton, WarningButton } from "../styled/StyledButtons";
import {
  ColumnWrapper,
  RowWrapper,
  SingleBookingWrapper,
} from "../styled/Wrappers";
import { IBooking } from "../../models/IBooking";
import { ActionType } from "../../reducers/AdminReducer";
import { Link } from "react-router-dom";

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
  const [showButtons, setShowButtons] = useState(true);

  const updateBooking = () => {
    showUpdateForm(true);
  };
  const deleteBooking = () => {
    dispatch({
      type: ActionType.REMOVEBOOKING,
      payload: singleBooking._id || "",
    });
    bookingDeleted(true);
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

          <Link to={"/admin"}>
            <WarningButton type="button">Tillbaka</WarningButton>
          </Link>
        </RowWrapper>
      </ColumnWrapper>
    </>
  );
};
