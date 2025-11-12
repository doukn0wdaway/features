import type { ReactNode } from "react";
import { FirstModal } from "../modals/FirstModal";
import { SecondModal } from "../modals/SecondModal";

export const ModalsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <>
      {children}
      <FirstModal />
      <SecondModal />
    </>
  );
};
