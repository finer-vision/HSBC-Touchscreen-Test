import styled from "styled-components";

type TintProps = {
  color: string;
};

export const Tint = styled.span<TintProps>`
  color: ${({ color }) => color};
`;
