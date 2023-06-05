import { ChooseBooking } from "../ChooseBooking";
import { GuestInfoForm } from "../GuestInfoForm";
import { ColumnWrapper } from "../styled/Wrappers";

export const Booking = () => {
  const timeToFillOutForm: boolean = true; //satt på true nu för att kunna visa komponent tills vidare...

  return (
    <>
      <ColumnWrapper>
        <ChooseBooking></ChooseBooking>
        {timeToFillOutForm && <GuestInfoForm></GuestInfoForm>}
      </ColumnWrapper>
    </>
  );
};
