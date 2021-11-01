import * as React from "react";
import { Container } from "./styles";
import { asset } from "../../../utils";

interface Props {}

const Compass: React.FC<Props> = () => {
  return (
    <Container>
      <img src={asset("/assets/entities/compass.svg")} />
    </Container>
  );
};

export default Compass;
