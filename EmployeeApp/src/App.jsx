import {BrowserRouter,Routes,Route} from "react-router"

import { Home } from "./Pages/Home"
import { AddEmp } from "./Pages/AddEmp";
import { EditEmp } from "./Pages/EditEmp";
import { Layout } from "./Pages/Layout";
function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      
      
      <Route path="" index element={<Home/>}></Route>
      <Route path="/addemployee" element={<AddEmp/>}></Route>
      <Route path="/editemployee" element={<EditEmp/>}></Route>
      </Route>
    </Routes>

    </BrowserRouter>
   
  )
}
export default App;