// store/rootReducer.js
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
// Ajoute d'autres reducers ici au besoin

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export default rootReducer;

