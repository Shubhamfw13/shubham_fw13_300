import { ADD_TODO } from "./TodoActionType";

// action creator

export const addTodo = (payload)=>{
    return {
        type : ADD_TODO,
        payload,
    }
}

