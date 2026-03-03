import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router"
import { Home } from './pages/Home'
import { Signup } from './pages/Signup'
import {Login} from "./pages/Login"
import { Toaster } from 'react-hot-toast'
const App = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>

   </Routes>
   <Toaster/>
   </BrowserRouter>
   </>
  )
}

export default App