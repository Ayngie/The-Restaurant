import { NormalButton } from "./styled/StyledButtons";
import { StyledInput } from "./styled/StyledInput";
import { ChangeEvent, FormEvent, useState } from "react";
import { ColumnWrapper } from "./styled/Wrappers";

export const FindBooking = () => {
  const [handleInput, sethandleInput] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState("");

  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    setNumberOfGuests(handleInput);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    sethandleInput(e.target.value);
  };

  return (
    <form onSubmit={handleClick}>
      <ColumnWrapper>
        <StyledInput
          type="number"
          placeholder="Antal personer"
          value={numberOfGuests}
          onChange={handleChange}
        ></StyledInput>
        <NormalButton>Sök</NormalButton>
      </ColumnWrapper>
    </form>
  );
};
