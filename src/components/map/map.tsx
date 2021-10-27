import React from "react";
import { Wrapper, Background } from "./styles";
import entities from "./entities";
import Entity from "./entity/entity";
import { EntityType } from "./types";

export default function Map() {
  const handleOpen = React.useCallback((entity: EntityType) => {
    console.log(entity);
  }, []);

  return (
    <Wrapper data-id="map">
      <Background />
      {entities.map((entity) => {
        return (
          <Entity
            {...entity}
            key={entity.id}
            onOpen={() => handleOpen(entity)}
          />
        );
      })}
    </Wrapper>
  );
}
