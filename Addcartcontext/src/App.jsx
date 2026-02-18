import { Home } from "./Home"
import { ProviderFunction } from "./context/ContextProvider"
import { BrowserRouter,Routes,Route } from "react-router"
// import { Productbycat } from "./Pages/Productbycat"
import { Navbar } from "./Components/Navbar"
import { CartPage } from "./Pages/CartPage"
import { ProductDesc } from "./Pages/ProductDesc"
import { Toaster } from "react-hot-toast"
import { Loginform } from "./Pages/Loginform"
import { ProtectedRoute } from "./Components/ProtectedRoute"
import { LoginProvider } from "./context/ContextProvider"
import { Service } from "./Pages/Service"
import { useOnline } from "./utils/useOnline"
import { lazy ,Suspense} from "react"
const Productbycat=lazy(()=>import("./Pages/Productbycat"))
function App(){
  const isonline=useOnline()
  if(!isonline){
    return <h1 className="text-center text-4xl text-bold">You are offline</h1>
  }
  return(
    <>
    <ProviderFunction>
   <LoginProvider>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/category/:name/:id" element={<Suspense fallback={<p>Loading...</p>}><Productbycat></Productbycat></Suspense>}></Route>
    <Route path="/cart" element={ <ProtectedRoute> <CartPage/> </ProtectedRoute> }/>
    <Route path="/category/:catname/:catid/:title/:id" element={<ProductDesc/>}/>
    <Route path="/login" element={<Loginform/>}/>
    <Route path="/service" element={<Service/>}/>
    </Routes>
    <Toaster/>
    </BrowserRouter>
    </LoginProvider>
    </ProviderFunction>
    
   
    </>
  )
}
export default App