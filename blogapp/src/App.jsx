import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router"
import { Home } from './pages/Home'
import { Signup } from './pages/Signup'
import {Login} from "./pages/Login"
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { Store } from './redux/store'
import Nav from './components/Nav'
import { Dashboard } from './pages/Dashboard'
import { Main } from './components/dashboard/Main'
import { Profile } from './components/dashboard/Profile'
const App = () => {
  return (
   <>
   <BrowserRouter>
   <Provider store={Store}>
    <Nav></Nav>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/dashboard/:id' element={<Dashboard/>}>
    <Route  index element={<Main/>}></Route>
    <Route path='/dashboard/:id/profile' index element={<Profile/>}></Route>
    </Route>

   </Routes>
   <Toaster/>
   </Provider>
   </BrowserRouter>
   </>
  )
}

export default App