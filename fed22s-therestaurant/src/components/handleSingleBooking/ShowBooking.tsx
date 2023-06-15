import { IBooking } from "../../models/IBooking";
import { NormalButton, WarningButton } from "../styled/StyledButtons";
import { RowWrapper, SingleBookingWrapper } from "../styled/Wrappers";

interface IBookingProps {
  booking: IBooking;
  removeBookingById(idToSearch?: string): void;
  cancelSearch(): void;
}

export const ShowBooking = ({
  booking,
  removeBookingById,
  cancelSearch,
}: IBookingProps) => {
  const htmlForBooking = (
    <SingleBookingWrapper>
      <h3>Du har en bokning i namnet</h3>
      <h4>{booking.guest.name}</h4>
      <p>Antal Gäster: {booking.numberOfGuests}</p>
      <p>Datum: {booking.date}</p>
      <p>Tid: {booking.time}</p>
      <h4>Vad vill du göra?</h4>
      <RowWrapper>
        <NormalButton onClick={() => removeBookingById(booking._id)}>
          Ta bort bokning
        </NormalButton>
        <WarningButton onClick={cancelSearch}>Avbryt</WarningButton>
      </RowWrapper>
    </SingleBookingWrapper>
  );
  return <>{htmlForBooking}</>;
};
