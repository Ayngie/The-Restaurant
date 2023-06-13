import { useContext, useState } from "react";
import { FindBooking } from "../showSingleBooking/FindBooking";
import { ColumnWrapper, RowWrapper } from "../styled/Wrappers";
import { SearchBookedTimes } from "./SearchBookedTimes";
import { AdminDispatchContext } from "../../contexts/AdminDispatchContext";
import { ActionType } from "../../reducers/AdminReducer";
import { adminGetBookingById } from "../../services/adminService";

export const SearchBooking = () => {
  const dispatch = useContext(AdminDispatchContext);

  const searchForBooking = async (id: string) => {
    const bookingFromApi = await adminGetBookingById(id);
    const booking = JSON.stringify(bookingFromApi);
    console.log(bookingFromApi);
    dispatch({ type: ActionType.GETBOOKINGBYIDWITHAPI, payload: booking });
    console.log(id);
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
