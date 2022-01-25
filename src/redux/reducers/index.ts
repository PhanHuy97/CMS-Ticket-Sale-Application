import { combineReducers } from "redux";
import { apiReducer } from "./apiReducer";
import { homeReducer } from "./homeReducer";

const reducer = combineReducers({
  api: apiReducer,
  home: homeReducer,
});

export default reducer;
export type ReducerState = ReturnType<typeof reducer>;
