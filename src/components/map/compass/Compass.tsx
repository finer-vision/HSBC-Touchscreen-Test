import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 48%;
  left: 20%;
  width: 8.5%;
`;

interface Props {}

const Compass: React.FC<Props> = () => {
  return (
    <Container>
      <img src="/assets/entities/compass.svg" />
    </Container>
  );
};

export default Compass;
