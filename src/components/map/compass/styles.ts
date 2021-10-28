import styled, { keyframes } from "styled-components";

const SCALE_IN = keyframes`
    60% {
        transform: scale(1.1);
    } 
    75% {
        transform: scale(.95);
    }
    90% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(1);
    }
`;

export const Container = styled.div`
  position: absolute;
  top: 48%;
  left: 20%;
  width: 7.5%;
  transform: scale(0);
  transform-origin: center;
  animation: ${SCALE_IN} 0.5s linear forwards 2s;
`;
