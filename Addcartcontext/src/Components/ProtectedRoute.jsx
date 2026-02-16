import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router'
import {Cartcontext} from '../context/Cartcontext'
export const ProtectedRoute = ({children}) => {
    const {isLogin}=useContext(Cartcontext)
    if(isLogin){
        return children
    }
    else{
        return <Navigate to="/login"/>
    }
  
  
}
