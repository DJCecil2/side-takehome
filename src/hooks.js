import { useContext } from "react";
import { store } from "./store";

export const useAppState = () => {
  const globalState = useContext(store);
  const { dispatch, state } = globalState;

  return { dispatch, state };
};
