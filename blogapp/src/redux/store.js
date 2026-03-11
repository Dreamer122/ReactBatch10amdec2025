import { configureStore } from '@reduxjs/toolkit'
import loginreducer from "./loginSlice"
export const Store=configureStore({
    reducer:{
        blog:loginreducer
    }
})