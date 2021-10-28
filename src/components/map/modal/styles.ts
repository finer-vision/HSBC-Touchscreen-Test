import styled, { css } from "styled-components";
import vars from "../../../styles/vars";

const OPEN_TRANSITION = {
  time: "1s",
  ease: "ease",
};

export const Container = styled.div`
  position: relative;
  max-width: 75%;
  background-color: #ffffff;
  padding-bottom: 7.5%;
  position: relative;
  opacity: 0;
  transition: opacity calc(${OPEN_TRANSITION.time} * 0.5)
    ${OPEN_TRANSITION.ease};
  isolation: isolate;
  overflow: hidden;
`;

export const Content = styled.div``;

type WrapperProps = {
  open: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  position: absolute;
  z-index: 1;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0);
  transition: background-color ${OPEN_TRANSITION.time} ${OPEN_TRANSITION.ease};
  pointer-events: none;

  ${({ open }) => {
    if (open) {
      return css`
        background-color: rgba(0, 0, 0, 0.5);
        pointer-events: all;

        ${Container} {
          opacity: 1;
        }
      `;
    }
  }}
`;

export const CloseElement = styled.div<{ align: "left" | "right" }>`
  position: absolute;
  top: 0;
  right: 0;
  width: 2em;
  height: 2em;
  padding: 0.35em;
  background: ${(p) => vars.colors[p.align === "left" ? "white" : "red_2"]};
  z-index: 5;
`;
