import React from "react";
import { Wrapper, Container, Content, Close } from "./styles";

type Props = {
  open: boolean;
  onClose: () => void;
  children: any;
};

export default function Modal({ open, onClose, children }: Props) {
  // @todo transition
  if (!open) return null;

  return (
    <Wrapper>
      <Container>
        <Close onPointerDown={onClose}>&times;</Close>
        <Content>{children}</Content>
      </Container>
    </Wrapper>
  );
}
