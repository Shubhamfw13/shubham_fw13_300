import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
export function ShowData({}){
    let {token} = useContext(AuthContext)
    
    return <p>{token}</p>
}