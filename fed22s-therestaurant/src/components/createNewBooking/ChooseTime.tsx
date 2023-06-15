import { Option } from "react-dropdown";
import Select, { ActionMeta } from "react-select";
import { ColumnWrapper, RowWrapper } from "../styled/Wrappers";
import { StyledLabel } from "../styled/StyledLabel";

interface IGetChoosenTime {
  getChoosenTime(userInput: string): void;
}
export const ChooseTime = ({ getChoosenTime }: IGetChoosenTime) => {
  const options = [
    { value: "18:00", label: "18:00" },
    { value: "21:00", label: "21:00" },
  ];

  const handleChange = (
    option: Option | null,
    actionMeta: ActionMeta<Option>
  ) => {
    if (option?.value !== undefined) {
      getChoosenTime(option?.value);
    }
  };

  return (
    <>
      <ColumnWrapper>
        <StyledLabel>Välj tid</StyledLabel>
        <Select
          classNamePrefix="dropdown"
          placeholder={"Välj tid"}
          options={options}
          onChange={handleChange}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              text: "#db7093",
              primary25: "pink",
              primary: "#db7093",
            },
          })}
        />
      </ColumnWrapper>
    </>
  );
};
