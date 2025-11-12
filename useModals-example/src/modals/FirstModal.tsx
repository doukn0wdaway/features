import { useModal } from "../redux/modals.hook";
import type { SimpleModalState } from "../redux/modals.types";

export const firstModalId = "first-modal-id";
export type FirstModalState = SimpleModalState<typeof firstModalId>;

export function FirstModal() {
  const { state, setState } = useModal(firstModalId);

  return (
    <dialog open={state} style={{ position: "absolute", top: "50%" }}>
      First modal
      <button
        style={{ margin: "auto", border: "solid 1px black" }}
        onClick={() => setState(false)}
      >
        close
      </button>
    </dialog>
  );
}
