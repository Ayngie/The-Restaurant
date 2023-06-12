import { NormalButton, WarningButton } from "../styled/StyledButtons";
import { RowWrapper, ColumnWrapper } from "../styled/Wrappers";

export const ShowSingleBooking = () => {
  const deleteBooking = () => {
    console.log("delete");
  };
  return (
    <>
      <h3> Show single booking</h3>
      <RowWrapper>
        <NormalButton type="button">Uppdatera bokning</NormalButton>
        <WarningButton type="button" onClick={deleteBooking}>
          Radera bokning
        </WarningButton>
        <WarningButton type="button">Avbryt</WarningButton>
      </RowWrapper>
    </>
  );
};
