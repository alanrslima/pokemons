import { combineReducers } from "redux";
import { StoreStateProps } from "../createStore";
import session from "./session/reducer";

export default combineReducers<StoreStateProps>({
  session,
});
