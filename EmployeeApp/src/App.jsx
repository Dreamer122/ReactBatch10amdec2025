import {BrowserRouter,Routes,Route} from "react-router"

import { Home } from "./Pages/Home"
import { AddEmp } from "./Pages/AddEmp";
import { EditEmp } from "./Pages/EditEmp";
import { Layout } from "./Pages/Layout";
import {Toaster} from "react-hot-toast";
import { ViewEmp } from "./Pages/ViewEmp";
function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      
      
      <Route path="" index element={<Home/>}></Route>
      <Route path="/addemployee" element={<AddEmp/>}></Route>
      <Route path="/editemployee/:id" element={<EditEmp/>}></Route>
      <Route path="/viewemployee/:id/:name" element={<ViewEmp/>}></Route>
      </Route>
    </Routes>
<Toaster/>
    </BrowserRouter>
   
  )
}
export default App;