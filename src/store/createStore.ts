import { applyMiddleware, createStore, Middleware, Reducer } from "redux";
import {
  SessionActionsProps,
  SessionStateProps,
} from "./modules/session/types";

export interface StoreStateProps {
  session: SessionStateProps;
}

export type StoreActionProps = SessionActionsProps;

const Store = (
  reducers: Reducer<StoreStateProps, StoreActionProps>,
  middlewares: Middleware[]
) => {
  const enhancer = applyMiddleware(...middlewares);
  return createStore(reducers, enhancer);
};
export default Store;
