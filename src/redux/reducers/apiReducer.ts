
import Action from "../action";
import { ActionType } from "../contants";

interface State {
    request: boolean;
    success: boolean;
    message?: string;
    data?: any;
}

const initState: State = {
    request: false,
    success: false,
    message: "",
    data:{}
}


export const apiReducer= (state: State = initState,action: Action) => {
    switch (action.type) {
        case ActionType.API_REQUEST :
            return { 
                ...state,
                request:true,
            }
        case ActionType.API_SUCCESS : {
                let newData = {...state.data}
                const key = action.payload.key

                if (newData[key]) {
                    newData[key] = action.payload.data
                } else {
                    newData = {...newData,[key]:action.payload.data}
                }
            return {
                ...state,
                request:false,
                success:true,
                data: newData
            }     
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