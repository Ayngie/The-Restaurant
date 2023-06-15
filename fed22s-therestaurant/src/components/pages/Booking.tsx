import { useEffect, useState } from "react";
import { ChooseBooking } from "../ChooseBooking";
import { CompleteBooking } from "../createNewBooking/CompleteBooking";
import { ColumnWrapper, RowWrapper } from "../styled/Wrappers";
import { SearchUnbookedTimes } from "../createNewBooking/SearchUnbookedTimes";
import { IBooking, defaultBooking } from "../../models/IBooking";
import { IGuest } from "../../models/IGuest";
import { createBooking } from "../../services/bookingService";
import { Loader } from "../styled/Loader";
import { HandleBooking } from "../showSingleBooking/HandleBooking";
import { StyledPageHeader } from "../styled/TextStyles";
import { StyledSection } from "../styled/StyledSection";

export const Booking = () => {
  const [booking, setBooking] = useState<IBooking>(defaultBooking);
  const [timeToFillOutForm, setTimeToFillOutForm] = useState(false);
  const [clickedNewBooking, setClickedNewBooking] = useState(false);
  const [clickedHandleBooking, setClickedHandleBooking] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [showOptions, setShowOptions] = useState(true);

  const cancelSearch = () => {
    setShowOptions(true);
    setClickedNewBooking(false);
    setClickedHandleBooking(false);
    setTimeToFillOutForm(false);
  };

  const createNewBooking = (showForm: boolean) => {
    setClickedNewBooking(showForm);
    setClickedHandleBooking(false);
    setShowOptions(false);
  };

  const handleBooking = (showSearchField: boolean) => {
    setClickedHandleBooking(showSearchField);
    setClickedNewBooking(false);
    setTimeToFillOutForm(false);
    setShowOptions(false);
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
    window.scrollTo(0, 0);

    // här kan vi göra något efter bokningen är gjord.
    if (bookingSubmitted) {
      setClickedNewBooking(false);

      setTimeToFillOutForm(false);
    }
  }, [bookingSubmitted]);

  return (
    <StyledSection>
      <ColumnWrapper>
        <StyledPageHeader>Boka</StyledPageHeader>

        {showOptions && (
          <ChooseBooking
            createNewBooking={createNewBooking}
            handleBooking={handleBooking}></ChooseBooking>
        )}

        {clickedHandleBooking && (
          <HandleBooking cancel={cancelSearch}></HandleBooking>
        )}

        {clickedNewBooking && !timeToFillOutForm && (
          <SearchUnbookedTimes
            sendDate={dateForBooking}
            showForm={setTimeToFillOutForm}
            showLoader={setShowLoader}
            goBackToShowOptions={setShowOptions}
            newBooking={setClickedNewBooking}></SearchUnbookedTimes>
        )}
        {showLoader && <Loader></Loader>}
        {timeToFillOutForm && (
          <>
            <div>
              <h3>Du vill boka för {booking.numberOfGuests} personer:</h3>
              <p>Datum: {booking.date}</p>
              <p>Tid: {booking.time}</p>
            </div>

            <CompleteBooking
              sendBooking={guestForDate}
              postBooking={postBooking}
              goBackToShowOptions={setShowOptions}
              showUnbookedTimes={setClickedNewBooking}
              timeToFillOutForm={setTimeToFillOutForm}></CompleteBooking>
          </>
        )}
        {bookingSubmitted && (
          <div>
            <div>
              <h3> Tack för din bokning {booking.guest.name}! </h3>
              <p>Antal gäster: {booking.numberOfGuests}</p>
              <p>Datum: {booking.date}</p>
              <p>Tid: {booking.time}</p>
            </div>
          </div>
        )}
      </ColumnWrapper>
    </StyledSection>
  );
};
