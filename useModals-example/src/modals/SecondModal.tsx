import { useModal } from "../redux/modals.hook";
import type { ModalState } from "../redux/modals.types";

type SecondModalData = {
  id: number;
  passedData: string;
};

export const secondModalId = "second-modal-id";
export type SecondModalState = ModalState<
  typeof secondModalId,
  SecondModalData
>;

export function SecondModal() {
  const { state, setState } = useModal(secondModalId);

  if (!state) return null;
  return (
    <dialog open={!!state} style={{ position: "absolute", top: "50%" }}>
      Second modal {state.id} {state.passedData}
      <button
        style={{ margin: "auto", border: "solid 1px black" }}
        onClick={() => setState(null)}
      >
        close
      </button>
    </dialog>
  );
}
