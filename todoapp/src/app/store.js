import { configureStore } from "@reduxjs/toolkit";
import todoreducer from "./todoSlice"
export const Store=configureStore({
    reducer:{
      todoreducer
    }
})