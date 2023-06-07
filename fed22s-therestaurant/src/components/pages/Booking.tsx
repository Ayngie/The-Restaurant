import { useState } from "react";
import { ChooseBooking } from "../ChooseBooking";
import { CompleteBooking } from "../CompleteBooking";
import { ColumnWrapper } from "../styled/Wrappers";
import { SearchUnbookedTimes } from "../SearchUnbookedTimes";

export const Booking = () => {
  const timeToFillOutForm: boolean = true; //satt på true nu för att kunna visa komponent tills vidare...
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
