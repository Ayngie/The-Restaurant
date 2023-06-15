import { useState } from "react";
import { NumberOfGuests } from "./NumberOfGuests";
import { ShowCalendar } from "./ShowCalendar";
import { CalendarWrapper, RowWrapper, SelectWrapper } from "../styled/Wrappers";
import { NormalButton, WarningButton } from "../styled/StyledButtons";
import { getBookingsByDate } from "../../services/bookingService";
import { checkBookedTables } from "../../helpers/checkBookedTables";
import { checkAvailableTables } from "../../helpers/checkAvailableTables";
import { ChooseTime } from "./ChooseTime";
import { StyledDropdown } from "../styled/StyledDropdown";

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
    setBookingInfo({ ...bookingInfo, numberOfGuests: value });
  };

  const getDate = (value: string) => {
    setBookingInfo({ ...bookingInfo, date: value });
  };

  const getChoosenTime = (value: string) => {
    setBookingInfo({ ...bookingInfo, time: value });
  };

  const handleSearch = async () => {
    if (
      bookingInfo.numberOfGuests == 0 ||
      bookingInfo.time == "" ||
      bookingInfo.date == ""
    ) {
      setMsg("Fyll i alla fält");
    } else {
      showLoader(true);
      showForm(false);
      setIsFullyBookedAtSix(false);
      let response = await getBookingsByDate(bookingInfo.date);
      let bookedTables = checkBookedTables(response);

      if (bookedTables.tablesAtSix == 15) {
        setIsFullyBookedAtSix(true);
      }
      if (bookedTables.tablesAtNine == 15) {
        setIsFullyBookedAtNine(true);
      }

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
  };

  return (
    <>
      <RowWrapper>
        <CalendarWrapper>
          <ShowCalendar getDate={getDate}></ShowCalendar>
        </CalendarWrapper>
        <SelectWrapper>
          <StyledDropdown>
            <NumberOfGuests
              getNumberOfGuests={getNumberOfGuests}
            ></NumberOfGuests>
          </StyledDropdown>
          <StyledDropdown>
            <ChooseTime getChoosenTime={getChoosenTime}></ChooseTime>
          </StyledDropdown>
          {msg}
        </SelectWrapper>
      </RowWrapper>
      {IsFullyBookedAtSix && <p>Det är tyvärr fullt vid sex. Prova igen!</p>}
      {IsFullyBookedAtNine && <p>Det är tyvärr fullt vid nio. Prova igen!</p>}
      <RowWrapper>
        <NormalButton onClick={handleSearch}>Sök</NormalButton>
        <WarningButton type="button" onClick={handleCancel}>
          Avbryt
        </WarningButton>
      </RowWrapper>
    </>
  );
};
