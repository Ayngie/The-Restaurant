import { useState } from "react";
import { ShowCalendar } from "../createNewBooking/ShowCalendar";
import { FindBooking } from "../showSingleBooking/FindBooking";
import { ColumnWrapper, RowWrapper } from "../styled/Wrappers";
import { SearchBookedTimes } from "./SearchBookedTimes";

export const AdminSearchBooking = () => {
  const [date, setDate] = useState("");

  const searchForBooking = (id: string) => {
    console.log(id);
  };
  const getDate = (gotDate: string) => {
    console.log(gotDate);
  };

  return (
    <>
      <RowWrapper>
        <ColumnWrapper>
          <FindBooking searchBooking={searchForBooking}></FindBooking>
        </ColumnWrapper>
        <ColumnWrapper>
          <h3>Sök på ett datum</h3>
          {/* SearchBookedTimes ist för showCalendar */}
          <SearchBookedTimes></SearchBookedTimes>
        </ColumnWrapper>
      </RowWrapper>
    </>
  );
};
