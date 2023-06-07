import { NormalButton } from "./styled/StyledButtons";
import { StyledInput } from "./styled/StyledInput";
import { ChangeEvent, FormEvent, useState } from "react";
import { ColumnWrapper } from "./styled/Wrappers";

interface IGetNumberOfGuests {
  getNumberOfGuests(userInput: string): void;
}

export const NumberOfGuests = ({ getNumberOfGuests }: IGetNumberOfGuests) => {
  const [handleInput, sethandleInput] = useState("");

  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    getNumberOfGuests(handleInput);
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
          onChange={handleChange}
          maxLength={12}
        ></StyledInput>
        <NormalButton>Sök</NormalButton>
      </ColumnWrapper>
    </form>
  );
};
