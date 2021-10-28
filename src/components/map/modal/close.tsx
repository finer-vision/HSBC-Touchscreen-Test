import * as React from "react";
import { ModalStyleCtx } from "./modal";
import { CloseElement } from "./styles";

interface Props {
  onPointerDown: any;
}

const Close: React.FC<Props> = ({ onPointerDown }) => {
  const {
    // @ts-ignore
    state: { contentAlign },
  } = React.useContext(ModalStyleCtx);

  React.useEffect(() => console.log({ contentAlign }), [contentAlign]);

  return (
    <CloseElement onPointerDown={onPointerDown} align={contentAlign}>
      {contentAlign === "left" ? (
        <img src="/assets/icons/close-red.svg" />
      ) : (
        <img src="/assets/icons/close-white.svg" />
      )}
    </CloseElement>
  );
};

export default Close;
