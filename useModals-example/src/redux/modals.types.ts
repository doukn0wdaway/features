import type { FirstModalState } from "../modals/FirstModal";
import type { SecondModalState } from "../modals/SecondModal";

export type SimpleModalState<T extends string> = {
  [K in T]: boolean;
};

export type ModalState<T extends string, U> = {
  [K in T]: U | null;
};

export type ModalsList = FirstModalState & SecondModalState;

export type ModalId = keyof ModalsList;
