import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store, useTypedSelector } from "./redux/store";
import { useActions } from "./useActions";
import { exampleSlice } from "./redux/slice";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>,
);

function useExampleSlice() {
  const state = useTypedSelector((state) => state.exampleSlice);
  const actions = useActions(exampleSlice.actions);

  return { ...state, ...actions };
}

function App() {
  const { num, setNum } = useExampleSlice();
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
        onClick={() => setNum(num + 1)}
      >
        {num}
      </button>
    </div>
  );
}
