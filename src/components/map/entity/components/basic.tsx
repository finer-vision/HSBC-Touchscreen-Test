import React from "react";
import { Container } from "./styles";

type Props = {
  title: string;
  description: string;
  svg: string;
  contentAlign: "right" | "left";
  color: string;
};

export default function Basic({
  title,
  description,
  svg,
  contentAlign,
  color,
}: Props) {
  return (
    <Container contentAlign={contentAlign} color={color}>
      <h3>{title}</h3>
      <div className="content">{description}</div>
      <img src={svg} />
    </Container>
  );
}
