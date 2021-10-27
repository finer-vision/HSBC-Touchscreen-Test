import styled, { css } from "styled-components";

const OPEN_TRANSITION = {
  time: "1s",
  ease: "ease",
};

const CLOSE_SIZE = 1.5;
const CONTAINER_PADDING = {
  x: 1.5,
  y: 1,
};

export const Container = styled.div`
  background-color: #ffffff;
  padding: ${CONTAINER_PADDING.y}em ${CONTAINER_PADDING.x}em;
  position: relative;
  opacity: 0;
  transition: opacity calc(${OPEN_TRANSITION.time} * 0.5) ${OPEN_TRANSITION.ease};
`;

export const Content = styled.div`
  background-color: #ffffff;
  margin-top: ${CLOSE_SIZE + CONTAINER_PADDING.y * 0.5}em;
`;

export const Close = styled.div`
  color: #000000;
  position: absolute;
  font-size: ${CLOSE_SIZE}em;
  top: ${CONTAINER_PADDING.y}rem;
  right: ${CONTAINER_PADDING.x}rem;
`;

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
