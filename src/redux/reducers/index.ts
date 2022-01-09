import { combineReducers } from "redux";
import { jobsReducer } from "./jobsReducer";

const reducer = combineReducers({
    jobs: jobsReducer
})

export default reducer
export type ReducerState = ReturnType<typeof reducer>

