import styled from "styled-components";

export const Wrapper = styled.div`
  img {
    --time: 1s;
    --ease: ease-in;
    position: absolute;
    will-change: left, top, transform;
    transition: left var(--time) var(--ease), top var(--time) var(--ease);
    top: -10vw;
  }
`;
