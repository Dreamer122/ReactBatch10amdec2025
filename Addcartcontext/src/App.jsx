import { Home } from "./Home"
import { ProviderFunction } from "./context/ContextProvider"
function App(){
  return(
    <>
    <ProviderFunction>
  <h1> ADD cart using context</h1>
    <Home>
    </Home>
    <p> hello p tag</p>
    </ProviderFunction>
    
   
    </>
  )
}
export default App