import { ActionType } from "../contants";

interface Request{
    type: ActionType.API_REQUEST
}
interface Success{
    type: ActionType.API_SUCCESS
    payload: string[]
}
interface Error{
    type: ActionType.API_ERROR
    payload: string
}

type Action = Request | Success | Error

export default Action
