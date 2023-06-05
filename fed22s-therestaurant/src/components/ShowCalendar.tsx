import { useState } from "react";
import Calendar from "react-calendar";
import { Value } from "react-calendar/dist/cjs/shared/types";

export const ShowCalendar = () => {
  const [date, setDate] = useState<Value>();

  const formatDate = Number(date);

  const onClick = (
    nextValue: Value,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setDate(nextValue);
  };

  const clickedDate = new Intl.DateTimeFormat("sv-EU", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).format(formatDate);

  console.log(clickedDate, "test");
  return (
    <>
      <Calendar onChange={onClick} value={date} minDate={new Date()} />
      <div>{clickedDate}</div>
    </>
  );
};
