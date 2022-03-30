import { useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"


export function Login() {
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const[toggle, setToggle] = useState(true);
    
    function handleChange(e) {
        const { id, value } = e.target;
        setData({ ...data, [id]: value })
    }
    const { Login } = useContext(AuthContext)
    function handleSubmit(e) {
        e.preventDefault();
        Login(data)
        
        console.log("handleSubmit: " ,toggle)
        setToggle(true);

    }
    
    function Toggle(){
        console.log("Toggle: ",toggle)
        setToggle(false)
    }
    

    return <>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} id="email" type="text" placeholder="Email" /><br />
            <input onChange={handleChange} id="password" type="text" placeholder="Password" /><br />
            <button type="submit">Login</button>
        </form>
        <button onClick={()=> Toggle()}>Toggle</button>
    </>
}


