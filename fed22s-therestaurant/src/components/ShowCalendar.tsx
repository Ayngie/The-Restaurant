import { useState } from "react";
import Calendar from "react-calendar";
import { Value } from "react-calendar/dist/cjs/shared/types";

interface IGetDate {
  getDate(date: string): void;
}

export const ShowCalendar = ({ getDate }: IGetDate) => {
  const [date, setDate] = useState<Value>(new Date());

  const onClick = (
    nextValue: Value,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setDate(nextValue);
  };

  const formatDate = Number(date);
  const clickedDate = new Intl.DateTimeFormat("sv-EU", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).format(formatDate);

  getDate(clickedDate);

  return (
    <>
      <Calendar onChange={onClick} value={date} minDate={new Date()} />
      <div>{clickedDate}</div>
    </>
  );
};
