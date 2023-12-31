import { useContext, useEffect, useState } from "react";
import { FindBooking } from "../handleSingleBooking/FindBooking";
import { ColumnWrapper, RowWrapper } from "../styled/Wrappers";
import { SearchBookedTimes } from "./SearchBookedTimes";
import { AdminDispatchContext } from "../../contexts/AdminDispatchContext";
import { ActionType } from "../../reducers/AdminReducer";
import { adminGetBookingById } from "../../services/adminService";

export const SearchBooking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useContext(AdminDispatchContext);

  const searchForBooking = async (id: string) => {
    const bookingFromApi = await adminGetBookingById(id);
    const booking = JSON.stringify(bookingFromApi);
    dispatch({ type: ActionType.GETBOOKINGBYIDWITHAPI, payload: booking });
  };

  return (
    <>
      <RowWrapper>
        <ColumnWrapper>
          <FindBooking searchBooking={searchForBooking}></FindBooking>
        </ColumnWrapper>
        <ColumnWrapper>
          <h3>Sök på ett datum</h3>
          <SearchBookedTimes></SearchBookedTimes>
        </ColumnWrapper>
      </RowWrapper>
    </>
  );
};
