import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  selector: "Africa" | "America" | "Europe" | "Asia" | "Oceania" | null
}
const initialState: InitialState = {
  selector: null
}
export const selectorSlice = createSlice({
  name: "selector",
  initialState,
  reducers: {
    setSelector: (state, action: {payload: InitialState["selector"]} ) => {
      state.selector = action.payload;
    }
  }
});

export const {
  setSelector
} = selectorSlice.actions;

export default selectorSlice.reducer;