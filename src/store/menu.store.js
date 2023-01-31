
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    menuOpened: false
}

const menuSlice = createSlice({
    name: "modal",
    initialState: initialState,
    reducers: {
        openMenu(state) {
            state.menuOpened = true;
        },
        closeMenu(state) {
            state.menuOpened = false;
        }
    }
})

export const menusActions = menuSlice.actions;

export default menuSlice.reducer;