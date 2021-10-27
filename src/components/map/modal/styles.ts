import styled from "styled-components";

const CLOSE_SIZE = 1.5;
const CONTAINER_PADDING = {
  x: 1.5,
  y: 1,
};

export const Wrapper = styled.div`
  position: absolute;
  z-index: 1;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  background-color: #ffffff;
  padding: ${CONTAINER_PADDING.y}em ${CONTAINER_PADDING.x}em;
  position: relative;
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
