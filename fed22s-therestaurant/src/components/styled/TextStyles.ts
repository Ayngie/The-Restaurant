import styled from "styled-components";

export const StyledH1 = styled.h1`
  color: white;
  text-shadow: 2px 2px hotpink;
  text-align: center;
`;
export const StyledParagraph = styled.p`
  width: 80%;
  color: white;
  text-align: center;
`;
export const StyledParagraphMobile = styled(StyledParagraph)`
  font-size: 1.5em;
  display: auto;
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;
export const StyledParagraphDesktop = styled(StyledParagraph)`
  display: none;
  @media screen and (min-width: 1200px) {
    font-size: 1em;
    display: block;
  }
`;

export const StyledFirstWord = styled.span`
  font-size: 1.3em;
  letter-spacing: 1.5px;
`;
