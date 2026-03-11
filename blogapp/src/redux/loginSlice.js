import { createSlice } from '@reduxjs/toolkit'

const initialState={
    session:localStorage.getItem("loginsession")?JSON.parse( localStorage.getItem("loginsession")):null,
    loading:false,
 
}
const loginSlice=createSlice({
    name:"login",
    initialState:initialState,
    reducers:{
        isLoading:(state,action)=>{
            state.loading=action.payload
        },
        logout:(state,action)=>{
          localStorage.removeItem("loginsession")
        },
        islogin:(state,action)=>{
            state.session=action.payload
        },
      
    }
})

export const {isLoading,logout,islogin}=loginSlice.actions
export default loginSlice.reducer
