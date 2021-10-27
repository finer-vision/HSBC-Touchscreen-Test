import React from "react";
import { Logo, Wrapper } from "./styles";
import { Tint } from "../../styles/elements";
import vars from "../../styles/vars";
import { asset } from "../../utils";

export default function Footer() {
  return (
    <Wrapper>
      <h3>
        <Tint color={vars.colors.green}>Green</Tint> Banking
        <small>Financing the transition to net zero</small>
      </h3>
      <Logo src={asset("/assets/images/logo.svg")} alt="HSBC" />
    </Wrapper>
  );
}
