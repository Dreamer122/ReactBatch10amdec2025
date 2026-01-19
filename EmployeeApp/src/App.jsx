import {BrowserRouter,Routes,Route} from "react-router"

import { Home } from "./Pages/Home"
import { AddEmp } from "./Pages/AddEmp";
import { EditEmp } from "./Pages/EditEmp";
function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/addemployee" element={<AddEmp/>}></Route>
      <Route path="/editemployee" element={<EditEmp/>}></Route>
    </Routes>

    </BrowserRouter>
   
  )
}
export default App;