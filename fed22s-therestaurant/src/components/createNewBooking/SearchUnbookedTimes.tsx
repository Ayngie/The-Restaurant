import { useState } from "react";
import { NumberOfGuests } from "./NumberOfGuests";
import { ShowCalendar } from "./ShowCalendar";
import { CalendarWrapper, RowWrapper } from "../styled/Wrappers";
import Dropdown, { Group, Option } from "react-dropdown";
import "react-dropdown/style.css";
import { NormalButton } from "../styled/StyledButtons";
import { getBookingsByDate } from "../../services/bookingService";

export const SearchUnbookedTimes = () => {
  const [bookingInfo, setBookingInfo] = useState({
    guests: 0,
    date: "",
    time: "",
  });

  const getNumberOfGuests = (value: number) => {
    setBookingInfo({ ...bookingInfo, guests: value });
  };

  const getDate = (value: string) => {
    setBookingInfo({ ...bookingInfo, date: value });
  };

  const options = ["18:00", "22:00"];
  const defaultOption = options[0];

  const handleChange = (option: Option) => {
    setBookingInfo({ ...bookingInfo, time: option.value });
  };

  const handleSearch = async () => {
    let response = await getBookingsByDate(bookingInfo.date);
    console.log(response);
  };

  return (
    <>
      <RowWrapper>
        <CalendarWrapper>
          <ShowCalendar getDate={getDate}></ShowCalendar>
        </CalendarWrapper>

        <NumberOfGuests getNumberOfGuests={getNumberOfGuests}></NumberOfGuests>
        <label>Sittning:</label>
        <Dropdown
          onChange={handleChange}
          options={options}
          value={"Välj tid"}
          placeholder="Välj tid"
        />
      </RowWrapper>
      <NormalButton onClick={handleSearch}>Sök</NormalButton>
    </>
  );
};
