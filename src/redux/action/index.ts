import { ActionType } from "../contants";

interface PayloadType {
    key: string;
    data: any;
}

interface Request{
    type: ActionType.API_REQUEST
}
interface Success{
    type: ActionType.API_SUCCESS
    payload: PayloadType
}
interface Error{
    type: ActionType.API_ERROR
    payload: string
}

type Action = Request | Success | Error

export default Action
