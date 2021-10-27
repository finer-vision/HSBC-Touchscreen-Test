import React from "react";
import { Continents, Sea, Wrapper } from "./styles";
import entities from "./entities";
import { EntityComponentType, EntityType } from "./types";
import Entity from "./entity/entity";
import Modal from "./modal/modal";
import Basic from "./entity/components/basic";

export default function Map() {
  const [modelOpen, setModelOpen] = React.useState(false);
  const [openEntity, setOpenEntity] = React.useState<EntityType>(null);

  const EntityComponent = React.useMemo(() => {
    switch (openEntity?.modal?.component) {
      case EntityComponentType.basic:
        return Basic;
      default:
        return React.Fragment;
    }
  }, [openEntity]);

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
        {/* @todo fix this type */}
        {/* @ts-ignore */}
        <EntityComponent {...(openEntity?.modal?.props ?? {})} />
      </Modal>
    </Wrapper>
  );
}
