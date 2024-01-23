import { configureStore } from "@reduxjs/toolkit";
import countriesSlice from "./features/countries.slice";
import selectorSlice from "./features/selector.slice";

export const store = configureStore({
    reducer: {
       countries: countriesSlice,
       selector: selectorSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch