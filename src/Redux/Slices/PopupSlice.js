import { createSlice } from "@reduxjs/toolkit";

export const PopupSlice = createSlice({
    initialState: { value: false },
    name: "Popup",
    reducers: {
        setPopup: (state) => {
            state.value = !state.value;
            console.log(state.value)
        }
    }
});

export const { setPopup } = PopupSlice.actions;

export default PopupSlice.reducer;