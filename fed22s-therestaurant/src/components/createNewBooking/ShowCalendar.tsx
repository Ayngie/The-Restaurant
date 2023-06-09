import { useState } from "react";
import Calendar from "react-calendar";
import { Value } from "react-calendar/dist/cjs/shared/types";

interface IGetDate {
  getDate(date: string): void;
}

export const ShowCalendar = ({ getDate }: IGetDate) => {
  const [date, setDate] = useState("");

  const onClick = (
    nextValue: Value,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const formatDate = Number(nextValue);
    const clickedDate = new Intl.DateTimeFormat("sv-EU", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    }).format(formatDate);
    setDate(clickedDate);
    getDate(clickedDate);
  };

  return (
    <>
      <Calendar onChange={onClick} value={date} minDate={new Date()} />
      <div>{date}</div>
    </>
  );
};
