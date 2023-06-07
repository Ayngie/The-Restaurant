import { NormalButton } from "./styled/StyledButtons";
import { StyledInput } from "./styled/StyledInput";
import { ChangeEvent, FormEvent, useState } from "react";
import { ColumnWrapper } from "./styled/Wrappers";
import Dropdown, { Option } from "react-dropdown";

interface IGetNumberOfGuests {
  getNumberOfGuests(userInput: string): void;
}

export const NumberOfGuests = ({ getNumberOfGuests }: IGetNumberOfGuests) => {
  const options = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  const defaultOption = options[0];

  const handleChange = (option: Option) => {
    getNumberOfGuests(option.value);
  };

  return (
    <>
      <label>Antal gäster:</label>
      <Dropdown
        options={options}
        onChange={handleChange}
        value={defaultOption}
        placeholder="Select an option"
      />
    </>
  );
};
