import { NormalButton } from "./styled/StyledButtons";
import { StyledPageHeader } from "./styled/TextStyles";
import {
  ColumnWrapper,
  ImageWrapper,
  RowWrapper,
  StyledImg,
} from "./styled/Wrappers";

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
        <StyledPageHeader>Boka</StyledPageHeader>

        <ImageWrapper>
          <StyledImg
            src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Photo from above of dinner guests at set table with food on plates, the people are toasting."
          />
        </ImageWrapper>

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
