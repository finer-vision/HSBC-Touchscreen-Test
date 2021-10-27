import styled from "styled-components";

export const Logo = styled.img`
  height: 2em;
`;

export const Wrapper = styled.footer`
  width: 100%;
  padding: 2em;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-template-rows: 1fr;
  place-content: space-between;
  place-items: self-end;
  background-color: #ffffff;

  h3 {
    font-size: 2em;
    font-weight: normal;

    small {
      font-weight: normal;
      display: block;
      font-size: 0.5em;
      margin-top: 1em;
    }
  }
`;
