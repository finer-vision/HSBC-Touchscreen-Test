import * as React from "react";
import { Container } from "./styles";

interface Props {}

const Prompt: React.FC<Props> = () => {
  return (
    <Container>
      <p>Click the pictures for examples of our projects worldwide</p>
    </Container>
  );
};

export default Prompt;
