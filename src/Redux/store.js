import { configureStore } from "@reduxjs/toolkit";
import themeMode from "./Reducers/themeMode";

export const store = configureStore({
    reducer: themeMode,
});
