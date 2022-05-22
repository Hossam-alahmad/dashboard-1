import { createSlice } from "@reduxjs/toolkit";

export const themeMode = createSlice({
    name: "theme",
    initialState: {
        mode: window.localStorage.getItem("theme"),
    },
    reducers: {
        changeTheme: (state, action) => {
            state.mode = action.payload;
        },
    },
});

export const { changeTheme } = themeMode.actions;

export default themeMode.reducer;
