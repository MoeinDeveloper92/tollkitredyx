import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "../store/counter"
export const store = configureStore({
    reducer: {
        todoSlice: todoReducer
    },
})

