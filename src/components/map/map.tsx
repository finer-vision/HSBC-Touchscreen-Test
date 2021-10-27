import React from "react";
import { Wrapper, Sea, Continents } from "./styles";
import entities from "./entities";
import { EntityType } from "./types";
import Entity from "./entity/entity";
import Modal from "./modal/modal";

export default function Map() {
  const [modelOpen, setModelOpen] = React.useState(false);
  const [openEntity, setOpenEntity] = React.useState<EntityType>(null);

  const onOpen = React.useCallback((entity: EntityType) => {
    setOpenEntity(entity);
    setModelOpen(true);
  }, []);

  return (
    <Wrapper data-id="map">
      <Sea />
      <Continents />
      {entities.map((entity, index) => {
        return (
          <Entity
            {...entity}
            key={entity.id}
            onOpen={() => onOpen(entity)}
            index={index}
          />
        );
      })}

      <Modal open={modelOpen} onClose={() => setModelOpen(false)}>
        <div>{JSON.stringify(openEntity)}</div>
      </Modal>
    </Wrapper>
  );
}
