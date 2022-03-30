import { useSelector } from "react-redux"


const TodoList = () => {
    const todos = useSelector((state)=> state.todos.todos);
    console.log(todos)
   
    return <>
    {todos.map((e)=><div key={e.id}>{e.title}</div>)}
    </>
    
}
export{TodoList}
// wrap entire app inside Provider

// push to store use = useDispatch()

//get from store use = useSelector()