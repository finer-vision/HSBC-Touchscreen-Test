import React from "react";
import { Wrapper } from "./styles";
import { EntityType } from "../types";
import { asset, clamp, map } from "../../../utils";
import config from "../../../config";
import entities from "../entities";

type Props = EntityType & {
  onOpen: (...args: any[]) => void;
  index?: number;
  bounce: boolean;
};

export default function Entity({
  id,
  size,
  x,
  y,
  onOpen,
  index = 0,
  bounce = false,
}: Props) {
  const position = React.useMemo(() => {
    return {
      x: map(x, 0, 100, 0, -100),
      y: map(y, 0, 100, 0, -100),
    };
  }, [x, y]);

  const [movable, setMovable] = React.useState(false);

  const imgRef = React.useRef<HTMLImageElement>();
  const movableIdRef = React.useRef<string>("");

  const onPointerDown = React.useCallback(
    (event: React.PointerEvent<HTMLImageElement>) => {
      event.preventDefault();
      movableIdRef.current = id;
      setMovable(true);
    },
    [id]
  );

  React.useEffect(() => {
    let container: HTMLElement = null;

    function onPointerUp() {
      if (movableIdRef.current !== id) return;
      container = null;
      setMovable(false);
      console.log({
        id,
        x: parseFloat(imgRef.current.style.left),
        y: parseFloat(imgRef.current.style.top),
      });
    }

    function onPointerMove(event: PointerEvent) {
      if (!config.debug || !movable) return;
      if (movableIdRef.current !== id) return;
      if (container === null) {
        container = (event.target as HTMLElement).closest(`[data-id="map"]`);
      }
      if (container === null) return;
      const { pageX, pageY } = event;
      const x = clamp((pageX / container.clientWidth) * 100, 0, 100);
      const y = clamp((pageY / container.clientHeight) * 100, 0, 100);
      const position = {
        x: map(x, 0, 100, 0, -100),
        y: map(y, 0, 100, 0, -100),
      };
      imgRef.current.style.transition = "none";
      imgRef.current.style.left = `${x}%`;
      imgRef.current.style.top = `${y}%`;
      imgRef.current.style.transform = `translate(${position.x}%, ${position.y}%)`;
    }

    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointermove", onPointerMove);
    return () => {
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, [id, movable]);

  React.useLayoutEffect(() => {
    const nextFrames: number[] = [];
    function init() {
      nextFrames.push(
        requestAnimationFrame(() => {
          imgRef.current.style.top = `${y}%`;
          imgRef.current.style.transform = `translate(${position.x}%, ${position.y}%)`;
        })
      );
    }
    nextFrames.push(requestAnimationFrame(init));
    return () => {
      nextFrames.forEach((nextFrame) => {
        cancelAnimationFrame(nextFrame);
      });
    };
  }, [position]);

  return (
    <Wrapper onPointerDown={onOpen} bounce={bounce}>
      <img
        ref={imgRef}
        onPointerDown={onPointerDown}
        src={asset(`/assets/entities/${id}.svg`)}
        alt=""
        style={{
          width: `${size}%`,
          height: "auto",
          left: `${x}%`,
          transform: `translate(${position.x}%, ${position.y}%)`,
          transitionDelay: `calc(var(--time) * ${index / entities.length})`,
        }}
      />
    </Wrapper>
  );
}
