import React from 'react'
import { Home } from './Pages/Home'
import { BrowserRouter ,Routes,Route} from 'react-router'
import { Navbar } from './Components/Navbar'
import { Footer } from './Components/Footer'
import { CartPage } from './Pages/CartPage'
import { PrdDesc } from './Pages/PrdDesc'
import { ErrorPage } from './Pages/ErrorPage'
import { Productbycategory } from './Pages/Productbycategory'
 const App = () => {
  return (
   <BrowserRouter>
   <Navbar></Navbar>
   <Routes>
    <Route path='/' element={<Home/>}>

    </Route>
    <Route path='/cart' element={<CartPage/>}>

    </Route>
    <Route path='/description/:id/:title' element={<PrdDesc/>}>

    </Route>
    <Route path='/category/:cat/:id' element={<Productbycategory/>}>

    </Route>
    <Route path='/*' element={<ErrorPage/>}>

    </Route>
   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}

export default App