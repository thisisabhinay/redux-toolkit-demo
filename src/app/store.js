import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./features/counter/sliceCounter"

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})