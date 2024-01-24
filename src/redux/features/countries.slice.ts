import { createSlice } from "@reduxjs/toolkit";

export interface ICountry {
    flags: {
      png: string;
      svg: string;
      alt: string;
    };
    name: {
      common: string;
      official: string;
      nativeName: {
        [key: string]: {
          official: string;
          common: string;
        };
      };
    };
    capital: string[];
    region: string;
    population: number;
}

const initialState:{countries:ICountry[]} = {countries:[]}
export const coutriesSlice = createSlice({
    name: 'coutries',
    initialState,
    reducers: {
        setCountries: (state, action) => {
        console.log(action.payload)
          state.countries = action.payload
        }
    }
})

export const { setCountries } = coutriesSlice.actions

export default coutriesSlice.reducer;




