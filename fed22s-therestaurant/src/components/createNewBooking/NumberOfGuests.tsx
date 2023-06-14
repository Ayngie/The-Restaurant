import { Option } from "react-dropdown";
import Select, { ActionMeta } from "react-select";
import { RowWrapper } from "../styled/Wrappers";
interface IGetNumberOfGuests {
  getNumberOfGuests(userInput: number): void;
}

export const NumberOfGuests = ({ getNumberOfGuests }: IGetNumberOfGuests) => {
  const numberOfGuests = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
    { value: "11", label: "11" },
    { value: "12", label: "12" },
  ];

  const handleChange = (
    option: Option | null,
    actionMeta: ActionMeta<Option>
  ) => {
    console.log("NumberOfGuests handleChange", option?.value);
    if (option?.value === undefined) {
    } else {
      getNumberOfGuests(+option?.value);
    }
  };
  return (
    <>
      <RowWrapper>
        <label>Ange antal gäster</label>
        <Select
          required={true}
          placeholder={"Ange antal"}
          options={numberOfGuests}
          onChange={handleChange}
        />
      </RowWrapper>
    </>
  );
};
