import { useContext, useReducer, useState } from "react";
import { ShowCalendar } from "../createNewBooking/ShowCalendar";
import { NormalButton } from "../styled/StyledButtons";
import { AdminDispatchContext } from "../../contexts/AdminDispatchContext";
import { ActionType } from "../../reducers/AdminReducer";
import { getBookingsByDate } from "../../services/adminService";

export const SearchBookedTimes = () => {
  const dispatch = useContext(AdminDispatchContext);
  const [clickedDate, setClickedDate] = useState("");

  const getBookingsForDate = async (date: string) => {
    const bookingsFromAPI = await getBookingsByDate(date);
    const bookings = JSON.stringify(bookingsFromAPI);
    dispatch({ type: ActionType.GETBOOKINGSBYDATE, payload: bookings });
  };

  return (
    <>
      <ShowCalendar getDate={getBookingsForDate}></ShowCalendar>
    </>
  );
};
