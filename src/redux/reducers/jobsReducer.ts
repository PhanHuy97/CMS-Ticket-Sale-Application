
import Action from "../action";
import { ActionType } from "../contants";

interface State {
    request: boolean;
    success: boolean;
    message?: string;
    data?: string[];
}

const initState: State = {
    request: false,
    success: false,
    message: "",
    data:[]
}


export const jobsReducer= (state: State = initState,action: Action) => {
    switch (action.type) {
        case ActionType.API_REQUEST :
            return { 
                ...state,
                request:true,
            }
        case ActionType.API_SUCCESS : 
            return {
                ...state,
                request:false,
                success:true,
                data:action.payload
            }     
        case ActionType.API_ERROR : 
            return {
                ...state,
                request:false,
                success:false,
                message:action.payload
            }
        default: return state
    } 
}