import React from "react";
import { Wrapper, Container, Content, Close } from "./styles";

type Props = {
  open: boolean;
  onClose: () => void;
  children: any;
};

export default function Modal({ open, onClose, children }: Props) {
  return (
    <Wrapper open={open}>
      <Container>
        <Close onPointerDown={onClose}>&times;</Close>
        <Content>{children}</Content>
      </Container>
    </Wrapper>
  );
}
