import createStore from "./createStore";
import rootReducer from "./modules/rootReducer";
import { Middleware } from "redux";

const middlewares: Middleware[] = [];

const store = createStore(rootReducer, middlewares);

export { store };
