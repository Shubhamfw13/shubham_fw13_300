import { ADD_TODO } from "./actionType";
const initState = {
    todos: [
        {
            title: "Intro to Redux",
            status: false,
            id: 1
        }
    ]
}
const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case ADD_TODO: {
            return {
                ...state,
                todos: [...state.todos, payload]
            }
        }
        default:
            return state;
    }
}
export { reducer }