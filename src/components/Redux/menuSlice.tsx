import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  nav: boolean;
} = {
  nav: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setNav(state) {
      state.nav = !state.nav;
    },
  },
});

export const { setNav } = menuSlice.actions;

export default menuSlice.reducer;
