import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  language: boolean;
} = {
  language: true,
};
const languageSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setLanguageEng(state) {
      state.language = !state.language;
    },
    setLanguageRus(state) {
      state.language = !state.language;
    },
  },
});

export const { setLanguageEng, setLanguageRus } = languageSlice.actions;

export default languageSlice.reducer;
