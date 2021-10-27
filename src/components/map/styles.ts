import styled from "styled-components";
import { asset } from "../../utils";

export const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    60deg,
    rgba(191, 250, 255, 1) 0%,
    rgba(137, 208, 240, 1) 54%,
    rgba(180, 242, 252, 1) 100%
  );
`;

export const Background = styled.div`
  position: absolute;
  z-index: -1;
  inset: 0;
  width: 100%;
  height: 100%;
  background-image: url(${asset("/assets/images/continents.svg")});
  background-repeat: no-repeat;
  background-position: 35% 50%;
  background-size: 120% auto;
`;
