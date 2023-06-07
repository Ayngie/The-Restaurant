import { useState } from "react";
import { ChooseBooking } from "../ChooseBooking";
import { CompleteBooking } from "../CompleteBooking";
import { FindBooking } from "../FindBooking";
import { ShowCalendar } from "../ShowCalendar";
import { CalendarWrapper, ColumnWrapper } from "../styled/Wrappers";

export const Booking = () => {
  const timeToFillOutForm: boolean = true; //satt på true nu för att kunna visa komponent tills vidare...
  const [newBooking, setNewBooking] = useState(false);
  const createNewBooking = (value: boolean) => {
    setNewBooking(value);
  };

  return (
    <>
      <ColumnWrapper>
        <ChooseBooking createNewBooking={createNewBooking}></ChooseBooking>
        <CalendarWrapper>
          {newBooking && <ShowCalendar></ShowCalendar>}
        </CalendarWrapper>
        {newBooking && <FindBooking></FindBooking>}
        {timeToFillOutForm && <CompleteBooking></CompleteBooking>}
      </ColumnWrapper>
    </>
  );
};
