import styled from "styled-components";
import config from "../../config";

export const Wrapper = styled.main`
  width: ${config.width}px;
  height: ${config.height}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
