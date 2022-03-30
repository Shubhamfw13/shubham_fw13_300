import { useState } from "react"
import { useDispatch } from "react-redux";
import {v4 as uuid} from "uuid";
import { addTodo } from "../Redux/Todo/TodoAction";

export const TodoInput = () => {
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();
    
    const handleAdd = ()=>{
        const payload = {
            title, 
            status : false,
            id : uuid()
        }
        const addTodoAction = addTodo(payload)
        dispatch(addTodoAction)
    }
    return (
        <div>
            <h3>Add Todo</h3>
            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Add something" />
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}