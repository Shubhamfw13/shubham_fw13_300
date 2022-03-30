import { ADD_COUNT } from "./CounterActionType"

export const addCount = (payload)=>{
    return {
        type : ADD_COUNT,
        payload
    }
}