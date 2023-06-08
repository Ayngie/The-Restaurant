import { useState } from "react";
import { NumberOfGuests } from "./NumberOfGuests";
import { ShowCalendar } from "./ShowCalendar";
import { CalendarWrapper, RowWrapper } from "../styled/Wrappers";
import Dropdown, { Group, Option } from "react-dropdown";
import "react-dropdown/style.css";
import { NormalButton } from "../styled/StyledButtons";
import { getBookingsByDate } from "../../services/bookingService";
import { checkBookedTables } from "../../helpers/checkBookedTables";
import { checkAvailableTables } from "../../helpers/checkAvailableTables";

interface ISendBookingProps {
  sendDate(booking: object): void;
}

export const SearchUnbookedTimes = ({ sendDate }: ISendBookingProps) => {
  const [bookingInfo, setBookingInfo] = useState({
    numberOfGuests: 0,
    date: "",
    time: "",
  });

  const [restarantIsFullyBooked, setRestarantIsFullyBooked] =
    useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);

  const getNumberOfGuests = (value: number) => {
    setBookingInfo({ ...bookingInfo, numberOfGuests: value });
  };

  const getDate = (value: string) => {
    setBookingInfo({ ...bookingInfo, date: value });
  };

  const options = ["18:00", "21:00"];
  const defaultOption = options[0];

  const handleChange = (option: Option) => {
    setBookingInfo({ ...bookingInfo, time: option.value });
  };

  const handleSearch = async () => {
    let response = await getBookingsByDate(bookingInfo.date);
    let bookedTables = checkBookedTables(
      response,
      bookingInfo.numberOfGuests,
      bookingInfo.time
    );

    //om bookedTables == 15 -> säg att är fullt...
    if (bookedTables == 15) {
      setRestarantIsFullyBooked(true);
    }
    //annars - kolla antal bord som ska bokas
    let doWeHaveABooking = checkAvailableTables(
      bookingInfo.numberOfGuests,
      bookedTables
    );
    if (!doWeHaveABooking) {
      setRestarantIsFullyBooked(true);
    }
    if (doWeHaveABooking) {
      sendDate(bookingInfo);
    }
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
      {restarantIsFullyBooked && (
        <p>Det är tyvärr fullt kl {bookingInfo.time}. Prova igen!</p>
      )}
    </>
  );
};
