import { ActionType } from "../contants";

interface PayloadType {
  key: string;
  data: any;
}

interface Request {
  type: ActionType.API_REQUEST;
}
interface Success {
  type: ActionType.API_SUCCESS;
  payload: PayloadType;
}
interface Error {
  type: ActionType.API_ERROR;
  payload: string;
}

interface HomeChange {
  type: ActionType.HOME_CHANGE;
  payload: string;
}

type Action = Request | Success | Error | HomeChange;

export default Action;
