import { createStore } from "redux";
import rootReducer from "./reducers";

export type RootState = ReturnType<typeof store.getState>;

export const store = createStore(rootReducer);
