import { createContext, useState} from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
const[token, setToken] =  useState()
const Login = (data) => {
    axios.post("https://reqres.in/api/login", data).then((res)=>{
        setToken(res.data.token)
    })
}
return <AuthContext.Provider value={{Login, token}}>{children}</AuthContext.Provider>
}

