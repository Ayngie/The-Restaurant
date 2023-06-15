import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledH1 = styled.h1`
  font-size: 2em;
  color: white;
  text-shadow: 2px 2px hotpink;
  text-align: center;
`;
export const StyledPageHeader = styled(StyledH1)`
  font-size: 3em;
  margin-bottom: 10px;
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

export const StyledMenuParagraph = styled(StyledParagraph)`
  color: white;
  width: 50%;
`;

export const StyledMenuListItem = styled.li`
  font-size: 1.2em;
  color: hotpink;
  padding: 10px;
`;

export const StyledCourseDescription = styled.span`
  padding-top: 3px;
  padding-bottom: 5px;
  display: block;
  font-size: 0.8em;
  font-style: italic;
`;

export const StyledLink = styled(Link)`
  font-size: 1%.5;
  color: rebeccapurple;
`;
