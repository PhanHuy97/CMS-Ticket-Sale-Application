import { getDoc, doc } from "firebase/firestore"
import { Dispatch } from "redux"
import db from "../../firebase"

import { ActionType } from "../contants"



export const loadData = (api:string) => async (dispatch: Dispatch) => {
    try {
        const dataDoc = doc(db, `CMS-ticket/${api}`)

        dispatch({type: ActionType.API_REQUEST})

        const dataSnapShot = await getDoc(dataDoc)
        if (dataSnapShot.exists()){
            dispatch({
                type: ActionType.API_SUCCESS,
                payload: { key: api, data: dataSnapShot.data() }
            })
        }
    } catch (error) {
        dispatch({type: ActionType.API_ERROR, payload:error})
    }
}