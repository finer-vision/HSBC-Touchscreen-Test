import styled from "styled-components";

export const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Image = styled.img`
  display: block;
  max-height: calc(50vh - 1em);
`;

export const Video = styled.video`
  display: block;
  max-height: calc(50vh - 1em);
`;
