import { NormalButton } from "../styled/StyledButtons";
import { StyledInput } from "../styled/StyledInput";
import { ChangeEvent, FormEvent, useState } from "react";
import { ColumnWrapper } from "../styled/Wrappers";
import Dropdown, { Option } from "react-dropdown";

interface IGetNumberOfGuests {
  getNumberOfGuests(userInput: number): void;
}

export const NumberOfGuests = ({ getNumberOfGuests }: IGetNumberOfGuests) => {
  const options = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];

  const handleChange = (option: Option) => {
    getNumberOfGuests(+option.value);
  };

  return (
    <>
      <label>Antal gäster:</label>
      <Dropdown
        options={options}
        onChange={handleChange}
        value={"Ange antal"}
        placeholder="Select an option"
      />
    </>
  );
};
