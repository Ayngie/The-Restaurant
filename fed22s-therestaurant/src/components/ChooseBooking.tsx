import { NormalButton } from "./styled/StyledButtons";
import { RowWrapper } from "./styled/Wrappers";

export const ChooseBooking = () => {
  return (
    <>
      <RowWrapper>
        <NormalButton>Ny bokning</NormalButton>
        <NormalButton>Sök din bokning</NormalButton>
      </RowWrapper>
    </>
  );
};
