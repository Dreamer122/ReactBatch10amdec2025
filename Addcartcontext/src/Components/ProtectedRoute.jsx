import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router'
import { LoginContext} from '../context/Cartcontext'
export const ProtectedRoute = ({children}) => {
    const {isLogin}=useContext(LoginContext)
    if(isLogin){
        return children
    }
    else{
        return <Navigate to="/login"/>
    }
  
  
}
