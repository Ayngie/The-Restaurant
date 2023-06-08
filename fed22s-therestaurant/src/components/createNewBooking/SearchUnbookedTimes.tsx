import { useState } from "react";
import { NumberOfGuests } from "./NumberOfGuests";
import { ShowCalendar } from "./ShowCalendar";
import { CalendarWrapper, RowWrapper } from "../styled/Wrappers";
import Dropdown, { Option } from "react-dropdown";
import "react-dropdown/style.css";
import { NormalButton } from "../styled/StyledButtons";
import { getBookingsByDate } from "../../services/bookingService";

export const SearchUnbookedTimes = () => {
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const getNumberOfGuests = (value: string) => {
    setNumberOfGuests(value);
  };

  const [clickedDate, setClickedDate] = useState("");
  const getDate = (value: string) => {
    setClickedDate(value);
  };

  const options = ["18:00", "22:00"];
  const defaultOption = options[0];

  const [bookingInfo, setBookingInfo] = useState({
    guests: "",
    date: "",
    time: "",
  });

  const [clickedTime, setClickedTime] = useState(defaultOption);
  const handleChange = (option: Option) => {
    setClickedTime(option.value);
  };
  console.log("setBookinginfo", bookingInfo);

  const handleSearch = () => {
    setBookingInfo({
      guests: numberOfGuests,
      date: clickedDate,
      time: clickedTime,
    });
    getBookingsByDate(bookingInfo.date);
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
          options={options}
          onChange={handleChange}
          value={defaultOption}
          placeholder="Välj tid"
        />
      </RowWrapper>
      <NormalButton onClick={handleSearch}>Sök</NormalButton>
    </>
  );
};
