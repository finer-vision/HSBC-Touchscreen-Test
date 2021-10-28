import React from "react";
import { Continents, Sea, Wrapper } from "./styles";
import entities from "./entities";
import { EntityComponentType, EntityType } from "./types";
import Entity from "./entity/entity";
import Modal from "./modal/modal";
import Basic from "./entity/components/basic";
import Prompt from "./prompt/Prompt";
import Compass from "./compass/Compass";

export default function Map() {
  const [modelOpen, setModelOpen] = React.useState(false);
  const [openEntity, setOpenEntity] = React.useState<EntityType>(null);
  const [idleBounce, setIdleBounce] = React.useState(0);
  const increment = React.useRef(null);
  const IDLE_BOUNCE_DELAY_SECONDS = 15;

  const EntityComponent = React.useMemo(() => {
    switch (openEntity?.modal?.component) {
      case EntityComponentType.basic:
        return Basic;
      default:
        return React.Fragment;
    }
  }, [openEntity]);

  React.useEffect(() => {
    if (modelOpen) {
      return () => clearInterval(increment.current);
    } else {
      const interval = setInterval(() => {
        setIdleBounce((prev) => (prev === entities.length - 1 ? 0 : prev + 1));
      }, IDLE_BOUNCE_DELAY_SECONDS * 1000);
      increment.current = interval;
    }
    return () => clearInterval(increment.current);
  }, [modelOpen]);

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
            bounce={idleBounce === index}
          />
        );
      })}

      <Compass />
      <Prompt />

      <Modal open={modelOpen} onClose={() => setModelOpen(false)}>
        {/* @todo fix this type */}
        {/* @ts-ignore */}
        <EntityComponent {...(openEntity?.modal?.props ?? {})} />
      </Modal>
    </Wrapper>
  );
}
