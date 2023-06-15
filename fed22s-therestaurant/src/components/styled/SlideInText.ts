import styled, { keyframes } from "styled-components";

const slideInText = keyframes`
	20% {
		opacity: 0;
	}
	60% {
		transform: translateX(-40%);
	}
	75% {
		transform: translateX(-42%);
	}
	100% {
		opacity: 1;
		transform: translateX(0%);
	}
`;

export const AnimatedH1 = styled.h1`
  font-size: 2em;
  color: white;
  text-shadow: 2px 2px hotpink;
  text-align: center;
  transform: translateX(+200%);
  animation: ${slideInText} 1.5s ease-out forwards;
`;
