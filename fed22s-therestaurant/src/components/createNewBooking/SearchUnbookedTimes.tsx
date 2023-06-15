import { useState } from "react";
import { NumberOfGuests } from "./NumberOfGuests";
import { ShowCalendar } from "./ShowCalendar";
import { CalendarWrapper, ColumnWrapper, RowWrapper } from "../styled/Wrappers";
import "react-dropdown/style.css";
import { NormalButton, WarningButton } from "../styled/StyledButtons";
import { getBookingsByDate } from "../../services/bookingService";
import { checkBookedTables } from "../../helpers/checkBookedTables";
import { checkAvailableTables } from "../../helpers/checkAvailableTables";
import { ChooseTime } from "./ChooseTime";

interface ISendBookingProps {
  sendDate(booking: object): void;
  showForm(show: boolean): void;
  showLoader(show: boolean): void;
  goBackToShowOptions(show: boolean): void;
  newBooking(show: boolean): void;
}

export const SearchUnbookedTimes = ({
  sendDate,
  showForm,
  showLoader,
  goBackToShowOptions,
  newBooking,
}: ISendBookingProps) => {
  const [bookingInfo, setBookingInfo] = useState({
    numberOfGuests: 0,
    date: "",
    time: "",
  });

  const [IsFullyBookedAtSix, setIsFullyBookedAtSix] = useState<boolean>(false);
  const [IsFullyBookedAtNine, setIsFullyBookedAtNine] =
    useState<boolean>(false);
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
      setIsFullyBookedAtSix(false);
      let response = await getBookingsByDate(bookingInfo.date);
      let bookedTables = checkBookedTables(response);

      //om bookedTables == 15 -> säg att är fullt...
      if (bookedTables.tablesAtSix == 15) {
        setIsFullyBookedAtSix(true);
      }
      if (bookedTables.tablesAtNine == 15) {
        setIsFullyBookedAtNine(true);
      }

      //annars - kolla antal bord som ska bokas
      let doWeHaveABooking = checkAvailableTables(
        bookingInfo.numberOfGuests,
        bookedTables,
        bookingInfo.time
      );

      if (doWeHaveABooking === false) {
        setIsFullyBookedAtSix(true);
        showLoader(false);
        showForm(false);
      }
      if (doWeHaveABooking === true) {
        sendDate(bookingInfo);
        showLoader(false);
        showForm(true);
      }
    }
  };

  const handleCancel = () => {
    goBackToShowOptions(true);
    newBooking(false);
    console.log("Avbryt");
  };

  return (
    <>
      <RowWrapper>
        <CalendarWrapper>
          <ShowCalendar getDate={getDate}></ShowCalendar>
        </CalendarWrapper>
        <ColumnWrapper>
          <RowWrapper>
            <NumberOfGuests
              getNumberOfGuests={getNumberOfGuests}></NumberOfGuests>
            <ChooseTime getChoosenTime={getChoosenTime}></ChooseTime>
          </RowWrapper>
          {msg}
        </ColumnWrapper>
      </RowWrapper>
      <RowWrapper>
      <NormalButton onClick={handleSearch}>Sök</NormalButton>
      <RowWrapper>
        <NormalButton onClick={handleSearch}>Sök</NormalButton>
        <WarningButton type="button" onClick={handleCancel}>
          Avbryt
        </WarningButton>
      </RowWrapper>
      {IsFullyBookedAtSix && <p>Det är tyvärr fullt vid sex. Prova igen!</p>}
      {IsFullyBookedAtNine && <p>Det är tyvärr fullt vid nio. Prova igen!</p>}
    </>
  );
};
