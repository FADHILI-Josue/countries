import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";


 export type Eselector = "Africa" | "America" | "Europe" | "Asia" | "Oceania" | null

const initialState: {selector:Eselector} = {
  selector: null
}
export const selectorSlice = createSlice({
  name: "selector",
  initialState,
  reducers: {
    setSelector: (state, action: {payload: Eselector} ) => {
      state.selector = action.payload;
    }
  }
});

export const {
  setSelector
} = selectorSlice.actions;

export default selectorSlice.reducer;