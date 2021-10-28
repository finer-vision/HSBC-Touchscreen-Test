import * as React from "react";
import { Wrapper, Container, Content } from "./styles";
import Close from "./close";

/** context */
interface IState {
  contentAlign: "left" | "right" | "left-2";
}
interface IContext {
  state: IState;
  setState: React.Dispatch<React.SetStateAction<IState>>;
}
export const ModalStyleCtx = React.createContext<IContext | null>(null);
const ModalStyleCtxProvider: React.FC = ({ children }) => {
  const [state, setState] = React.useState<IState>({ contentAlign: "left" });
  const value = { state, setState };
  return (
    <ModalStyleCtx.Provider value={value}>{children}</ModalStyleCtx.Provider>
  );
};

/** component */
type Props = {
  open: boolean;
  onClose: () => void;
  children: any;
};
export default function Modal({ open, onClose, children }: Props) {
  return (
    <Wrapper open={open}>
      <Container>
        <ModalStyleCtxProvider>
          <Close onPointerDown={onClose} />
          <Content>{children}</Content>
        </ModalStyleCtxProvider>
      </Container>
    </Wrapper>
  );
}
