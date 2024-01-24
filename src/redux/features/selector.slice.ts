import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";


 export type selector = "Africa" | "America" | "Europe" | "Asia" | "Oceania" | null

const initialState: {selector:selector} = {
  selector: null
}
export const selectorSlice = createSlice({
  name: "selector",
  initialState,
  reducers: {
    setSelector: (state, action: {payload: selector} ) => {
      state.selector = action.payload;
    }
  }
});

export const {
  setSelector
} = selectorSlice.actions;

export default selectorSlice.reducer;