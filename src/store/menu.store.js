
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    menuOpened: false,
    menuAccountOpened: false,
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
        },
        openMenuAccount(state) {
            state.menuAccountOpened = true;
        },
        closeMenuAccount(state) {
            state.menuAccountOpened = false;
        }
    }
})

export const menusActions = menuSlice.actions;

export default menuSlice.reducer;