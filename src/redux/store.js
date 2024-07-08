import { combineReducers, configureStore } from "@reduxjs/toolkit";
import countReducer from "./reducers/countReducer";

const rootReducer = combineReducers({
  count: countReducer,
});

export const store = configureStore({ reducer: rootReducer });
