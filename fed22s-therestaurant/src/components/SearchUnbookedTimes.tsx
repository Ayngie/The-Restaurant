import { useState } from "react";
import { NumberOfGuests } from "./NumberOfGuests";
import { ShowCalendar } from "./ShowCalendar";
import { CalendarWrapper, ColumnWrapper, RowWrapper } from "./styled/Wrappers";
import Dropdown, { Option } from "react-dropdown";
import "react-dropdown/style.css";

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

  const options = ["18:00", "22:00"];
  const defaultOption = options[0];

  const handleChange = (option: Option) => {
    console.log("handleChange", option.value);
  };

  return (
    <>
      <RowWrapper>
        <CalendarWrapper>
          <ShowCalendar getDate={getDate}></ShowCalendar>
        </CalendarWrapper>
        <ColumnWrapper>
          <Dropdown
            options={options}
            onChange={handleChange}
            value={defaultOption}
            placeholder="Välj tid"
          />
          <NumberOfGuests
            getNumberOfGuests={getNumberOfGuests}
          ></NumberOfGuests>
        </ColumnWrapper>
      </RowWrapper>
    </>
  );
};
