import React from "react";
import { Wrapper, Background } from "./styles";
import entities from "./entities";
import { EntityType } from "./types";
import Entity from "./entity/entity";
import Modal from "./modal/modal";

export default function Map() {
  const [openEntity, setOpenEntity] = React.useState<EntityType>(null);

  return (
    <Wrapper data-id="map">
      <Background />
      {entities.map((entity, index) => {
        return (
          <Entity
            {...entity}
            key={entity.id}
            onOpen={() => setOpenEntity(entity)}
            index={index}
          />
        );
      })}

      <Modal open={openEntity !== null} onClose={() => setOpenEntity(null)}>
        <div>{JSON.stringify(openEntity)}</div>
      </Modal>
    </Wrapper>
  );
}
