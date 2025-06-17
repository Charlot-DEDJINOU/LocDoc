// store/store.js
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { LocalStorageStore } from "../persist";
import rootReducer from "./rootReducer";

const persistedState = LocalStorageStore.loadState("appState");

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  const state = store.getState();
  LocalStorageStore.saveState("appState", state);
});

export default store;

