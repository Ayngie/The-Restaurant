import { NormalButton } from "./styled/StyledButtons";
import { ColumnWrapper, RowWrapper } from "./styled/Wrappers";

interface ICreateNewBooking {
  createNewBooking(userInput: boolean): void;
}

export const ChooseBooking = ({ createNewBooking }: ICreateNewBooking) => {
  const handleClick = () => {
    createNewBooking(true);
  };
  return (
    <>
      <ColumnWrapper>
        <RowWrapper>
          <NormalButton onClick={handleClick}>Ny bokning</NormalButton>
          <NormalButton>Sök din bokning</NormalButton>
        </RowWrapper>
      </ColumnWrapper>
    </>
  );
};
