import styled, { keyframes } from "styled-components";
import vars from "../../../styles/vars";

const PROMPT = {
  HEIGHT: "4rem",
  WIDTH: "19rem",
};

const CHEVRON = {
  HEIGHT: PROMPT.HEIGHT,
  WIDTH: "5rem",
};

const ANIMATE_IN = keyframes`
    to {
        left: 0;
    }
`;

export const Container = styled.div`
  position: absolute;
  left: 10%;
  bottom: 15%;
  width: ${PROMPT.WIDTH};
  height: calc(${PROMPT.HEIGHT} + 1em);
  background: transparent;
  overflow: hidden;

  p {
    position: absolute;
    top: 0;
    left: -${PROMPT.WIDTH};
    width: ${PROMPT.WIDTH};
    height: calc(${PROMPT.HEIGHT} + 1em);
    padding: 0 1em;
    padding-left: ${`calc(${CHEVRON.WIDTH} + 1em)`};
    display: flex;
    align-items: center;
    font-size: 0.85em;
    font-weight: 300;
    background: white;
    animation: ${ANIMATE_IN} 0.5s ease forwards 1.5s;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: -${CHEVRON.WIDTH};
    width: ${CHEVRON.WIDTH};
    height: ${CHEVRON.HEIGHT};
    background: ${vars.colors.red_3};
    clip-path: polygon(0 0, 65% 0, 100% 40%, 55% 100%, 0 100%);
    animation: ${ANIMATE_IN} 0.5s ease forwards 0.5s;
  }
`;
