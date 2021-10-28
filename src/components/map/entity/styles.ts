import styled, { css, keyframes } from "styled-components";

const BOUNCE_ENTITY = keyframes`
  25%, 75% {
    margin-top: -1em;
  }
  50%, 100% {
    margin-top: 0;
  }
`;

export const Wrapper = styled.div<{ bounce: boolean }>`
  img {
    --time: 1s;
    --ease: ease-in;
    position: absolute;
    will-change: left, top, transform;
    transition: left var(--time) var(--ease), top var(--time) var(--ease);
    top: -10vw;

    ${(p) =>
      p.bounce &&
      css`
        animation: ${BOUNCE_ENTITY} 2s linear forwards;
      `}
  }
`;
