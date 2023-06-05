import { StyledFooterWrapper } from "./styled/footer/StyledFooterWrapper";

const html = (
  <>
    <p>Restaurangvägen 4 115 47 Stockholm</p>
    <p>Telefon: 070123456</p>
    <p>Öppettider: 15-23</p>
  </>
);

export const Footer = () => {
  return (
    <>
      <StyledFooterWrapper>{html}</StyledFooterWrapper>
    </>
  );
};
