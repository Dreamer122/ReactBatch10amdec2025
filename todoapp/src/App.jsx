import React from 'react'
import { Todoinput } from './Components/Todoinput'
import { TodoList } from './Components/TodoList'
const App = () => {
  return (
    <div className='mx-auto w-1/2 border text-center '>
 <h2>Add task here</h2>
 <div className='mx-auto max-w-max'>
  <Todoinput/>
  <TodoList/>
 </div>

    </div>
  )
}
export default App
