import styled, { css, keyframes } from "styled-components";

const BOUNCE_ENTITY = (transform: string) => keyframes`
  0%, 55%, 80%, 100% {
    margin-top: 0;
    transform: ${transform} scale(1);
  }
  45% {
    margin-top: -1em;
    transform: ${transform} scale(1.1);
  }
  70% {
    margin-top: -.75em;
    transform: ${transform} scale(1.075);
  }
  90% {
    margin-top: -.25em;
    transform: ${transform} scale(1.025);
  }
`;

/* animation: ${({ bounce, transform }) =>
      bounce
        ? css`
            ${BOUNCE_ENTITY(transform)} 1.5s linear forwards
          `
        : ""}; */

export const Wrapper = styled.div<{ bounce?: boolean; transform?: string }>`
  img {
    --time: 1s;
    --ease: ease-in;
    --x: 0;
    --y: 0;
    position: absolute;
    will-change: left, top, transform;
    transition: left var(--time) var(--ease), top var(--time) var(--ease);
    top: -10vw;
    animation: bounce 3s linear forwards;

    @keyframes bounce {
      0% {
        transform: translate(var(--x), var(--y));
      }
      50% {
        transform: translate(var(--x), calc(var(--y) * 1.2));
      }
      60% {
        transform: translate(var(--x), calc(var(--y) * 0.9));
      }
      70% {
        transform: translate(var(--x), calc(var(--y) * 0.6));
      }
      80% {
        transform: translate(var(--x), calc(var(--y) * 0.3));
      }
      100% {
        transform: translate(var(--x), calc(var(--y) * 0.1));
      }
    }
  }
`;
