import Action from "../action";
import { ActionType } from "../contants";

const initState = "date";

export const homeReducer = (state = initState, action: Action) => {
  switch (action.type) {
    case ActionType.HOME_CHANGE:
      return (state = action.payload);
    default:
      return state;
  }
};
