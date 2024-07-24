import React, { createContext, useContext, useState } from 'react'
import { json } from 'react-router-dom'

export const AuthContext = createContext()
const Auth = ({ children }) => {
    const initialAuthUser = localStorage.getItem("bookUsers")
    const [authUser, SetAuthUser] = useState(initialAuthUser ? JSON.parse(initialAuthUser) : undefined)
    return (
        <AuthContext.Provider value={[authUser, SetAuthUser]}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)


export default Auth
