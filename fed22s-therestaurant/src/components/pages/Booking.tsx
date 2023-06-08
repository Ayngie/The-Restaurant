import { useState } from "react";
import { ChooseBooking } from "../ChooseBooking";
import { CompleteBooking } from "../createNewBooking/CompleteBooking";
import { ColumnWrapper } from "../styled/Wrappers";
import { SearchUnbookedTimes } from "../createNewBooking/SearchUnbookedTimes";
import { IBooking, defaultBooking } from "../../models/IBooking";
import { IGuest } from "../../models/IGuest";
import { createBooking } from "../../services/bookingService";
import { NormalButton } from "../styled/StyledButtons";

export const Booking = () => {
  const [booking, setBooking] = useState<IBooking>(defaultBooking);
  const [timeToFillOutForm, SetTimeToFillOutForm] = useState(true);
  const [clickedNewBooking, setClickedNewBooking] = useState(false);
  const createNewBooking = (showForm: boolean) => {
    setClickedNewBooking(showForm);
  };
  const dateForBooking = (details: IBooking) => {
    console.log("details to send: ", details);
    setBooking({
      ...booking,
      numberOfGuests: details.numberOfGuests,
      date: details.date,
      time: details.time,
    });
  };
  const guestForDate = (guest: IGuest) => {
    setBooking({
      ...booking,
      guest: {
        ...booking.guest,
        name: guest.name,
        email: guest.email,
        phoneNumber: guest.phoneNumber,
      },
    });
  };

  const postBooking = async () => {
    await createBooking(booking);
  };

  return (
    <>
      <ColumnWrapper>
        <ChooseBooking createNewBooking={createNewBooking}></ChooseBooking>
        {clickedNewBooking && (
          <SearchUnbookedTimes sendDate={dateForBooking}></SearchUnbookedTimes>
        )}
        {timeToFillOutForm && (
          <>
            <CompleteBooking sendBooking={guestForDate}></CompleteBooking>
            <NormalButton onClick={postBooking}>Boka</NormalButton>
          </>
        )}
      </ColumnWrapper>
    </>
  );
};
