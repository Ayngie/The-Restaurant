import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { IGuest, defaultGuest } from "../models/IGuest";
import { ColumnWrapper, RowWrapper } from "./styled/Wrappers";
import { NormalButton, WarningButton } from "./styled/StyledButtons";
import { createBooking } from "../services/bookingService";
import { IBooking, defaultBooking } from "../models/IBooking";

interface ICompleteBookingProps {
  numberOfGuests?: number;
}

export const CompleteBooking = () => {
  const [guest, setGuest] = useState<IGuest>(defaultGuest);
  const [booking, setBooking] = useState<IBooking>(defaultBooking);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;

    if (e.target.type === "text") {
      setGuest({ ...guest, [name]: e.target.value });
      setBooking({
        ...booking,
        guest: { ...booking.guest, [name]: e.target.value },
      });
    }
    if (e.target.type === "email") {
      setGuest({ ...guest, [name]: e.target.value });
      setBooking({
        ...booking,
        guest: { ...booking.guest, [name]: e.target.value },
      });
    }
    if (e.target.type === "tel") {
      setGuest({ ...guest, [name]: e.target.value });
      setBooking({
        ...booking,
        guest: { ...booking.guest, [name]: e.target.value },
      });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log("Booking:", booking);

    setGuest(defaultGuest);
  };

  useEffect(() => {
    //Anropa createBooking och skicka med newGuest
    createBooking(booking);
  }, [booking]);

  return (
    <>
      <h3>Vänligen fyll i dina kontaktuppgifter:</h3>
      <form onSubmit={handleSubmit}>
        <ColumnWrapper>
          <input
            type="text"
            value={guest.name}
            onChange={handleChange}
            name="name"
            placeholder="Namn (för- och efternamn):"
          />
          <input
            type="email"
            value={guest.email}
            onChange={handleChange}
            name="email"
            placeholder="E-post:"
          />
          <input
            type="tel"
            value={guest.phoneNumber}
            onChange={handleChange}
            name="phoneNumber"
            placeholder="Telefonnummer:"
          />
          <RowWrapper>
            <NormalButton>Spara</NormalButton>
            <WarningButton>Avbryt</WarningButton>
          </RowWrapper>
        </ColumnWrapper>

        <p>{JSON.stringify(booking)}</p>
      </form>
    </>
  );
};
