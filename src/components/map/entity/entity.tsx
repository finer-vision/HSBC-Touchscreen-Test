import React from "react";
import { Wrapper } from "./styles";
import { EntityType } from "../types";
import { asset, clamp, map } from "../../../utils";
import config from "../../../config";

type Props = EntityType & {
  //
};

export default function Entity({ id, size, x, y }: Props) {
  const position = React.useMemo(() => {
    return {
      x: map(x, 0, 100, 0, -100),
      y: map(y, 0, 100, 0, -100),
    };
  }, [x, y]);

  const [movable, setMovable] = React.useState(false);

  const imgRef = React.useRef<HTMLImageElement>();

  const onPointerDown = React.useCallback(
    (event: React.PointerEvent<HTMLImageElement>) => {
      event.preventDefault();
      setMovable(true);
    },
    []
  );

  React.useEffect(() => {
    function onPointerUp() {
      setMovable(false);
      console.log({
        id,
        x: parseFloat(imgRef.current.style.left),
        y: parseFloat(imgRef.current.style.top),
      });
    }

    function onPointerMove(event: PointerEvent) {
      if (!config.debug || !movable) return;
      const { pageX, pageY } = event;
      const container = (event.target as HTMLElement).closest(
        `[data-id="map"]`
      );
      if (!container) return;
      const x = clamp((pageX / container.clientWidth) * 100, 0, 100);
      const y = clamp((pageY / container.clientHeight) * 100, 0, 100);
      const position = {
        x: map(x, 0, 100, 0, -100),
        y: map(y, 0, 100, 0, -100),
      };
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

  return (
    <Wrapper>
      <img
        ref={imgRef}
        onPointerDown={onPointerDown}
        src={asset(`/assets/entities/${id}.svg`)}
        alt=""
        style={{
          width: `${size}vw`,
          height: "auto",
          left: `${x}%`,
          top: `${y}%`,
          transform: `translate(${position.x}%, ${position.y}%)`,
        }}
      />
    </Wrapper>
  );
}
