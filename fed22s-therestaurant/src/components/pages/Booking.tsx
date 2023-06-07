import { useState } from "react";
import { ChooseBooking } from "../ChooseBooking";
import { CompleteBooking } from "../CompleteBooking";
import { FindBooking } from "../FindBooking";
import { ShowCalendar } from "../ShowCalendar";
import { CalendarWrapper, ColumnWrapper } from "../styled/Wrappers";
import { NumberOfGuests } from "../NumberOfGuests";

export const Booking = () => {
  const timeToFillOutForm: boolean = true; //satt på true nu för att kunna visa komponent tills vidare...
  const [clickedNewBooking, setClickedNewBooking] = useState(false);
  const createNewBooking = (value: boolean) => {
    setClickedNewBooking(value);
  };

  const [numberOfGuests, setNumberOfGuests] = useState("");
  const getNumberOfGuests = (value: string) => {
    setNumberOfGuests(value);
    console.log(value);
  };

  return (
    <>
      <ColumnWrapper>
        <ChooseBooking createNewBooking={createNewBooking}></ChooseBooking>
        <CalendarWrapper>
          {clickedNewBooking && <ShowCalendar></ShowCalendar>}
        </CalendarWrapper>
        {clickedNewBooking && (
          <NumberOfGuests
            getNumberOfGuests={getNumberOfGuests}
          ></NumberOfGuests>
        )}
        {timeToFillOutForm && <CompleteBooking></CompleteBooking>}
      </ColumnWrapper>
    </>
  );
};
