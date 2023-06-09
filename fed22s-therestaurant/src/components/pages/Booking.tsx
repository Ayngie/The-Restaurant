import { useEffect, useState } from "react";
import { ChooseBooking } from "../ChooseBooking";
import { CompleteBooking } from "../createNewBooking/CompleteBooking";
import { ColumnWrapper, RowWrapper } from "../styled/Wrappers";
import { SearchUnbookedTimes } from "../createNewBooking/SearchUnbookedTimes";
import { IBooking, defaultBooking } from "../../models/IBooking";
import { IGuest } from "../../models/IGuest";
import { createBooking } from "../../services/bookingService";
import { NormalButton, WarningButton } from "../styled/StyledButtons";
import { Loader } from "../styled/Loader";
import { HandleBooking } from "../showSingleBooking/HandleBooking";

export const Booking = () => {
  const [booking, setBooking] = useState<IBooking>(defaultBooking);
  const [timeToFillOutForm, SetTimeToFillOutForm] = useState(false);
  const [clickedNewBooking, setClickedNewBooking] = useState(false);
  const [clickedHandleBooking, setClickedHandleBooking] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const createNewBooking = (showForm: boolean) => {
    setClickedNewBooking(showForm);
    setClickedHandleBooking(false);
  };

  const handleBooking = (showSearchField: boolean) => {
    setClickedHandleBooking(showSearchField);
    setClickedNewBooking(false);
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
    console.log("guest to send: ", guest);
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
  const postBooking = async (): Promise<void> => {
    console.log(booking);
    try {
      await createBooking(booking);
      setBookingSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // här kan vi göra något efter bokningen är gjord.
  }, []);

  return (
    <>
      <ColumnWrapper>
        <ChooseBooking
          createNewBooking={createNewBooking}
          handleBooking={handleBooking}></ChooseBooking>
        {clickedHandleBooking && <HandleBooking></HandleBooking>}
        {clickedNewBooking && (
          <SearchUnbookedTimes
            sendDate={dateForBooking}
            showForm={SetTimeToFillOutForm}
            showLoader={setShowLoader}></SearchUnbookedTimes>
        )}
        {showLoader && <Loader></Loader>}
        {timeToFillOutForm && (
          <>
            <CompleteBooking
              sendBooking={guestForDate}
              postBooking={postBooking}></CompleteBooking>
          </>
        )}
      </ColumnWrapper>
    </>
  );
};
