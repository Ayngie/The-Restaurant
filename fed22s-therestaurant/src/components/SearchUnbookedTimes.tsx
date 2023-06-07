import { useState } from "react";
import { NumberOfGuests } from "./NumberOfGuests";
import { ShowCalendar } from "./ShowCalendar";
import { CalendarWrapper, ColumnWrapper } from "./styled/Wrappers";

export const SearchUnbookedTimes = () => {
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const getNumberOfGuests = (value: string) => {
    setNumberOfGuests(value);
  };
  console.log(numberOfGuests);

  const [clickedDate, setClickedDate] = useState("");
  const getDate = (value: string) => {
    setClickedDate(value);
  };
  console.log(clickedDate);
  return (
    <>
      <ColumnWrapper>
        <CalendarWrapper>
          <ShowCalendar getDate={getDate}></ShowCalendar>
        </CalendarWrapper>
        <NumberOfGuests getNumberOfGuests={getNumberOfGuests}></NumberOfGuests>
      </ColumnWrapper>
    </>
  );
};
