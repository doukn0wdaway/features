import { createSlice } from "@reduxjs/toolkit";
import type { ModalId, ModalsList } from "./modals.types";
import { firstModalId } from "../modals/FirstModal";
import { secondModalId } from "../modals/SecondModal";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: ModalsList = {
  [firstModalId]: false,
  [secondModalId]: null,
};

export const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setState: <T extends ModalId>(
      state: ModalsList,
      action: PayloadAction<{
        modalId: T;
        modalState: ModalsList[T];
      }>,
    ) => {
      const { modalId, modalState } = action.payload;
      state[modalId] = modalState;
    },
  },
});
