import { ChooseBooking } from "../ChooseBooking";
import { CompleteBooking } from "../CompleteBooking";
import { ColumnWrapper } from "../styled/Wrappers";

export const Booking = () => {
  const timeToFillOutForm: boolean = true; //satt på true nu för att kunna visa komponent tills vidare...

  return (
    <>
      <ColumnWrapper>
        <ChooseBooking></ChooseBooking>
        {timeToFillOutForm && <CompleteBooking></CompleteBooking>}
      </ColumnWrapper>
    </>
  );
};
