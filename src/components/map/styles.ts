import styled from "styled-components";
import { asset } from "../../utils";

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  z-index: 2;
  width: 100%;
  height: 100%;
`;

export const Sea = styled.div`
  position: absolute;
  z-index: -2;
  inset: 0;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    60deg,
    rgba(191, 250, 255, 1) 0%,
    rgba(137, 208, 240, 1) 54%,
    rgba(180, 242, 252, 1) 100%
  );
  animation: sea 10s linear infinite;

  @keyframes sea {
    0%, 100% {
      transform: translate(-50%, -50%) scale(1);
    }

    50% {
      transform: translate(-50%, -50%) scale(2);
    }
  }
`;

export const Continents = styled.div`
  position: absolute;
  z-index: -1;
  inset: 0;
  width: 100%;
  height: 100%;
  background-image: url(${asset("/assets/images/continents.svg")});
  background-repeat: no-repeat;
  background-position: 35% 50%;
  background-size: 120% auto;
  transform: scaleY(0);
  animation: scale 1s ease-out forwards;

  @keyframes scale {
    0% {
      transform: scaleY(0);
    }

    100% {
      transform: scaleY(1);
    }
  }
`;
