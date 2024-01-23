import { createSlice } from "@reduxjs/toolkit";

export interface Icountry {
    name: string
    image: string
    population: number
    region: string
    capital: string
}

const initialState:Icountry[] = []
export const coutriesSlice = createSlice({
    name: 'coutries',
    initialState,
    reducers: {
        setCountries: (state, action) => {
          state = action.payload
        }
    }
})

export const { setCountries } = coutriesSlice.actions

export default coutriesSlice.reducer;




