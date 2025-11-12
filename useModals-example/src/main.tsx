import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ModalsProvider } from "./redux/modal.provider";
import { useModal } from "./redux/modals.hook";
import { firstModalId } from "./modals/FirstModal";
import { secondModalId } from "./modals/SecondModal";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ModalsProvider>
      <App />
    </ModalsProvider>
  </Provider>,
);

function App() {
  const { setState: setFirstModalState } = useModal(firstModalId);
  const { setState: setSecondModalState } = useModal(secondModalId);
  return (
    <div
      style={{
        width: "100dvw",
        height: "100dvh",
        display: "flex",
      }}
    >
      <button
        style={{ margin: "auto", border: "solid 1px black" }}
        onClick={() => setFirstModalState(true)}
      >
        open first modal
      </button>

      <button
        style={{ margin: "auto", border: "solid 1px black" }}
        onClick={() =>
          setSecondModalState({
            id: 0,
            passedData: "some long passed data",
          })
        }
      >
        open second modal
      </button>
    </div>
  );
}
