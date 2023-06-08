import { IBooking } from "../../models/IBooking";
import { NormalButton, WarningButton } from "../styled/StyledButtons";

interface IBookingProps {
  booking: IBooking;
  removeBookingById(idToSearch?: string): void;
}

export const ShowBooking = ({ booking, removeBookingById }: IBookingProps) => {
  const htmlForBooking = (
    <>
      <h3>Du har en bokning i namnet</h3>
      <h4>{booking.guest.name}</h4>
      <p>Antal Gäster: {booking.numberOfGuests}</p>
      <p>Datum: {booking.date}</p>
      <p>Tid: {booking.time}</p>
      <h4>Vad vill du göra?</h4>
      <NormalButton onClick={() => removeBookingById(booking._id)}>
        Ta bort bokning
      </NormalButton>
      <WarningButton>Avbryt</WarningButton>
    </>
  );
  return <>{htmlForBooking}</>;
};
