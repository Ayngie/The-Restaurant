import { useState } from "react";
import { ChooseBooking } from "../ChooseBooking";
import { CompleteBooking } from "../CompleteBooking";
import { FindBooking } from "../FindBooking";
import { ShowCalendar } from "../ShowCalendar";
import { CalendarWrapper, ColumnWrapper } from "../styled/Wrappers";
import { NumberOfGuests } from "../NumberOfGuests";
import { SearchUnbookedTimes } from "../SearchUnbookedTimes";

export const Booking = () => {
  const timeToFillOutForm: boolean = true; //satt på true nu för att kunna visa komponent tills vidare...
  // Päronet
  // härifrån kör vi lifting state upp till alla syskon.
  const [clickedNewBooking, setClickedNewBooking] = useState(false);
  const createNewBooking = (value: boolean) => {
    setClickedNewBooking(value);
  };

  return (
    <>
      <ColumnWrapper>
        <ChooseBooking createNewBooking={createNewBooking}></ChooseBooking>
        {clickedNewBooking && <SearchUnbookedTimes></SearchUnbookedTimes>}
        {timeToFillOutForm && <CompleteBooking></CompleteBooking>}
      </ColumnWrapper>
    </>
  );
};
