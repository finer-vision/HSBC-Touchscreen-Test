import * as React from "react";
import { ModalStyleCtx } from "../../modal/modal";
import { Container } from "./styles";
import { asset } from "../../../../utils";

type Props = {
  title: string;
  description: string;
  svg: string;
  svgLrg?: boolean;
  contentAlign: "right" | "left";
  color: string;
  bounceWith?: number;
};

export default function Basic({
  title,
  description,
  svg,
  svgLrg = false,
  contentAlign,
  color,
}: Props) {
  const { setState } = React.useContext(ModalStyleCtx);
  React.useEffect(() => setState({ contentAlign }), [contentAlign]);

  return (
    <Container contentAlign={contentAlign} color={color} svgLrg={svgLrg}>
      <h3>{title}</h3>
      <div className="content">{description}</div>
      <img src={asset(svg)} />
    </Container>
  );
}
