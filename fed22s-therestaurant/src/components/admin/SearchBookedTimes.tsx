import { useContext, useReducer, useState } from "react";
import { ShowCalendar } from "../createNewBooking/ShowCalendar";
import { NormalButton } from "../styled/StyledButtons";
import { AdminDispatchContext } from "../../contexts/AdminDispatchContext";
import { ActionType } from "../../reducers/AdminReducer";

export const SearchBookedTimes = () => {
  const dispatch = useContext(AdminDispatchContext);
  const [clickedDate, setClickedDate] = useState("");

  const getDate = async (date: string) => {
    await setClickedDate(date);
    // console.log(date);
    // dispatch({ type: ActionType.GETBOOKINGSBYDATE, payload: date });
  };

  const handleClick = () => {};
  //       <NormalButton onClick={handleClick}></NormalButton>

  return (
    <>
      <ShowCalendar getDate={getDate}></ShowCalendar>
    </>
  );
};
