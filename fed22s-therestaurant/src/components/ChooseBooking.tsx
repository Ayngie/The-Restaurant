import { NormalButton } from "./styled/StyledButtons";
import { ColumnWrapper, RowWrapper } from "./styled/Wrappers";

interface ICreateNewBooking {
  createNewBooking(userInput: boolean): void;
  handleBooking(showBooking: boolean): void;
}

export const ChooseBooking = ({
  createNewBooking,
  handleBooking,
}: ICreateNewBooking) => {
  const handleClickForCreateBooking = () => {
    createNewBooking(true);
  };
  const handleClickForHandleBooking = () => {
    handleBooking(true);
  };
  return (
    <>
      <ColumnWrapper>
        <RowWrapper>
          <NormalButton onClick={handleClickForCreateBooking}>
            Ny bokning
          </NormalButton>
          <NormalButton onClick={handleClickForHandleBooking}>
            Sök din bokning
          </NormalButton>
        </RowWrapper>
      </ColumnWrapper>
    </>
  );
};
