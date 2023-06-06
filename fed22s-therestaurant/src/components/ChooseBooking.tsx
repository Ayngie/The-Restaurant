import { useState } from "react";
import { ShowCalendar } from "./ShowCalendar";
import { NormalButton } from "./styled/StyledButtons";
import { CalendarWrapper, ColumnWrapper, RowWrapper } from "./styled/Wrappers";

export const ChooseBooking = () => {
  const [newBooking, setNewBooking] = useState(false);
  const showCalendar = () => {
    setNewBooking(true);
  };

  return (
    <>
      <ColumnWrapper>
        <RowWrapper>
          <NormalButton onClick={showCalendar}>Ny bokning</NormalButton>
          <NormalButton>Sök din bokning</NormalButton>
        </RowWrapper>
        <CalendarWrapper>
          {newBooking ? <ShowCalendar></ShowCalendar> : <></>}
        </CalendarWrapper>
      </ColumnWrapper>
    </>
  );
};
