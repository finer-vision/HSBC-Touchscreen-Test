import React from "react";
import { Wrapper, Background } from "./styles";
import entities from "./entities";
import Entity from "./entity/entity";

export default function Map() {
  return (
    <Wrapper data-id="map">
      <Background />
      {entities.map((entity) => {
        return <Entity {...entity} key={entity.id} />;
      })}
    </Wrapper>
  );
}
