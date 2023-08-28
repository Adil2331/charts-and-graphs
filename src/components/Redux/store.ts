import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import menuSlice from "./menuSlice";
import languageSlice from "./languageSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    theme: themeSlice,
    menu: menuSlice,
    language: languageSlice,
  },
});
declare global {
  type RootState = ReturnType<typeof store.getState>;
}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
