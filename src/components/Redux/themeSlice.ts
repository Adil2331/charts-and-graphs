import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  theme: boolean;
} = {
  theme: true,
};
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state) {
      state.theme = !state.theme;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
