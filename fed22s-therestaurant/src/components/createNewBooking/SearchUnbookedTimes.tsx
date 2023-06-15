import { useState } from "react";
import { NumberOfGuests } from "./NumberOfGuests";
import { ShowCalendar } from "./ShowCalendar";
import { CalendarWrapper, ColumnWrapper, RowWrapper } from "../styled/Wrappers";
import "react-dropdown/style.css";
import { NormalButton } from "../styled/StyledButtons";
import { getBookingsByDate } from "../../services/bookingService";
import { checkBookedTables } from "../../helpers/checkBookedTables";
import { checkAvailableTables } from "../../helpers/checkAvailableTables";
import { ChooseTime } from "./ChooseTime";
import { StyledDropdown } from "../styled/StyledDropdown";

interface ISendBookingProps {
  sendDate(booking: object): void;
  showForm(show: boolean): void;
  showLoader(show: boolean): void;
}

export const SearchUnbookedTimes = ({
  sendDate,
  showForm,
  showLoader,
}: ISendBookingProps) => {
  const [bookingInfo, setBookingInfo] = useState({
    numberOfGuests: 0,
    date: "",
    time: "",
  });

  const [restarantIsFullyBooked, setRestarantIsFullyBooked] =
    useState<boolean>(false);
  // const [showError, setShowError] = useState<boolean>(false);
  const [msg, setMsg] = useState("");

  const getNumberOfGuests = (value: number) => {
    console.log("NumberOfGuests", value);

    setBookingInfo({ ...bookingInfo, numberOfGuests: value });
  };

  const getDate = (value: string) => {
    setBookingInfo({ ...bookingInfo, date: value });
  };

  const getChoosenTime = (value: string) => {
    console.log("choosen time", value);

    setBookingInfo({ ...bookingInfo, time: value });
  };

  const handleSearch = async () => {
    console.log("bookingInfo", bookingInfo);

    if (
      bookingInfo.numberOfGuests == 0 ||
      bookingInfo.time == "" ||
      bookingInfo.date == ""
    ) {
      console.log("fyll i alla uppgifter");
      setMsg("Fyll i alla fält");
    } else {
      showLoader(true);
      showForm(false);
      setRestarantIsFullyBooked(false);
      let response = await getBookingsByDate(bookingInfo.date);
      let bookedTables = checkBookedTables(
        response,
        bookingInfo.numberOfGuests,
        bookingInfo.time
      );

      console.log("bookedTables", bookedTables);
      //om bookedTables == 15 -> säg att är fullt...
      if (bookedTables == 15) {
        setRestarantIsFullyBooked(true);
      }
      //annars - kolla antal bord som ska bokas
      let doWeHaveABooking = checkAvailableTables(
        bookingInfo.numberOfGuests,
        bookedTables
      );

      console.log("doWeHaveABooking", doWeHaveABooking);
      if (doWeHaveABooking === false) {
        console.log("false......");

        setRestarantIsFullyBooked(true);
        //inte visas
        showLoader(false);
        showForm(false);
      }
      if (doWeHaveABooking === true) {
        console.log("dkldkldjd");
        sendDate(bookingInfo);
        showLoader(false);
        //visa
        showForm(true);
      }
    }
  };

  return (
    <>
      <RowWrapper>
        <CalendarWrapper>
          <ShowCalendar getDate={getDate}></ShowCalendar>
        </CalendarWrapper>
        <ColumnWrapper>
          <StyledDropdown>
            <NumberOfGuests
              getNumberOfGuests={getNumberOfGuests}
            ></NumberOfGuests>
          </StyledDropdown>
          <StyledDropdown>
            <ChooseTime getChoosenTime={getChoosenTime}></ChooseTime>
          </StyledDropdown>
          {msg}
        </ColumnWrapper>
      </RowWrapper>
      <NormalButton onClick={handleSearch}>Sök</NormalButton>
      {restarantIsFullyBooked && (
        <p>Det är tyvärr fullt den tiden du valde. Prova igen!</p>
      )}
    </>
  );
};
