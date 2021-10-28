import styled, { css } from "styled-components";
import vars from "../../../../styles/vars";

const CLOSE_SIZE = 1.5;
const CONTAINER_PADDING = {
  x: 1.5,
  y: 1,
};

interface IContainerAttrs {
  contentAlign: "right" | "left";
  color: string;
}

const handleContentAlign = (align: string) => {
  switch (align) {
    case "right":
      return css`
        grid-template-areas:
          "svg title"
          "svg content";
      `;
    default:
      return css`
        grid-template-areas:
          "title svg"
          "content svg";
      `;
  }
};

const handleChevronAlign = (align: string) => {
  switch (align) {
    case "right":
      return css`
        left: 0;
      `;
    default:
      return css`
        right: 0;
        transform: rotateY(180deg);
      `;
  }
};

export const Container = styled.div<IContainerAttrs>`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  gap: 2em;
  ${(p) => handleContentAlign(p.contentAlign)};
  padding: ${CONTAINER_PADDING.y}em ${CONTAINER_PADDING.x}em;
  padding-top: ${CLOSE_SIZE + CONTAINER_PADDING.y * 0.5}em;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    background: ${({ color }) => vars.colors[color || "black"]};
    clip-path: polygon(0 0, 60% 0, 100% 40%, 60% 100%, 0 100%);
    z-index: -1;
    ${(p) => handleChevronAlign(p.contentAlign)};
  }

  h3 {
    grid-area: title;
    font-weight: bold;
    font-size: 1.5em;
  }

  .content {
    grid-area: content;
    min-height: 24vh;
    font-size: 0.75em;
    line-height: 1.5;
  }

  img {
    grid-area: svg;
    justify-self: center;
    align-self: flex-end;
    height: 90%;
    max-height: 28vh;
    max-width: 90%;
  }
`;
