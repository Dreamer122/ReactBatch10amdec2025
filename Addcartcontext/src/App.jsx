import { Home } from "./Home"
import { ProviderFunction } from "./context/ContextProvider"
import { BrowserRouter,Routes,Route } from "react-router"
import { Productbycat } from "./Pages/Productbycat"
import { Navbar } from "./Components/Navbar"
import { CartPage } from "./Pages/CartPage"
import { ProductDesc } from "./Pages/ProductDesc"
import { Toaster } from "react-hot-toast"
function App(){
  return(
    <>
    <ProviderFunction>
   
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/category/:name/:id" element={<Productbycat></Productbycat>}></Route>
    <Route path="/cart" element={<CartPage/>}/>
    <Route path="/category/:catname/:catid/:title/:id" element={<ProductDesc/>}/>
    </Routes>
    <Toaster/>
    </BrowserRouter>
    </ProviderFunction>
    
   
    </>
  )
}
export default App