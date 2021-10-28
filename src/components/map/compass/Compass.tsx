import * as React from "react";
import { Container } from "./styles";

interface Props {}

const Compass: React.FC<Props> = () => {
  return (
    <Container>
      <img src="/assets/entities/compass.svg" />
    </Container>
  );
};

export default Compass;
