import { Home } from "./Home"
import { ProviderFunction } from "./context/ContextProvider"
import { BrowserRouter,Routes,Route } from "react-router"
import { Productbycat } from "./Pages/Productbycat"
import { Navbar } from "./Components/Navbar"
import { CartPage } from "./Pages/CartPage"
import { ProductDesc } from "./Pages/ProductDesc"
import { Toaster } from "react-hot-toast"
import { Loginform } from "./Pages/Loginform"
import { ProtectedRoute } from "./Components/ProtectedRoute"
function App(){
  return(
    <>
    <ProviderFunction>
   
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/category/:name/:id" element={<Productbycat></Productbycat>}></Route>
    <Route path="/cart" element={ <ProtectedRoute> <CartPage/> </ProtectedRoute> }/>
    <Route path="/category/:catname/:catid/:title/:id" element={<ProductDesc/>}/>
    <Route path="/login" element={<Loginform/>}/>
    </Routes>
    <Toaster/>
    </BrowserRouter>
    </ProviderFunction>
    
   
    </>
  )
}
export default App