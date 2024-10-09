import { createContext,useContext,useState } from "react";

export const AuthContext = createContext();

export const useAuth = ()=>{
    return useContext(AuthContext)
}

export const AuthContextProvider = ({children})=>{

    const [authUser, setauthUser] = useState(JSON.parse(localStorage.getItem('chatapp')));

    return<AuthContext.Provider value={{authUser , setauthUser}}> {children} </AuthContext.Provider>
}

